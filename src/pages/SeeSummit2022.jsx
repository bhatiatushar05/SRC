import { Link } from 'react-router-dom';

const SeeSummit2022 = () => {
  const speakers = [
    {
      name: "Shri. Ashwini Kumar Choubey",
      title: "Honorable Minister of State for Consumer Affairs, Food and Public Distribution and Environment, Forest and Climate Change",
      role: "Honorable Chief Guest",
      image: "/static/content/Shri_Ashwini_Kumar_Choubey.jpg"
    },
    {
      name: "Shri. Mama Natung",
      title: "Honorable Minister of Department of Environment, Forest and Climate Change, Govt. of Arunachal Pradesh",
      role: "Honorable Chief Guest",
      image: "/static/content/Mama_Natung_Guest_of_Honour.jpg"
    },
    {
      name: "Mr. Naresh Kumar, IAS",
      title: "The chief secretary of the government of Arunachal Pradesh",
      role: "Honorable Chief Guest",
      image: ""
    },
    {
      name: "Honorable Justice Swatanter Kumar",
      title: "Former Chairman, National Green Tribunal",
      role: "Honorable Keynote Speaker",
      image: "/static/content/Justice_Swatanter_Kumar_Keynote_Speaker.jpg"
    },
    {
      name: "Honorable Justice Sheo Kumar Singh",
      title: "Judicial Member, National Green Tribunal",
      role: "Guest of Honour",
      image: "/static/content/Justice_Sheo_Kumar_Singh.jpg"
    },
    {
      name: "Shri. Satish Upadhyay",
      title: "Honorable Vice-Chairperson, New Delhi Municipal Council",
      role: "Guest of Honour",
      image: "/static/content/shri_satish_upadhyay.jpg"
    },
    {
      name: "Shri. Vinai Kumar Saxena",
      title: "Honorable Chairman of the Khadi and Village Industries Commission",
      role: "Guest of Honour",
      image: "/static/content/Shri._Vinai_Kumar_Saxena_Guest_of_Honour.jpg"
    },
    {
      name: "Dr. Suvrokamal Dutta",
      title: "Renowned Right Wing Media Think Tank",
      role: "Guest of Honour",
      image: "/static/content/Dr._S.K_Dutta_Guest_of_Honour_Hutj9HZ.jpg"
    },
    {
      name: "Mr. Arun Khurana",
      title: "Founder, Social Responsibility Council",
      role: "Honorable Organizer",
      image: "/static/content/Mr._Arun_Khurana_Honorable_Organizer.jpg"
    },
    {
      name: "Dr. Rawail Singh",
      title: "Member University Court and Member of Standing Committee of Delhi University",
      role: "Honorable Organizing Head",
      image: "/static/content/Dr._Rawail_Singh.jpg"
    },
    {
      name: "Miss Prachi Tehlan",
      title: "Actress",
      role: "Special Guest",
      image: ""
    },
    {
      name: "Advocate Vivek Narayan Sharma",
      title: "Counsel/Advocate, Supreme Court of India",
      role: "Moderator",
      image: "/static/content/Mr._Vivek_Narayan_Sharma_Moderator.jpg"
    },
    {
      name: "Mrs. Sangeeta",
      title: "Advocate Supreme Court of India",
      role: "Panelist",
      image: ""
    },
    {
      name: "Shri Sanjeev Sharma",
      title: "Social Activist",
      role: "Special Guest",
      image: ""
    },
    {
      name: "Shri. Tanmoy Chakrabarty",
      title: "Group Government Affairs Officer of Tata Sons",
      role: "Panelist",
      image: "/static/content/Shri_Tanmoy_Chakrabarty_Panelist.jpg"
    },
    {
      name: "Dr. Anil Kumar",
      title: "Former Director Environment, Govt. of NCT of Delhi",
      role: "Moderator",
      image: "/static/content/Dr._Anil_Kumar_Moderator.jpg"
    },
    {
      name: "Mr. Praveen Garg, IAS (Retd.)",
      title: "Special Secretary, Ministry of Environment, Forest and Climate Change, Govt. of India",
      role: "Panelist",
      image: "/static/content/Mr._Praveen_Garg_Panelist.jpg"
    },
    {
      name: "Mr. S. Rajesh, IFS",
      title: "Chief Conservator of Forests (Environment and Climate Change), Government of Arunachal",
      role: "Panelist",
      image: ""
    },
    {
      name: "Peepal Baba (Swami Prem Parivartan)",
      title: "Environmentalist",
      role: "Panelist",
      image: "/static/content/Peepal_Baba_Swami_Prem_Parivartan_Panelist.jpg"
    },
    {
      name: "Mr. Gaurav Chopra",
      title: "India Director, Global Environmental Protection Drive",
      role: "Panelist",
      image: "/static/content/Mr._Gaurav_Chopra_Panelist.jpg"
    },
    {
      name: "Mr. Aashish Beergi",
      title: "Founder & CEO, The Mash Project Foundation",
      role: "Panelist",
      image: "/static/content/Aashish_Beergi_Panelist.jpg"
    },
    {
      name: "Mr. Harshad Gupta",
      title: "Founder & Director, Ecochirp Foundation",
      role: "Panelist",
      image: "/static/content/Mr._Harshad_Gupta.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Logo */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img 
                src="/static/se2022.png" 
                alt="SEE Summit 2022 Logo" 
                className="w-full max-w-md"
              />
            </div>
            
            {/* Title */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-[#136A89]">THE FOURTH</span>
                <br />
                <span className="text-[#136A89]">SUSTAINABLE</span>
                <br />
                <span className="text-[#1D3A7C] font-extrabold">ENVIRONMENT</span>
                <br />
                <span className="text-[#136A89]">AND ENERGY</span>
                <br />
                <span className="text-[#136A89]">SUMMIT 2022</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#136A89] mb-6">
            About SEE Summit 2022
          </h2>
          
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              The 4th edition of "The Sustainable Environment and Energy Summit 2022" is an initiative of the 
              Social Responsibility Council (SRC), a leading contemporary think tank working meticulously towards 
              bringing positive environmental changes to the world. This year, the theme of the SEE Summit-2022 
              is "Environment, Social, and Governance (ESG)". The Summit is a forum for the judiciary, policy 
              makers, academia, industry and other stakeholders to showcase and exchange their concerns, 
              knowledge, ideas, and actions towards developing sustainable environmental conditions while 
              honouring the pace of economic growth.
            </p>
            
            <p>
              At this day-long conference, the meticulously selected panelists and audience will have the influence, 
              intelligence, and competence to drive social, environmental, and economic development. We foresee 
              the collaborative and innovative environment at the Summit could potentially help stakeholders 
              explore synergies and move towards developing mutually beneficial opportunities. SRC recognises 
              the vital role of the judiciary, academia, policymakers, innovators, corporates, and financial 
              institutions in bringing about positive change on a global scale.
            </p>
          </div>

          {/* Discussion Points */}
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              The following shall be the discussion points in the Summit:
            </h3>
            <ul className="space-y-3 text-gray-700 text-base md:text-lg">
              <li className="flex items-start">
                <span className="text-[#1D3A7C] font-bold mr-2">•</span>
                <span>Business Responsibility and Sustainability Report ( BRSR).</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D3A7C] font-bold mr-2">•</span>
                <span>Sustainability and ESG Disclosures.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D3A7C] font-bold mr-2">•</span>
                <span>ESG Framework and Sustainable Finance.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#136A89] mb-10 text-center">
            Our Honourable Guest & Speakers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {speakers.map((speaker, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 gap-6">
                  {/* Speaker Image */}
                  <div className="flex-shrink-0">
                    <div className="w-28 h-28 rounded-lg overflow-hidden bg-gray-200">
                      {speaker.image ? (
                        <img 
                          src={speaker.image} 
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/static/placeholder.png';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                          <span className="text-gray-500 text-xs text-center px-2">No Image</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3">
                      {speaker.title}
                    </p>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="bg-[#1D3A7C] text-white text-center py-3 px-4">
                  <span className="font-semibold text-sm md:text-base">
                    {speaker.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Register Button */}
          <div className="mt-12 text-center">
            <Link 
              to="/registration"
              className="inline-block bg-[#1D3A7C] hover:bg-[#2C498D] text-white font-bold text-lg px-12 py-4 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeSummit2022;
