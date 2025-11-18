import { useEffect, useMemo, useState, useCallback } from 'react';
import { tendersService } from '../../../../supabase/services/tenders.js';
import { isSupabaseConfigured } from '../../../../supabase/config.js';
import { TenderStatus } from '../types/tenderTypes';

export function useTendersData() {
    const [tenders, setTenders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch tenders from Supabase
    const fetchTenders = useCallback(async () => {
        setLoading(true);
        setError(null);

        // Check if Supabase is configured
        if (!isSupabaseConfigured) {
            console.warn('Supabase is not configured. Tenders page will show empty state.');
            setError('Supabase is not configured. Please configure your environment variables.');
            setTenders([]);
            setLoading(false);
            return;
        }

        try {
            const { data, error: fetchError } = await tendersService.getAllTenders();
            if (fetchError) {
                console.error('Error fetching tenders:', fetchError);
                setError(fetchError.message || 'Failed to fetch tenders. Please check your connection.');
                setTenders([]);
            } else {
                setTenders(data || []);
                setError(null);
            }
        } catch (err) {
            console.error('Error fetching tenders:', err);
            setError(err.message || 'An unexpected error occurred while fetching tenders.');
            setTenders([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial fetch
    useEffect(() => {
        fetchTenders();
    }, [fetchTenders]);

    // Set up real-time subscription
    useEffect(() => {
        // Only subscribe if Supabase is configured
        if (!isSupabaseConfigured) {
            return;
        }

        const handleRealtimeUpdate = (payload) => {
            console.log('Real-time tender update:', payload);

            // Supabase real-time payload uses 'event' field
            const eventType = payload.eventType || payload.event;

            if ((eventType === 'INSERT' || eventType === 'insert') && payload.new) {
                // Add new tender
                setTenders(prev => [payload.new, ...prev]);
            } else if ((eventType === 'UPDATE' || eventType === 'update') && payload.new) {
                // Update existing tender
                setTenders(prev =>
                    prev.map(tender =>
                        tender.id === payload.new.id ? payload.new : tender
                    )
                );
            } else if ((eventType === 'DELETE' || eventType === 'delete') && payload.old) {
                // Remove deleted tender
                setTenders(prev =>
                    prev.filter(tender => tender.id !== payload.old.id)
                );
            }
        };

        // Subscribe to real-time changes
        const subscription = tendersService.subscribeToTenders(handleRealtimeUpdate);

        // Cleanup subscription on unmount
        return () => {
            if (subscription) {
                tendersService.unsubscribeFromTenders();
            }
        };
    }, []);


    const stats = useMemo(() => ({
        live: tenders.filter(t => t.status.toLowerCase() === TenderStatus.LIVE).length,
        upcoming: tenders.filter(t => t.status.toLowerCase() === TenderStatus.UPCOMING).length,
        closed: tenders.filter(t => t.status.toLowerCase() === TenderStatus.CLOSED).length
    }), [tenders]);

    const getDaysUntilEnd = (endDate) => {
        const now = new Date();
        const end = new Date(endDate);
        return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
    };

    const getBadgeStyle = (tender) => {
        if (tender.isUpdate) return 'update';
        const days = getDaysUntilEnd(tender.endingDate);
        if (days <= 3) return 'urgent';
        if (days <= 7) return 'warning';
        return 'normal';
    };

    const getStatusColor = (status) => {
        switch ((status || '').toLowerCase()) {
            case TenderStatus.LIVE.toLowerCase(): return 'bg-emerald-500';
            case TenderStatus.UPCOMING.toLowerCase(): return 'bg-amber-500';
            case TenderStatus.CLOSED.toLowerCase(): return 'bg-gray-500';
            case TenderStatus.CANCELLED.toLowerCase(): return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const canDownload = (tender) => {
        if (!tender.pdfUrl) return false;

        const status = (tender.status || '').toLowerCase();
        // Only allow download if status is "live now"
        // Block download for: closed, cancelled, upcoming, or any other status
        return status === TenderStatus.LIVE.toLowerCase();
    };

    return {
        tenders,
        loading,
        error,
        stats,
        getDaysUntilEnd,
        getBadgeStyle,
        getStatusColor,
        formatDate,
        canDownload,
        refetch: fetchTenders,
        isSupabaseConfigured
    };
}

export default useTendersData;
