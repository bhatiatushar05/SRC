import InternshipForm from '../../components/InternshipForm';

const Internship = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-textColor mb-4">Internship Program</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Join our internship program and gain valuable experience in social responsibility, 
          sustainability, and community development. Work with our team on meaningful projects 
          that make a real impact.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Program Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Hands-on Experience</h3>
            <p className="text-gray-700">Work on real projects that contribute to social and environmental causes.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Mentorship</h3>
            <p className="text-gray-700">Get guidance from experienced professionals in the field.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Certification</h3>
            <p className="text-gray-700">Receive a certificate upon successful completion of the program.</p>
          </div>
        </div>
      </div>

      <InternshipForm />
    </div>
  );
};

export default Internship;
