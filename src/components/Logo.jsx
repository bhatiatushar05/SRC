const Logo = () => {
  return (
    <div className="inline-block relative overflow-hidden h-45 w-60 animate-spin-once">
      <div className="absolute top-0 left-0 w-0 h-0 border-l-[105px] border-r-[105px] border-b-[180px] border-l-transparent border-r-transparent border-b-green-500"></div>
      <div className="absolute top-7 left-9 w-0 h-0 border-l-[87px] border-r-[87px] border-b-[150px] border-l-transparent border-r-transparent border-b-green-600 animate-slide-right"></div>
      <div className="absolute top-15 left-9 w-0 h-0 border-l-[70px] border-r-[70px] border-b-[120px] border-l-transparent border-r-transparent border-b-gray-700 animate-slide-right"></div>
      <div className="absolute top-30 left-17 w-0 h-0 border-l-[35px] border-r-[35px] border-b-[60px] border-l-transparent border-r-transparent border-b-white animate-slide-down"></div>
    </div>
  );
};

export default Logo;

