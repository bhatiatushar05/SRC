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
      <TendersStats stats={state.stats} />
      <TendersTable
        loading={state.loading}
        error={state.error}
        tenders={state.tenders}
        getStatusColor={state.getStatusColor}
        getBadgeStyle={state.getBadgeStyle}
        getDaysUntilEnd={state.getDaysUntilEnd}
        formatDate={state.formatDate}
        canDownload={state.canDownload}
        refetch={state.refetch}
        isSupabaseConfigured={state.isSupabaseConfigured}
      />
    </div>
  );
};

export default Tenders;
