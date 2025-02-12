import React, { useState } from 'react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import axiosinstance from '../../services/axios';

export default function SubmitPaper() {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    phnumber: '',
    email: '',
    abstract: '',
    track: 'Software Engineering', // Set default value
    Institution: '',
    category: 'Academicians',
    paperFile: null,
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    name: '',
    phnumber: '',
    email: '',
    abstract: '',
    paperFile: '',
    Institution: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const validateForm = () => {
    let isValid = true;
    const errors = {}; // Store errors temporarily

    // Validate title
    if (!formData.title || formData.title.length > 100) {
      errors.title = 'Title should not exceed 100 characters';
      isValid = false;
    }

    if (!formData.name || formData.name.length > 60) {
      errors.name = 'name should not exceed 60 characters';
      isValid = false;
    }

    if (!formData.Institution || formData.Institution.length > 40) {
      errors.Institution = 'name should not exceed 40 characters';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate abstract
    if (!formData.abstract) {
      errors.abstract = 'Please enter the paper abstract';
      isValid = false;
    }
    if (formData.abstract.length > 250) {
      errors.abstract = 'Abstract must be less than or equal to 250 words';
      isValid = false;
    }

    // Validate paper file
    if (!formData.paperFile) {
      errors.paperFile = 'Please select a paper file to upload';
      isValid = false;
    } else {
      const fileExtension = formData.paperFile.name.split('.').pop().toLowerCase();
      if (fileExtension !== 'pdf') {
        errors.paperFile = 'Only PDF files are allowed';
        isValid = false;
      }
      const maxFileSize = 10 * 1024 * 1024; // 10MB
      if (formData.paperFile.size > maxFileSize) {
        errors.paperFile = 'File size must be less than 10MB';
        isValid = false;
      }
    }

    // Validate phone number
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!formData.phnumber || !phoneNumberRegex.test(formData.phnumber)) {
      errors.phnumber = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    // Validate institution
    if (!formData.Institution) {
      errors.Institution = 'Please enter the institution name';
      isValid = false;
    }

    setFormErrors(errors); // Update the errors state
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true); // Start loading state

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phnumber', formData.phnumber);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('abstract', formData.abstract);
    formDataToSend.append('track', formData.track);
    formDataToSend.append('Institution', formData.Institution);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('paperFile', formData.paperFile);

    try {
      await axiosinstance.post('/api/submit-paper', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      setSuccessMessage('Paper submitted successfully!');
      setFormData({
        title: '',
        name: '',
        phnumber: '',
        email: '',
        abstract: '',
        track: 'Software Engineering',
        Institution: '',
        category: 'Academicians',
        paperFile: null,
      });
      // Reset the file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
    } catch (error) {
      setErrorMessage('Failed to submit paper. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,  // If it's a file, update formData with the file
    });
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] flex items-center justify-center bg-gradient-to-b from-gray-300 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-800 leading-tight mb-4 mt-25">Submit Your Paper</h1>
          <p className="text-xl text-gray-600">Follow these guidelines to submit your research paper</p>
        </div >

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>
            <ul className="space-y-4">
              {[
                "Papers must be written in English",
                "Maximum length: 8 pages including figures and references",
                "Use the IEEE conference format",
                "Submit in PDF format",
                "Include abstract (max 250 words)",
                "Blind all author information for review"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h2>
            <ul className="space-y-4">
              {[
                "All papers undergo a double-blind peer review process",
                "At least one author must register for the conference",
                "Plagiarism checks will be performed",
                "Multiple submissions are not allowed",
                "Authors must present accepted papers at the conference",
                "Papers will be published in the conference proceedings"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Paper</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Paper Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter paper title"
              />
              {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter Author Name"
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Mobile Number *</label>
              <input
                type="text"
                name="phnumber"
                value={formData.phnumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter Author Phone Number"
              />
              {formErrors.phnumber && <p className="text-red-500 text-sm">{formErrors.phnumber}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Track</label>
              <select
                name="track"
                value={formData.track}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="Software Engineering">Software Engineering</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Big Data">Big Data</option>
                <option value="Robotics & IoT">Robotics & IoT</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Institution *</label>
              <input
                type="text"
                name="Institution"
                value={formData.Institution}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter Institution name"
              />
              {formErrors.Institution && <p className="text-red-500 text-sm">{formErrors.Institution}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Abstract *</label>
              <textarea
                name="abstract"
                value={formData.abstract}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                rows={4}
                placeholder="Enter paper abstract"
              ></textarea>
              {formErrors.abstract && <p className="text-red-500 text-sm">{formErrors.abstract}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="Software Engineering">Academicians</option>
                <option value="Artificial Intelligence">Students & PG/Ph.D Scholar</option>
                <option value="Cybersecurity">Industry Delegates</option>
                <option value="Cloud Computing">Overseas Delegates</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Upload Paper (PDF) *
                </div>
              </label>
              <input
                type="file"
                accept=".pdf"
                name="paperFile"
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              {formErrors.paperFile && <p className="text-red-500 text-sm">{formErrors.paperFile}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg md:text-xl hover:cursor-pointer"
                disabled={loading} // Disable the button while loading
              >
                {loading ? 'Sending...' : 'Submit Paper'} {/* Show "Sending..." when loading */}
              </button>
            </div>
            {successMessage && (
              <div className="text-green-600 text-center mb-4">{successMessage}</div> // Display success message
            )}
            {errorMessage && (
              <div className="text-red-600 text-center mb-4">{errorMessage}</div> // Display success message
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
