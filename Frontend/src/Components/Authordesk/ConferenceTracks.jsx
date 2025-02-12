import React from 'react';
import { Code, Brain, Shield, Cloud, Database, Notebook as Robot } from 'lucide-react';
import Conferencetrack from '../../shared/components/Authors/conferencetrack';

export default function ConferenceTracks() {
  const tracks = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Engineering",
      topics: ["Software Architecture", "Agile Methodologies", "DevOps", "Software Testing"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      topics: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      topics: ["Network Security", "Cryptography", "Security Protocols", "Ethical Hacking"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing",
      topics: ["Cloud Architecture", "Serverless Computing", "Edge Computing", "Cloud Security"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Big Data",
      topics: ["Data Analytics", "Data Mining", "Data Visualization", "Big Data Architecture"]
    },
    {
      icon: <Robot className="w-8 h-8" />,
      title: "Robotics & IoT",
      topics: ["Autonomous Systems", "Sensor Networks", "Industrial IoT", "Smart Systems"]
    }
  ];

  return (
    <div>
        <Conferencetrack tracks = {tracks} />
    </div>
  );
}