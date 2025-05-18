import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, User } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  service: '',
  date: '',
  time: '',
  message: ''
};

const RequestForm: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
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
    <section id="request" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal>
            <div className="backdrop-blur-sm bg-dark-900/40 p-6 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Request a <span className="text-primary-500">Service</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below to schedule a service appointment or request a quote. Our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 rounded-full p-3 text-white flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 font-heading">Location</h3>
                    <p className="text-gray-300">
                      834 Blue Mound Road West<br />
                      Haslet Texas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 rounded-full p-3 text-white flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 font-heading">Phone</h3>
                    <p className="text-gray-300">
                      <a href="tel:+18174392488" className="hover:text-primary-500 transition-colors">
                        Office – (817) 439-2488
                      </a><br />
                      <span className="text-sm text-gray-400">Fax – (817) 439-2489</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 rounded-full p-3 text-white flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 font-heading">Email</h3>
                    <p className="text-gray-300">
                      <a href="mailto:schedule@diversifiedplumbingservices.com" className="hover:text-primary-500 transition-colors">
                        schedule@diversifiedplumbingservices.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 rounded-full p-3 text-white flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 font-heading">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="metallic-card p-6 md:p-8 backdrop-blur-sm bg-dark-900/40">
              <h3 className="text-2xl font-semibold mb-4 font-heading">Request Service</h3>
              
              {formSubmitted && (
                <div className="bg-green-800/30 border border-green-700 text-green-100 rounded-md p-4 mb-6">
                  Thank you for your request! We'll contact you shortly to confirm your appointment.
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
                    <label htmlFor="name" className="block text-gray-300 mb-1">
                      Full Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field pl-10"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  
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
                        placeholder="johndoe@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                        placeholder="(817) 439-2488"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-gray-300 mb-1">
                      Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="input-field pl-10"
                        placeholder="123 Main St, Haslet, TX"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-300 mb-1">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Plumbing</option>
                    <option value="commercial">Small Commercial Plumbing</option>
                    <option value="repairs">Repairs & Maintenance</option>
                    <option value="installation">New Installation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-300 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="input-field pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-gray-300 mb-1">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-500" />
                      </div>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="input-field pl-10"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (7AM - 10AM)</option>
                        <option value="midday">Midday (10AM - 1PM)</option>
                        <option value="afternoon">Afternoon (1PM - 4PM)</option>
                        <option value="evening">Evening (4PM - 6PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 mb-1">
                    Message / Description of Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field"
                    placeholder="Please describe your plumbing issue or service needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-md transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;