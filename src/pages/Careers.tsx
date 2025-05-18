import React, { useState, useEffect } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import { User, Mail, Phone, Briefcase, FileText, Calendar } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  startDate: string;
  resume: File | null;
  coverLetter: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  startDate: '',
  resume: null,
  coverLetter: ''
};

const positions = [
  'Journeyman Plumber',
  'Apprentice Plumber',
  'Service Technician',
  'Project Manager',
  'Administrative Assistant',
  'Other'
];

const Careers: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setFormError('Please fill in all required fields.');
      return;
    }
    
    console.log('Form submitted:', formData);
    
    setFormSubmitted(true);
    setFormError('');
    setFormData(initialFormData);
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-dark-900">
      <div className="container-custom">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-center">
            Join Our <span className="text-gradient">Team</span>
          </h1>
          
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16">
            At Diversified Plumbing Services, we're always looking for talented individuals who share our commitment to excellence and customer service. Join our team and be part of something great.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="metallic-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 font-heading">Application Form</h2>
              
              {formSubmitted && (
                <div className="bg-green-800/30 border border-green-700 text-green-100 rounded-md p-4 mb-6">
                  Thank you for your application! We'll review your information and contact you soon.
                </div>
              )}
              
              {formError && (
                <div className="bg-primary-900/30 border border-primary-700 text-primary-100 rounded-md p-4 mb-6">
                  {formError}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-300 mb-1">
                      First Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="input-field pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-300 mb-1">
                      Last Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="input-field pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-1">
                      Email Address*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-1">
                      Phone Number*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="position" className="block text-gray-300 mb-1">
                      Position Applying For*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-500" />
                      </div>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="input-field pl-10"
                        required
                      >
                        <option value="">Select a position</option>
                        {positions.map(pos => (
                          <option key={pos} value={pos}>{pos}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-gray-300 mb-1">
                      Years of Experience
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="number"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="input-field pl-10"
                        min="0"
                        max="50"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="startDate" className="block text-gray-300 mb-1">
                    Available Start Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="input-field pl-10"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="resume" className="block text-gray-300 mb-1">
                    Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    className="input-field"
                    accept=".pdf,.doc,.docx"
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>

                <div className="mb-6">
                  <label htmlFor="coverLetter" className="block text-gray-300 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={4}
                    className="input-field"
                    placeholder="Tell us why you'd be a great fit for our team..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-md transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Careers;