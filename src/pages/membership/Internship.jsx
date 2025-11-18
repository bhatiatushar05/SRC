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
      <InternshipForm />
    </div>
  );
};

export default Internship;
