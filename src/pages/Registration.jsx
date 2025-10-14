import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    institution: '',
    dateOfBirth: '',
    contactNumber: '',
    modePreferences: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Character limits
    if (name === 'name' && value.length > 50) return;
    if (name === 'contactNumber' && value.length > 10) return;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.institution.trim()) {
      newErrors.institution = 'Institution/Organization is required';
    }

    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid 10-digit contact number';
    }

    if (!formData.modePreferences.trim()) {
      newErrors.modePreferences = 'Mode preferences is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Registration data:', formData);
      
      // For now, redirect to success page
      navigate('/success', { 
        state: { 
          type: 'registration',
          data: formData 
        } 
      });
    }
  };

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

      {/* Registration Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Registration Link */}
          <div className="text-center mb-8">
            <a 
              href="#registration-form" 
              className="text-[#1D3A7C] hover:text-[#2C498D] font-medium text-lg transition-colors duration-300"
            >
              See Summit 2022 Registration
            </a>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12" id="registration-form">
            <h2 className="text-2xl md:text-3xl font-bold text-[#136A89] mb-8 text-center">
              Registration Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`flex-1 border-b-2 border-gray-300 focus:border-[#1D3A7C] outline-none py-2 px-0 bg-transparent ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your full name"
                  />
                  <span className="ml-4 text-sm text-gray-500 min-w-[50px]">
                    {formData.name.length}/50
                  </span>
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full border-b-2 border-gray-300 focus:border-[#1D3A7C] outline-none py-2 px-0 bg-transparent ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full border-b-2 border-gray-300 focus:border-[#1D3A7C] outline-none py-2 px-0 bg-transparent ${
                    errors.address ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your address"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              {/* Institution/Organization Field */}
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                  Institution/Organization
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className={`w-full border-b-2 border-gray-300 focus:border-[#1D3A7C] outline-none py-2 px-0 bg-transparent ${
                    errors.institution ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your institution or organization"
                />
                {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution}</p>}
              </div>

              {/* Date of Birth Field */}
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={`w-full border-b-2 border-gray-300 focus:border-[#1D3A7C] outline-none py-2 px-0 bg-transparent ${
                    errors.dateOfBirth ? 'border-red-500' : ''
                  }`}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
              </div>

              {/* Contact Number Field */}
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <div className="flex items-center">
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className={`flex-1 border-b-2 border-gray-300 focus:border-[#1D3A7C] outline-none py-2 px-0 bg-transparent ${
                      errors.contactNumber ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your contact number"
                    maxLength="10"
                  />
                  <span className="ml-4 text-sm text-gray-500 min-w-[50px]">
                    {formData.contactNumber.length}/10
                  </span>
                </div>
                {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
              </div>

              {/* Mode Preferences Field */}
              <div>
                <label htmlFor="modePreferences" className="block text-sm font-medium text-gray-700 mb-2">
                  Mode Preferences
                </label>
                <select
                  id="modePreferences"
                  name="modePreferences"
                  value={formData.modePreferences}
                  onChange={handleInputChange}
                  className={`w-full border-b-2 border-gray-300 focus:border-[#1D3A7C] outline-none py-2 px-0 bg-transparent ${
                    errors.modePreferences ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select mode preference</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
                {errors.modePreferences && <p className="text-red-500 text-sm mt-1">{errors.modePreferences}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#1D3A7C] hover:bg-[#2C498D] text-white font-bold text-lg py-4 px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
