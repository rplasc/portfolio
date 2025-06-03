import { ReactNode } from 'react';
import { FaCode, FaCloud, FaUniversity } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';

export interface TimelineEntry {
  title: string;
  date: string;
  description: string;
  icon: ReactNode;
}

const timeline: TimelineEntry[] = [
  {
    title: 'Capstone Project — Technical Lead',
    date: '2025',
    description: 'Collaborated in a team that built a cross-platform file sync app using React Native, Flask, and Rclone.',
    icon: <FaCode className="text-blue-400 text-xl" />,
  },
  {
    title: 'Intern — Cloud Integration',
    date: '2025',
    description: 'Was responsible for designing the API and optimizing the Android version of a mobile app for a startup.',
    icon: <FaCloud className="text-blue-400 text-xl" />,
  },
  {
    title: 'Transferred to UC Merced',
    date: '2023',
    description: 'Began journey into full-stack development, algorithms, and system design.',
    icon: <FaUniversity className="text-blue-400 text-xl" />,
  },
  {
    title: 'Enrolled at Allan Hancock College',
    date: '2020',
    description: 'Took first CS class (Intro to HTML) at Allan Hancock College the summer after high school graduation.',
    icon: <FaComputer className="text-blue-400 text-xl" />,
  },
];

export default timeline;
