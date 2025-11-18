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
      <VoluntaryForm />
    </div>
  );
};

export default Voluntary;
