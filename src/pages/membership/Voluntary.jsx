import VoluntaryForm from '../../components/VoluntaryForm';

const Voluntary = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-textColor mb-4">Volunteer Program</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Become a volunteer and contribute to our mission of promoting social responsibility. 
          Join our community of changemakers working towards a better future for all.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Volunteer With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-primary-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary-600">Make Impact</h3>
            <p className="text-gray-700">Contribute to meaningful projects that create positive social change.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-green-600">Build Skills</h3>
            <p className="text-gray-700">Develop new skills and gain valuable experience in various fields.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Network</h3>
            <p className="text-gray-700">Connect with like-minded individuals and build lasting relationships.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-purple-600">Recognition</h3>
            <p className="text-gray-700">Get recognized for your contributions and receive certificates.</p>
          </div>
        </div>
      </div>

      <VoluntaryForm />
    </div>
  );
};

export default Voluntary;
