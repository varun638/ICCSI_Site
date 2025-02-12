import React from 'react';
import Registration from '../../shared/components/Authors/Registration';
import { Building2, Globe, GraduationCap, Users } from 'lucide-react';

export default function RegistrationDetails() {
  const registrationTypes = [
    {
      type: "Academicians",
      regular: "INR",
      amount: "750",
      button: "Register Now",
      icon: <GraduationCap className="w-12 h-12 mb-4" />,
      features: ["Full Conference Access", "Conference Kit", "Lunch & Refreshments", "Certificate"]
    },
    {
      type: "Students & Scholars",
      regular: "INR",
      amount: "750",
      button: "Register Now",
      icon: <Users className="w-12 h-12 mb-4" />,
      features: ["Full Conference Access", "Digital Materials", "Lunch & Refreshments", "Certificate"]
    },
    {
      type: "Industry Delegates",
      regular: "INR",
      amount: "1500",
      button: "Register Now",
      icon: <Building2 className="w-12 h-12 mb-4" />,
      features: ["Priority Seating", "Networking Events", "Full Conference Kit", "Certificate"]
    },
    {
      type: "Overseas Delegates",
      regular: "INR",
      amount: "2500",
      button: "Register Now",
      icon: <Globe className="w-12 h-12 mb-4" />,
      features: ["VIP Access", "Exclusive Networking", "Complete Conference Kit", "Certificate"]
    }
  ];


  return (
   <div>
     <Registration registrationTypes={registrationTypes} />
   </div>
  );
}