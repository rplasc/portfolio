import { ReactNode } from 'react';
import { FaRobot, FaCloud, FaUniversity, FaCode } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';

export interface TimelineEntry {
  title: string;
  company: string;
  date: string;
  description: string;
  icon: ReactNode;
}

const timeline: TimelineEntry[] = [
    {
    title: 'Software Development Engineer',
    company: 'Gaine Technology',
    date: 'Feb 2026 - Present',
    description: 'Built end-to-end features, from UI components in Angular to the supporting logic in our C# .NET services.',
    icon: <FaCode className='text-amber-300 text-xl' />,
  },
  {
    title: 'AI Trainer - Multimodal Vision',
    company: 'Handshake AI Fellowship',
    date: 'Dec 2025 - Feb 2026',
    description: 'Evaluated multimodal model outputs (text, visual, and audio) to improve LLM accuracy and reliability.',
    icon: <FaRobot className='text-emerald-300 text-xl' />,
  },
  {
    title: 'Graduated from UC Merced',
    company: 'University of California, Merced',
    date: 'Aug 2025',
    description: 'Graduated with a B.S. in Computer Science & Engineering',
    icon: <FaUniversity className="text-rose-300 text-xl" />,
  },
  {
    title: 'Software Engineer Intern (Technical Lead)',
    company: 'Sweep',
    date: 'Jan 2025 - May 2025',
    description: 'Led a team of 4 to build a cross-platform file syncing app.',
    icon: <FaCloud className="text-emerald-300 text-xl" />,
  },
  {
    title: 'Transferred to UC Merced',
    company: 'University of California, Merced',
    date: 'Aug 2023',
    description: 'Majoring in Computer Science & Engineering.',
    icon: <FaUniversity className="text-rose-300 text-xl" />,
  },
  {
    title: 'Enrolled at Allan Hancock College',
    company: 'Allan Hancock College',
    date: 'June 2020 - May 2023',
    description: 'Took first CS class (Intro to HTML) at Allan Hancock College the summer after high school graduation.',
    icon: <FaComputer className="text-amber-300 text-xl" />,
  },
];

export default timeline;
