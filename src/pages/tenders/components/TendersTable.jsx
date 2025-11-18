import React from "react";
import { Download, FileText, Calendar, Clock, RefreshCw } from "lucide-react";

const TendersTable = ({
  loading,
  error,
  tenders,
  getStatusColor,
  getBadgeStyle,
  getDaysUntilEnd,
  formatDate,
  canDownload,
  refetch,
  isSupabaseConfigured,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-primary-600 shadow-sm px-6 py-5">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-white">Tenders List</h2>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-200 border-t-indigo-600"></div>
          </div>
        ) : tenders.length === 0 ? (
          <div className="p-16 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Tenders Found
            </h3>
            <p className="text-gray-600">
              There are no tenders available at the moment.
            </p>
            {error && refetch && (
              <button
                onClick={refetch}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mt-4"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Sr.No
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Starting Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Closing Date
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tenders.map((tender, index) => (
                  <tr
                    key={tender.id}
                    className="hover:bg-indigo-50/50 transition-colors group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                              {tender.title}
                            </p>
                            {tender.status.toLowerCase() === "live now" && (
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold animate-pulse ${
                                  getBadgeStyle(tender) === "update"
                                    ? "bg-rose-100 text-rose-700"
                                    : getBadgeStyle(tender) === "urgent"
                                    ? "bg-red-100 text-red-700"
                                    : getBadgeStyle(tender) === "warning"
                                    ? "bg-orange-100 text-orange-700"
                                    : "bg-emerald-100 text-emerald-700"
                                }`}
                              >
                                {tender.isUpdate ? "UPDATE" : "LIVE"}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            ID: {tender.tenderId}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Calendar className="w-4 h-4 text-indigo-500" />
                        {formatDate(tender.startingDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Clock className="w-4 h-4 text-rose-500" />
                        {formatDate(tender.endingDate)}
                      </div>
                      {tender.status.toLowerCase() === "live now" && (
                        <div
                          className={`text-xs font-semibold mt-1 ${
                            getDaysUntilEnd(tender.endingDate) <= 3
                              ? "text-red-600"
                              : getDaysUntilEnd(tender.endingDate) <= 7
                              ? "text-orange-600"
                              : "text-emerald-600"
                          }`}
                        >
                          {getDaysUntilEnd(tender.endingDate)} days left
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white ${getStatusColor(
                          tender.status
                        )}`}
                      >
                        {tender.status.charAt(0).toUpperCase() +
                          tender.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {canDownload(tender) ? (
                        <a
                          href={tender.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
                        >
                          <Download className="w-4 h-4" />
                          PDF
                        </a>
                      ) : (
                        <div className="group/tooltip relative inline-block">
                          <button
                            disabled
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 text-sm rounded-lg font-medium cursor-not-allowed"
                          >
                            <Download className="w-4 h-4" />
                            PDF
                          </button>
                          <div className="absolute bottom-full right-0 mb-2 hidden group-hover/tooltip:block z-10">
                            <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap">
                              {(() => {
                                const status = tender.status.toLowerCase();
                                if (status === "upcoming") {
                                  return `Available from ${formatDate(
                                    tender.startingDate
                                  )}`;
                                } else if (
                                  status === "closed" ||
                                  status === "cancelled"
                                ) {
                                  return `Not available - ${tender.status}`;
                                }
                                return `Not available for download`;
                              })()}
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TendersTable;
