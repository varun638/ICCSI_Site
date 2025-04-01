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
          image: "assets/images/About/m1.webp"
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
          image: "assets/images/About/m2.webp"
        },
        {
          name: "Dr. Emily Williams",
          title: "Research Director",
          institution: "Google Research",
          image: "assets/images/About/m3.webp"
        },
        {
          name: "Dr. Marco James",
          title: "Research Scientist",
          institution: "microsoft ",
          image: "assets/images/About/m4.webp"
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