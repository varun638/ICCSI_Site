import About from '../About/About';
import Contact from '../Contact/Contact';
import { useEffect, useState } from 'react';
import Hero from '../../shared/components/hero/Hero';
import Speakers from '../../shared/components/speakers/Speakers';
import { useNavigate } from 'react-router';
import Registercard from '../../shared/Register_cta/Registercard';
// import { SEO } from '../../shared/services/SEO';

export default function Home() {
  const [count, setCount] = useState(0);
  const finalCount = 1000; // You can modify this as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {                    
        if (prevCount < finalCount) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return finalCount;
        }
      });
    }, 1);

    return () => clearInterval(interval); 
  }, [finalCount]);

  const navigate = useNavigate();
  
    const handleRegisterClick = () => {
      window.scrollTo(0, 0);
      // Redirect to Submit Paper page
      navigate('/author/new_paper_submission'); // Adjust this path based on your routing
    };

  // const [pageTitle, setPageTitle] = useState('Dynamic SEO Demo');
  // const [description, setDescription] = useState('A React application demonstrating dynamic SEO capabilities');
  // const [ogImage, setOgImage] = useState('https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80');
  // const [author, setAuthor] = useState('Your Name');

  return (
    <div className="flex flex-col">
   {/* <>
      <SEO 
        title={pageTitle}
        description={description}
        ogImage={ogImage}
        author={author}
        keywords="react, seo, dynamic meta tags, social sharing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-800">Dynamic SEO & Social Sharing Demo</h1>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Page Title
                </label>
                <input
                  type="text"
                  value={pageTitle}
                  onChange={(e) => setPageTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter page title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  rows={3}
                  placeholder="Enter meta description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Name
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter author name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Social Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={ogImage}
                    onChange={(e) => setOgImage(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter image URL"
                  />
                  <button
                    onClick={() => window.open(ogImage, '_blank')}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <LinkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Social Media Preview
                </h2>
                <div className="space-y-4">
                  <div className="max-w-lg bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <img 
                      src={ogImage} 
                      alt="Social preview"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-blue-600 text-lg font-medium truncate">{pageTitle}</p>
                      <p className="text-gray-600 text-sm line-clamp-2 mt-1">{description}</p>
                      <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
                        <Globe className="w-4 h-4" /> 
                        {window.location.host}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> */}
     <Hero props={count} handleRegisterClick = {handleRegisterClick}/>
      <About />
      <Speakers />
      <Registercard handleRegisterClick = {handleRegisterClick}/>
      <Contact />
    </div>
  );
}
