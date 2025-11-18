import { useEffect, useMemo, useState } from 'react';
import { TendersService } from '../services/tendersService';
import { TenderStatus } from '../types/tenderTypes';

export function useTendersData() {
    const [tenders, setTenders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        TendersService.fetchTenders({ signal: controller.signal })
            .then(setTenders)
            .finally(() => setLoading(false));
        return () => controller.abort();
    }, []);

    const filteredTenders = useMemo(() => {
        const q = searchQuery.toLowerCase();
        return tenders.filter(t => {
            const matchesFilter = filter === 'all' || t.status.toLowerCase() === filter;
            const matchesSearch = t.title.toLowerCase().includes(q) || t.tenderId.toLowerCase().includes(q);
            return matchesFilter && matchesSearch;
        });
    }, [tenders, filter, searchQuery]);

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
            case TenderStatus.LIVE: return 'bg-emerald-500';
            case TenderStatus.UPCOMING: return 'bg-amber-500';
            case TenderStatus.CLOSED: return 'bg-gray-500';
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
        return tender.pdfUrl && (tender.status || '').toLowerCase() === TenderStatus.LIVE;
    };

    return {
        tenders,
        loading,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        filteredTenders,
        stats,
        getDaysUntilEnd,
        getBadgeStyle,
        getStatusColor,
        formatDate,
        canDownload
    };
}

export default useTendersData;
