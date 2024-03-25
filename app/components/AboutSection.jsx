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
        <p className="text-base text-start lg:text-lg">
          I am a Fullstack Developer with a solid foundation in electronic engineering and passion for coding. With hands-on experience in WordPress and automation, my expertise extends to problem-solving, attention to detail, creativity, and a diverse range of technological competencies.
        </p>
        <p className="text-base text-start lg:text-lg">
          As a continuous learner, I am constantly seeking opportunities to broaden my knowledge and refine my skill set. I thrive in collaborative environments and am enthusiastic about working alongside others to bring innovative ideas to life. Let&apos;s collaborate and create something truly extraordinary together.
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