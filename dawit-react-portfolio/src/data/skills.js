import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaNetworkWired, FaTools 
} from 'react-icons/fa';

import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiNestjs, SiMysql,
   SiElectron, SiDotnet, SiGitlab, SiGooglechrome, SiXml
} from 'react-icons/si';

import { FaCode } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa'; 
import { FaCoffee } from 'react-icons/fa';



export const skills = {
  frontEnd: [
    { name: 'React', icon: FaReact, level: 90, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: 'text-cyan-400' },
    { name: 'JavaScript', icon: FaJs, level: 90, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, level: 80, color: 'text-blue-600' },
    { name: 'HTML5', icon: FaHtml5, level: 95, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'text-blue-400' },
    { name: 'Bootstrap', icon: SiBootstrap, level: 80, color: 'text-purple-500' },
    { name: 'Chrome DevTools', icon: SiGooglechrome, level: 85, color: 'text-yellow-400' },
  ],

  backEnd: [
    
    { name: 'Node.js', icon: FaNodeJs, level: 80, color: 'text-green-500' },
    { name: 'NestJS', icon: SiNestjs, level: 80, color: 'text-red-500' },
    { name: 'ASP.NET', icon: SiDotnet, level: 80, color: 'text-blue-800' },
    { name: 'C#', icon: FaCode, level: 80, color: 'text-purple-700' },
    { name: 'MySQL', icon: SiMysql, level: 80, color: 'text-blue-700' },
    { name: 'SQLite', icon: FaDatabase, level: 70, color: 'text-gray-700' },
  ],

  other: [
    { name: 'Java', icon: FaCoffee, level: 75, color: 'text-red-600' },
    { name: 'JavaFX', icon: FaDesktop, level: 70, color: 'text-indigo-600' }, 
    { name: 'Electron', icon: SiElectron, level: 80, color: 'text-gray-500' },
    { name: 'Git', icon: FaGitAlt, level: 85, color: 'text-orange-600' },
    { name: 'GitLab', icon: SiGitlab, level: 80, color: 'text-orange-500' },
    { name: 'XML', icon: SiXml, level: 80, color: 'text-gray-600' },
  ],
}


