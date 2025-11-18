import React from "react";

const TendersHero = () => {
  return (
    <div
      className="relative overflow-hidden "
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 80%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/static/icon.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(4, 32, 78, 0.89) 0%, rgba(69, 96, 110, 0.9) 40%, rgb(255, 255, 255) 100%)",
            zIndex: 1,
          }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-50">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Tender Opportunities
          </h1>
          <p className="text-lg text-white">
            View all tender opportunities and download documents
          </p>
        </div>
      </div>
    </div>
  );
};

export default TendersHero;
