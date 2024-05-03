import React from 'react'
import { motion } from 'framer-motion';

import CsharpIcon from './skillsSvgs/CsharpIcon';
import JavaScriptIcon from './skillsSvgs/JavaScriptIcon';
import PhpIcon from './skillsSvgs/PhpIcon';
import PythonIcon from './skillsSvgs/PythonIcon';
import JavaIcon from './skillsSvgs/JavaIcon';
import SwiftIcon from './skillsSvgs/SwiftIcon';
import AndroidIcon from './skillsSvgs/AndroidIcon';
import GolangIcon from './skillsSvgs/GolangIcon';
import TypeScriptIcon from './skillsSvgs/TypeScriptIcon';
import NextJsIcon from './skillsSvgs/NextJsIcon';
import ReactIcon from './skillsSvgs/ReactIcon';
import DotNetIcon from './skillsSvgs/DotNetIcon';
import AspNetIcon from './skillsSvgs/AspNetIcon';
import TailwindIcon from './skillsSvgs/TailwindIcon';
import BootstrapIcon from './skillsSvgs/BootstrapIcon';
import SassIcon from './skillsSvgs/SassIcon';
import CssIcon from './skillsSvgs/CssIcon';
import HtmlIcon from './skillsSvgs/HtmlIcon';
import SqlIcon from './skillsSvgs/SqlIcon';
import MogoDbIcon from './skillsSvgs/MogoDbIcon';
import FirebaseIcon from './skillsSvgs/FirebaseIcon';
import WordpressIcon from './skillsSvgs/WordpressIcon';
import LinuxIcon from './skillsSvgs/LinuxIcon';
import GitIcon from './skillsSvgs/GitIcon';
import AgileIcon from './skillsSvgs/AgileIcon';





import SkillIcon from './SkillIcon';

const iconStyles = "w-5 lg:w-7 text-white m-auto hover:text-secondary-500";
const skillsData = [
    
    {
        id:1,
        name: "C#",
        iconComponent: <CsharpIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    {
        id:2,
        name: "JavaScript",
        iconComponent: <JavaScriptIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    
    {
        id:3,
        name: "PHP",
        iconComponent: <PhpIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    {
        id:4,
        name: "Python",
        iconComponent: <PythonIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    {
        id:5,
        name: "Java",
        iconComponent: <JavaIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    {
        id:6,
        name: "Swift",
        iconComponent: <SwiftIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    {
        id:7,
        name: "Android",
        iconComponent: <AndroidIcon className ={`${iconStyles}`}/>,
        type: "others",
    },
    
    {
        id:8,
        name: "Golang",
        iconComponent: <GolangIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    {
        id:3,
        name: "TypeScript",
        iconComponent: <TypeScriptIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    
    {
        id:9,
        name: "NextJS",
        iconComponent: <NextJsIcon className ={`${iconStyles}`}/>,
        type: "Framework-Library",
    },
    {
        id:10,
        name: "React",
        iconComponent: <ReactIcon className ={`${iconStyles}`}/>,
        type: "Framework-Library",
    },
    {
        id:12,
        name: ".NET",
        iconComponent: <DotNetIcon className ={`${iconStyles}`}/>,
        type: "Framework-Library",
    },
    {
        id:12,
        name: "core",
        iconComponent: <AspNetIcon className ={`${iconStyles}`}/>,
        type: "Framework-Library",
    },
    
    {
        id:13,
        name: "Tailwind",
        iconComponent: <TailwindIcon className ={`${iconStyles}`}/>,
        type: "Framework-Library",
    },
    {
        id:14,
        name: "Bootstrap",
        iconComponent: <BootstrapIcon className ={`${iconStyles}`}/>,
        type: "Framework-Library",
    },
    {
        id:15,
        name: "SASS",
        iconComponent: <SassIcon className ={`${iconStyles}`}/>,
        type: "Framework-Library",
    },
    {
        id:16,
        name: "CSS",
        iconComponent: <CssIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    {
        id:17,
        name: "HTML",
        iconComponent: <HtmlIcon className ={`${iconStyles}`}/>,
        type: "language",
    },
    
    {
        id:18,
        name: "SQL",
        iconComponent: <SqlIcon className ={`${iconStyles}`}/>,
        type: "databases",
    },
    {
        id:19,
        name: "PL/SQL",
        iconComponent: <SqlIcon className ={`${iconStyles}`}/>,
        type: "databases",
    },
    {
        id:20,
        name: "MongoDB",
        iconComponent: <MogoDbIcon className ={`${iconStyles}`}/>,
        type: "databases",
    },
    {
        id:21,
        name: "firebase",
        iconComponent: <FirebaseIcon className ={`${iconStyles}`}/>,
        type: "databases",
    },
    {
        id:22,
        name: "WordPress",
        iconComponent: <WordpressIcon className ={`${iconStyles}`}/>,
        type: "others",
    },
    {
        id:23,
        name: "Linux",
        iconComponent: <LinuxIcon className ={`${iconStyles}`}/>,
        type: "others",
    },
    
    {
        id:24,
        name: "Git",
        iconComponent: <GitIcon className ={`${iconStyles}`}/>,
        type: "others",
    },
    {
        id:25,
        name: "Agile",
        iconComponent: <AgileIcon className ={`${iconStyles}`}/>,
        type: "others",
    },
    
    
]

const SkillsSection = () => {
  return (
    <>
        <div className='grid lg:grid-cols-2 gap-10'>
            <div>
                <h6>Languages</h6>
                {/* <div className="grid grid-cols-4 lg:grid-cols-8 "> */}
                <div className="grid grid-cols-4">   
                    {
                    skillsData.map((skill, index) => (
                            skill.type === "language" ? (
                            <SkillIcon 
                                key={index}
                                iconComponent={skill.iconComponent}
                                name={skill.name}
                            />
                        ) : null
                    ))
                    }
                </div>
            </div>
            <div>
                <h6>Frameworks/Libraries</h6>
                <div className="grid grid-cols-4 ">
                    
                    {
                    skillsData.map((skill, index) => (
                            skill.type === "Framework-Library" ? (
                            <SkillIcon 
                                key={index}
                                iconComponent={skill.iconComponent}
                                name={skill.name}
                            />
                        ) : null
                    ))
                    }
                </div>
            </div>
            <div>
                <h6>Databases</h6>
                <div className="grid grid-cols-4">
                    
                    {
                    skillsData.map((skill, index) => (
                            skill.type === "databases" ? (
                            <SkillIcon 
                                key={index}
                                iconComponent={skill.iconComponent}
                                name={skill.name}
                            />
                        ) : null
                    ))
                    }
                </div>                
            </div>
            <div>
                <h6>Others</h6>
                <div className="grid grid-cols-4    ">
                    
                    {
                    skillsData.map((skill, index) => (
                            skill.type === "others" ? (
                            <SkillIcon 
                                key={index}
                                iconComponent={skill.iconComponent}
                                name={skill.name}
                            />
                        ) : null
                    ))
                    }
                </div>
            </div>

        </div>
        
        
    </>
    
    
  )
}

export default SkillsSection