import { mockTenders } from '../data/mockTendersData';
import { normalizeTender } from '../types/tenderTypes';

// Service API mirrors home/services style and can be swapped to supabase later
export async function fetchTenders({ signal } = {}) {
    // Simulate latency
    await new Promise(r => setTimeout(r, 300));
    if (signal?.aborted) return [];
    return mockTenders.map(normalizeTender);
}

export async function fetchTenderById(tenderId, { signal } = {}) {
    await new Promise(r => setTimeout(r, 150));
    if (signal?.aborted) return null;
    const found = mockTenders.find(t => t.tenderId === tenderId);
    return found ? normalizeTender(found) : null;
}

export async function searchTenders(query, { signal } = {}) {
    const data = await fetchTenders({ signal });
    const q = (query ?? '').toLowerCase();
    return data.filter(t =>
        t.title.toLowerCase().includes(q) || t.tenderId.toLowerCase().includes(q)
    );
}

export const TendersService = {
    fetchTenders,
    fetchTenderById,
    searchTenders
};
