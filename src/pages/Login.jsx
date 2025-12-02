import React from "react";
import { Building2, LineChart } from "lucide-react";

const csrProjects = [
  {
    id: 1,
    projectName: "Space Lab Project-Under CSR initiative of BPCL",
    psuName: "Bharat Petroleum Corporation Limited (BPCL)",
    description:
      "ISRO-recognized Space Tutor organizations for the establishment of “Space Labs” in EMRS.",
    dashboardLink: "https://nstfds.vercel.app/login",
  },
];

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section (similar style to Gallery.jsx) */}
      <div className="relative h-[250px] bg-gradient-to-br from-[#1D3A7C] to-[#2C498D]/40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/static/icon.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CSR Projects
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Projects Grid */}
        {csrProjects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {csrProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-200 border border-gray-200 flex flex-col"
              >
                <div className="px-5 pt-5">
                  <div className="flex items-start gap-2 mb-1">
                    <Building2 className="h-4 w-4 mt-1 text-primary-700" />
                    <h2 className="text-base font-semibold text-primary-800 leading-snug">
                      {project.projectName}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="h-3 w-3 text-gray-400" />
                    <p className="text-xs font-medium text-gray-500">
                      {project.psuName}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="px-5 pb-4 mt-auto">
                  <div className="flex justify-end">
                    <a
                      href={project.dashboardLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-md border text-xs font-semibold tracking-[0.16em] uppercase px-4 py-2 transition-colors ${
                        project.dashboardLink
                          ? "border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white bg-white"
                          : "border-gray-300 text-gray-400 cursor-not-allowed"
                      }`}
                      aria-disabled={!project.dashboardLink}
                    >
                      <LineChart className="h-4 w-4" />
                      <span>View Dashboard</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Projects Message */}
        {csrProjects.length === 0 && (
          <div className="mt-10">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 px-8 py-10 text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-3xl">
                📂
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No CSR Projects Available
              </h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                CSR projects will be listed here as they become available.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Login;
