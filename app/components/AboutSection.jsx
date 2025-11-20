"use client"
import React, {useState, useTransition} from "react"
import Image from "next/image";
import TabButton from "./TabButton";
import SkillsSection from "./SkillsSection";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
        <SkillsSection/>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>AEC in Information Technology Programmer- Analyst</li>
        <li>MBA with emphasis in Project Managment</li>
        <li>Bachelor Degree - Control Engineer</li>
        <li>Diploma - Electronics Technologist</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id:"certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Responsive Web Design</li>
        <li>English Proficiency Certificate</li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(()=>{
      setTab(id);
    })
  }

  return (
    <section id="about" className="text-white container mb-1">
      <div className="gap-8 px-4 xl:gap-16 xl:px-16">
        <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
        <p className="text-base text-start lg:text-lg mb-4">
          I am a <b>Full-Stack .NET & React </b>Developer with a background in control engineering and over 1 year of experience in <b>C# and .NET</b>
        </p>
        <p className="text-base text-start lg:text-lg mb-4">
          In my current role, I develop and maintain <b>Windows services</b> that automate and manage file processing between servers, applying <b>SOLID principles</b>, clean code practices, and structured debugging to ensure reliability and stability.
        </p>
        <p className="text-base text-start lg:text-lg mb-4">
          Outside of work, I actively deepen my full-stack skills through personal projects and technical challenges, including building <b>.NET applications with unit tests</b>, applying <b>SOLID</b>, and developing front-end interfaces with <b>Vue, React and TypeScript</b>.
        </p>
        <p className="text-base text-start lg:text-lg mb-4">
          I enjoy working in <b>Agile environments</b>, collaborating through <b>Git, Gitlab, Azure DevOps</b>, and contributing to the improvement of existing systems.
        </p>
        <p className="text-base text-start lg:text-lg mb-4">
          Based in Québec, I&apos;m comfortable working in <b>English and French</b>, and open to hybrid or remote roles across Québec and Canada.
        </p>
      </div>
        <div className="md:grid md:grid-cols-5 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="md:col-span-2">
              <Image
                src="/images/about-image.png"
                width={500}
                height={500}
              />

            </div>
            
            <div className="md:col-span-3 mt-4 md:mt-0 text-left flex flex-col h-full">
                
                <div className="flex flex-row justify-start mt-8">
                  <TabButton selectTab={()=>handleTabChange("skills")} active={tab ==="skills"}>{" "}Skills{" "}</TabButton>
                  <TabButton selectTab={()=>handleTabChange("education")} active={tab ==="education"}>{" "}Education{" "}</TabButton>
                  <TabButton selectTab={()=>handleTabChange("certifications")} active={tab ==="certifications"}>{" "}Certifications{" "}</TabButton>
                </div>
                <div className="mt-8">
                  {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;