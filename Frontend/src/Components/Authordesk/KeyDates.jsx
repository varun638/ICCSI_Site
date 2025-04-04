import React from 'react';
import Keydate from '../../shared/components/Authors/Keydate';

export default function KeyDates() {
  const dates = [
    {
      date: "April 5, 2025",
      event: "Paper Submission Deadline",
      description: "Last date to submit your research papers"
    },
    {
      date: "April 20, 2025",
      event: "Review Notification",
      description: "Authors will be notified of paper acceptance"
    },
    {
      date: "April 31, 2025",
      event: "Camera-ready Submission",
      description: "Final version of accepted papers due"
    },
    {
      date: "May 5, 2025",
      event: "Early Bird Registration",
      description: "Last date for early bird registration discount"
    },
    {
      date: "May 15, 2025",
      event: "Conference Begins",
      description: "Opening ceremony and keynote speeches"
    }
  ];

  return (
    <div>
        <Keydate dates = {dates}/>
    </div>
  );
}