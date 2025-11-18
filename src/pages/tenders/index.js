// Tenders Page Index - Centralized exports
// Main entry point for tenders page functionality

// Components
export { default as TendersHero } from './components/TendersHero.jsx'
export { default as TendersStats } from './components/TendersStats.jsx'
export { default as TendersTable } from './components/TendersTable.jsx'

// Services
export { TendersService, fetchTenders, fetchTenderById, searchTenders } from './services/tendersService.js'

// Hooks
export { useTendersData } from './hooks/useTendersData.js'

// Data
export { mockTenders } from './data/mockTendersData.js'

// Types
export { TenderStatus, TenderField } from './types/tenderTypes.js'
