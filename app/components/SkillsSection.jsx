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
        type: "core",
    },
    {
        id:2,
        name: ".NET",
        iconComponent: <DotNetIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
    {
        id:3,
        name: "core",
        iconComponent: <AspNetIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
        {
        id:3,
        name: "Entity Framework",
        iconComponent: <AspNetIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
            {
        id:3,
        name: "Web API",
        iconComponent: <AspNetIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
     {
        id:10,
        name: "React",
        iconComponent: <ReactIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
    {
        id:3,
        name: "TypeScript",
        iconComponent: <TypeScriptIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
    {
        id:2,
        name: "JavaScript",
        iconComponent: <JavaScriptIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
    {
        id:13,
        name: "Tailwind",
        iconComponent: <TailwindIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
        {
        id:18,
        name: "SQL server",
        iconComponent: <SqlIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
    {
        id:18,
        name: "PostgreSQL",
        iconComponent: <SqlIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
    {
        id:20,
        name: "MongoDB",
        iconComponent: <MogoDbIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
            {
        id:24,
        name: "xUnit",
        iconComponent: <GitIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
        {
        id:24,
        name: "Git",
        iconComponent: <GitIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
            {
        id:24,
        name: "Azure DevOps",
        iconComponent: <GitIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
        {
        id:25,
        name: "Agile",
        iconComponent: <AgileIcon className ={`${iconStyles}`}/>,
        type: "core",
    },
        {
        id:5,
        name: "Java",
        iconComponent: <JavaIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
        {
        id:5,
        name: "Spring",
        iconComponent: <JavaIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
    {
        id:3,
        name: "PHP",
        iconComponent: <PhpIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
        {
        id:3,
        name: "Laravel",
        iconComponent: <PhpIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
    {
        id:4,
        name: "Python",
        iconComponent: <PythonIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },

    {
        id:6,
        name: "Swift",
        iconComponent: <SwiftIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
    {
        id:7,
        name: "Android",
        iconComponent: <AndroidIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
    
    {
        id:8,
        name: "Golang",
        iconComponent: <GolangIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
        
    {
        id:9,
        name: "NextJS",
        iconComponent: <NextJsIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },

    {
        id:14,
        name: "Bootstrap",
        iconComponent: <BootstrapIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
    {
        id:15,
        name: "SASS",
        iconComponent: <SassIcon className ={`${iconStyles}`}/>,
        type: "others",
    },
    {
        id:16,
        name: "CSS",
        iconComponent: <CssIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
    {
        id:17,
        name: "HTML",
        iconComponent: <HtmlIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
    

    {
        id:19,
        name: "PL/SQL",
        iconComponent: <SqlIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },

    {
        id:21,
        name: "firebase",
        iconComponent: <FirebaseIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
    {
        id:22,
        name: "WordPress",
        iconComponent: <WordpressIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },
    {
        id:23,
        name: "Linux",
        iconComponent: <LinuxIcon className ={`${iconStyles}`}/>,
        type: "secondary",
    },

    


    
    
]

const SkillsSection = () => {
  return (
    <>
        <div className='grid lg:grid-cols-1 gap-10'>
            <div>
                <h6>Core Stack</h6>

                <div className="grid grid-cols-5 lg:grid-cols-8">   
                    {
                    skillsData.map((skill, index) => (
                            skill.type === "core" ? (
                            <SkillIcon 
                                key={index}
                                iconComponent={skill.iconComponent}
                                name={skill.name}
                                baseScale={1}
                            />
                        ) : null
                    ))
                    }
                </div>
            </div>
            </div>
            <div className='grid lg:grid-cols-1 gap-10 my-4'>
            <div>
                <h6>Secondary</h6>
                <div className="grid grid-cols-5 lg:grid-cols-8 mx-8">
                    
                    {
                    skillsData.map((skill, index) => (
                            skill.type === "secondary" ? (
                            <SkillIcon 
                                key={index}
                                iconComponent={skill.iconComponent}
                                name={skill.name}
                                baseScale={0.8}
                            />
                        ) : null
                    ))
                    }
                </div>
            </div>
            {/* <div>
                <h6>Learning / Exploring</h6>
                <div className="grid grid-cols-4">
                    
                    {
                    skillsData.map((skill, index) => (
                            skill.type === "learning" ? (
                            <SkillIcon 
                                key={index}
                                iconComponent={skill.iconComponent}
                                name={skill.name}
                            />
                        ) : null
                    ))
                    }
                </div>                
            </div> */}
            {/* <div>
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
            </div> */}

        </div>
        
        
    </>
    
    
  )
}

export default SkillsSection