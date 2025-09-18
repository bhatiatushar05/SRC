const MasterAboutUs = () => {
  const description = 'Social Responsibility Council (SRC) is a New Delhi based registered voluntary non-profit organization, registered under the Indian Companies Act, 1956, as amended in 2013. SRC has been established to create awareness about the various facets of social responsibility of persons / groups / societies / corporates in India and abroad. It will do so through organizing various programmes and initiatives in related fields.';

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl mb-5">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold text-textColor text-center mb-6">
            About Us
          </h2>
          <div 
            className="text-center font-normal text-black text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default MasterAboutUs;

