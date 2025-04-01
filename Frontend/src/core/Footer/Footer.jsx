import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router';

export default function Footer() {
  const location = useLocation();

  const handleLinkClick = () => {
    // Scroll to top when any link is clicked
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-12 mt-3"> {/* Increased padding here */}
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Increased gap for better spacing */}
          {/* About Section */}
          <div className="space-y-3">
          <Link to="/">
            <img
            src="/assets/images/logo/logo.webp"
            alt="ICOCSA Logo"
            className="h-auto max-h-[10vh] sm:max-h-[14vh] md:max-h-[14vh] lg:max-h-[10vh] xl:max-h-[18vh] w-auto"
          />
          </Link>
          </div>

          {/* Services Section - Plain Text */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <p className="text-gray-400 lg:text-lg md:text-sm">
              <Link to="/scope_conference" className="hover:text-blue-500" onClick={() => handleLinkClick()}>• Scope of Conference</Link> <br />
              <Link to="/conference_tracks" className="hover:text-blue-500" onClick={() => handleLinkClick()}>• Conference Tracks</Link><br />
              <Link to="/author/registration_details" className="hover:text-blue-500" onClick={() => handleLinkClick()}>• Registration Details</Link><br />
              <Link to="/author/new_paper_submission" className="hover:text-blue-500" onClick={() => handleLinkClick()}>• Paper Submission</Link>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 lg:text-lg md:text-sm">
              <li>123 Vit Street Vellore, Tamil Nadu, 632014</li>
              <li>info@incocsa.org</li>
              <li>+91 9876543219</li>
            </ul>
          </div>

         {/* Social Links */}
          <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            {[faFacebookF, faTwitter, faLinkedinIn, faInstagram].map((icon, index) => {
              let shareUrl = "#";

              switch (icon) {
                case faFacebookF:
                  shareUrl = "https://www.facebook.com/sharer/sharer.php?u=https://incocsa.org";
                  break;
                case faTwitter:
                  shareUrl = "https://twitter.com/intent/tweet?url=https://incocsa.org";
                  break;
                case faLinkedinIn:
                  shareUrl = "https://www.linkedin.com/sharing/share-offsite/?url=https://incocsa.org";
                  break;
                case faInstagram:
                  // Instagram doesn't support direct sharing URL, so we'll leave it like this.
                  // You can omit Instagram or redirect to its homepage.
                  shareUrl = "https://www.instagram.com/";
                  break;
                default:
                  break;
              }

              return (
                <a
                  key={index}
                  href={shareUrl}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={icon} className="w-6 h-8" />
                </a>
              );
            })}
          </div>
        </div>
        </div>
        </div>


      {/* Copyright Section */}
      <div className="pt-4 pb-4 border-t border-gray-800"> {/* Increased padding here */}
        <div className="text-center text-gray-400 lg:text-lg md:text-sm">
          <p>&copy; {new Date().getFullYear()} <a href="https://incosa.org">INCOCSA</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
