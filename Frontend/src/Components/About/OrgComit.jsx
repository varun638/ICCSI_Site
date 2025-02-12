import React from 'react'
import Orgzcomit from '../../shared/components/about/Orgzcomit';

const committeeMembers = [
    {
      role: "Conference Chair",
      members: [
        {
          name: "Dr. David Johnson",
          title: "Professor of Computer Science",
          institution: "Stanford University",
          image: "public/assets/images/About/m1.jpg"
        }
      ]
    },
    {
      role: "Technical Program Chairs",
      members: [
        {
          name: "Dr. Michael Chen",
          title: "Associate Professor",
          institution: "MIT",
          image: "public/assets/images/About/m2.jpg"
        },
        {
          name: "Dr. Emily Williams",
          title: "Research Director",
          institution: "Google Research",
          image: "public/assets/images/About/m3.jpg"
        },
        {
          name: "Dr. Marco James",
          title: "Research Scientist",
          institution: "microsoft ",
          image: "public/assets/images/About/m4.jpg"
        }
      ]
    }
  ];

function OrgComit() {
  return (
    <Orgzcomit committeeMembers = {committeeMembers} />
  )
}

export default OrgComit