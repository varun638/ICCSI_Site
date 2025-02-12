import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import axiosinstance from '../../services/axios';

export default function Contacts({ props }) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_location: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    user_location: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Name validation: Max length 40 characters
    if (!formData.user_name) {
      validationErrors.user_name = 'Name is required';
    } else if (formData.user_name.length > 40) {
      validationErrors.user_name = 'Name must be less than or equal to 40 characters';
    }

    if (!formData.user_location) {
      validationErrors.user_location = 'Location is required';
    } else if (formData.user_location.length > 200) {
      validationErrors.user_location = 'Location must be less than or equal to 200 characters';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.user_email) {
      validationErrors.user_email = 'Email is required';
    } else if (!emailPattern.test(formData.user_email)) {
      validationErrors.user_email = 'Please enter a valid email';
    }

    if (!formData.message) {
      validationErrors.message = 'Message is required';
    }

    // If there are errors, return early
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setLoading(true); // Set loading to true before submitting

    try {
      await axiosinstance.post('https://iccsi-site-2985.vercel.app/api/contact', formData, { withCredentials: true });
      setSuccessMessage('Message sent successfully!');
      setFormData({ user_name: '', user_email: '', user_location: '', message: '' });
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading to false after submission attempt
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

     // Clear error when the user starts typing
     setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Contact Header */}
      <div className="bg-blue-900 text-white py-16 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-54xl sm:text-5xl md:text-6xl font-bold mb-6 ${props ? 'mt-15' : ''}`} >Get in Touch</h1>
          <p className="text-xl sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Have questions about ICCSI? We’re here to help! Feel free to reach out.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
                {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
                {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  name="user_location"
                  value={formData.user_location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your location"
                />
                {errors.user_location && <p className="text-red-500 text-sm">{errors.user_location}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-24"
                  placeholder="Your message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg md:text-xl hover:cursor-pointer"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <span>Loading...</span> // Display loading text
                ) : (
                  'Send Message' // Normal button text
                )}
              </button>
              {successMessage && (
                <div className="text-green-600 text-center mb-4">{successMessage}</div> // Display success message
              )}
              {errorMessage && (
                <div className="text-red-600 text-center mb-4">{errorMessage}</div> // Display error message
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center text-lg md:text-xl">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@iccsi.com</p>
                  </div>
                </div>
                <div className="flex items-center text-lg md:text-xl">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 9876543219</p>
                  </div>
                </div>
                <div className="flex items-center text-lg md:text-xl">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">
                      123 Vit Street, Vellore, Tamil Nadu, 632014
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conference Venue Map */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Conference Venue</h2>
              <div className="w-full h-64 rounded-lg shadow-md overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.087061389822!2d79.15081593693145!3d12.969066372117625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1738160801725!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
