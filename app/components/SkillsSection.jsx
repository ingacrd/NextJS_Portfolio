import React from "react";

import CsharpIcon from "./skillsSvgs/CsharpIcon";
import EntityFrameworkIcon from "./skillsSvgs/EntityFrameworkIcon";
import WebAPIIcon from "./skillsSvgs/WebAPIIcon";
import JavaScriptIcon from "./skillsSvgs/JavaScriptIcon";
import PhpIcon from "./skillsSvgs/PhpIcon";
import PythonIcon from "./skillsSvgs/PythonIcon";
import JavaIcon from "./skillsSvgs/JavaIcon";
import SwiftIcon from "./skillsSvgs/SwiftIcon";
import AndroidIcon from "./skillsSvgs/AndroidIcon";
import GolangIcon from "./skillsSvgs/GolangIcon";
import TypeScriptIcon from "./skillsSvgs/TypeScriptIcon";
import NextJsIcon from "./skillsSvgs/NextJsIcon";
import ReactIcon from "./skillsSvgs/ReactIcon";
import DotNetIcon from "./skillsSvgs/DotNetIcon";
import AspNetIcon from "./skillsSvgs/AspNetIcon";
import TailwindIcon from "./skillsSvgs/TailwindIcon";
import BootstrapIcon from "./skillsSvgs/BootstrapIcon";
import SassIcon from "./skillsSvgs/SassIcon";
import CssIcon from "./skillsSvgs/CssIcon";
import HtmlIcon from "./skillsSvgs/HtmlIcon";
import SqlIcon from "./skillsSvgs/SqlIcon";
import PostgresSqlIcon from "./skillsSvgs/PostgresSqlIcon";
import MogoDbIcon from "./skillsSvgs/MogoDbIcon";
import FirebaseIcon from "./skillsSvgs/FirebaseIcon";
import WordpressIcon from "./skillsSvgs/WordpressIcon";
import LinuxIcon from "./skillsSvgs/LinuxIcon";
import GitIcon from "./skillsSvgs/GitIcon";
import AgileIcon from "./skillsSvgs/AgileIcon";
import XunitIcon from "./skillsSvgs/XunitIcon";
import AzureDevOpsIcon from "./skillsSvgs/AzureDevOpsIcon";
import SpringIcon from "./skillsSvgs/SpringIcon";
import LaravelIcon from "./skillsSvgs/LaravelIcon";

import SkillIcon from "./SkillIcon";

const coreIconStyles = "w-6 lg:w-8 text-white m-auto";
const secondaryIconStyles = "w-5 lg:w-6 text-white/80 m-auto";

const skillsData = [
  // --- CORE: Microsoft + React FIRST ROW ---
  {
    id: 1,
    name: "C#",
    iconComponent: <CsharpIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 2,
    name: ".NET",
    iconComponent: <DotNetIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 3,
    name: "ASP.NET Core",
    iconComponent: <AspNetIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 4,
    name: "Web API",
    iconComponent: <WebAPIIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 5,
    name: "Entity Framework",
    iconComponent: <EntityFrameworkIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 6,
    name: "React",
    iconComponent: <ReactIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 7,
    name: "TypeScript",
    iconComponent: <TypeScriptIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 8,
    name: "JavaScript",
    iconComponent: <JavaScriptIcon className={coreIconStyles} />,
    type: "core",
  },

  // --- CORE: UI + Data + Delivery ---
  {
    id: 9,
    name: "Tailwind",
    iconComponent: <TailwindIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 10,
    name: "SQL Server",
    iconComponent: <SqlIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 11,
    name: "PostgreSQL",
    iconComponent: <PostgresSqlIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 12,
    name: "MongoDB",
    iconComponent: <MogoDbIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 13,
    name: "xUnit",
    iconComponent: <XunitIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 14,
    name: "Git",
    iconComponent: <GitIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 15,
    name: "Azure DevOps",
    iconComponent: <AzureDevOpsIcon className={coreIconStyles} />,
    type: "core",
  },
  {
    id: 16,
    name: "Agile",
    iconComponent: <AgileIcon className={coreIconStyles} />,
    type: "core",
  },

  // --- SECONDARY / NICE-TO-HAVE ---
  {
    id: 20,
    name: "Java",
    iconComponent: <JavaIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 21,
    name: "Spring",
    iconComponent: <SpringIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 22,
    name: "PHP",
    iconComponent: <PhpIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 23,
    name: "Laravel",
    iconComponent: <LaravelIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 24,
    name: "Python",
    iconComponent: <PythonIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 25,
    name: "Swift",
    iconComponent: <SwiftIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 26,
    name: "Android",
    iconComponent: <AndroidIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 27,
    name: "Golang",
    iconComponent: <GolangIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 28,
    name: "Next.js",
    iconComponent: <NextJsIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 29,
    name: "Bootstrap",
    iconComponent: <BootstrapIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 30,
    name: "SASS",
    iconComponent: <SassIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 31,
    name: "CSS",
    iconComponent: <CssIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 32,
    name: "HTML",
    iconComponent: <HtmlIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 33,
    name: "Firebase",
    iconComponent: <FirebaseIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 34,
    name: "WordPress",
    iconComponent: <WordpressIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
  {
    id: 35,
    name: "Linux",
    iconComponent: <LinuxIcon className={secondaryIconStyles} />,
    type: "secondary",
  },
];

const SkillsSection = () => {
  return (
    <section className="space-y-8">
      {/* CORE STACK */}
      <div>
        <h6 className="text-xs uppercase tracking-[0.25em] text-secondary-400 mb-2">
          Core .NET + React stack
        </h6>
        {/* <p className="text-[0.75rem] text-gray-400 mb-4 max-w-xl">
          Day-to-day stack for building full-stack applications: C#, .NET / ASP.NET Core,
          Web API, Entity Framework, React, TypeScript, SQL Server, xUnit, Azure DevOps,
          Git and Agile delivery.
        </p> */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 px-1 sm:px-2">
          {skillsData
            .filter((skill) => skill.type === "core")
            .map((skill) => (
              <SkillIcon
                key={skill.id}
                iconComponent={skill.iconComponent}
                name={skill.name}
                baseScale={1}
                variant="core"
              />
            ))}
        </div>
      </div>

      {/* SECONDARY */}
      <div className="pt-4 border-t border-white/5">
        <h6 className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-500 mb-1">
          Secondary skills
        </h6>
        <p className="text-[0.7rem] text-gray-500 mb-3 max-w-xl">
          Technologies I’ve used and can ramp up on quickly when needed, but not the
          primary focus of my next role.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-3 gap-y-5 px-1 sm:px-2">
          {skillsData
            .filter((skill) => skill.type === "secondary")
            .map((skill) => (
              <SkillIcon
                key={skill.id}
                iconComponent={skill.iconComponent}
                name={skill.name}
                baseScale={0.9}
                variant="secondary"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
