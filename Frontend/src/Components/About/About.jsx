import React from "react";
import { GraduationCap, Users, Globe2, Sparkles } from "lucide-react";
import Abouts from "../../shared/components/about/Abouts";
import Features from "../../shared/components/about/Features";
import Ourmission from "../../shared/components/about/Ourmission";

const About = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Academic Excellence",
      description: "Showcasing groundbreaking research and academic achievements in computer science."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Global Network",
      description: "Connect with leading experts and professionals from around the world."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-600" />,
      title: "International Platform",
      description: "A diverse platform representing perspectives from across the globe."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Innovation Focus",
      description: "Exploring cutting-edge technologies and revolutionary ideas."
    }
  ];

    // Condition to apply padding only on the "About" page
    const shouldAddPadding = location.pathname === '/about';

  return (
    <div>
        <Abouts props = {shouldAddPadding}/>
        <Features features = {features} />
        <Ourmission />
    </div>
  );
};

export default About;
