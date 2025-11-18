import React from "react";
import {
  useTendersData,
  TendersHero,
  TendersStats,
  TendersTable,
} from "./tenders/index.js";

const Tenders = () => {
  const state = useTendersData();
  return (
    <div className="min-h-screen">
      <TendersHero />
      <TendersTable
        loading={state.loading}
        filter={state.filter}
        setFilter={state.setFilter}
        searchQuery={state.searchQuery}
        setSearchQuery={state.setSearchQuery}
        filteredTenders={state.filteredTenders}
        getStatusColor={state.getStatusColor}
        getBadgeStyle={state.getBadgeStyle}
        getDaysUntilEnd={state.getDaysUntilEnd}
        formatDate={state.formatDate}
        canDownload={state.canDownload}
      />
    </div>
  );
};

export default Tenders;
