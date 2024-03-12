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
        <li>Bachelor Degree - Control Engineer</li>
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
    <section id="about" className="text-white container mt-9">
      <div className="gap-8 px-4 xl:gap-16 xl:px-16">
        <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
        <p className="text-base lg:text-lg">Fullstack developer with a background in electronic engineering and passion for coding. Experiece in Wordpress and automation,
              alongside a skill set like solving problems, oriented detail, creativity,  and a diverse array of technological competencies.
             I"m a quick learner and always looking to expand my knowledge and skill set. I"m a team player and exited to work with others to create amazing things.
        </p>
      </div>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image
                src="/images/about-image.png"
                width={500}
                height={500}
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                
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