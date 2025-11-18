// Runtime doc types for tenders
export const TenderStatus = {
    LIVE: 'live now',
    UPCOMING: 'upcoming',
    CLOSED: 'closed',
    CANCELLED: 'cancelled'
};

// Field keys used throughout UI and services
export const TenderField = {
    ID: 'id',
    TENDER_ID: 'tenderId',
    TITLE: 'title',
    STARTING_DATE: 'startingDate',
    ENDING_DATE: 'endingDate',
    STATUS: 'status',
    PDF_URL: 'pdfUrl',
    IS_UPDATE: 'isUpdate'
};

export function normalizeTender(raw) {
    return {
        id: raw.id,
        tenderId: raw.tenderId,
        title: raw.title,
        startingDate: raw.startingDate,
        endingDate: raw.endingDate,
        status: raw.status,
        pdfUrl: raw.pdfUrl ?? null,
        isUpdate: Boolean(raw.isUpdate)
    };
}
