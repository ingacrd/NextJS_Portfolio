"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillsSection from "./SkillsSection";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsSection />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>AEC in Information Technology Programmer - Analyst</li>
        <li>MBA with emphasis in Project Management</li>
        <li>Bachelor Degree - Control Engineer</li>
        <li>Diploma - Electronics Technologist</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Responsive Web Design</li>
        <li>English Proficiency Certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTabContent = TAB_DATA.find((t) => t.id === tab)?.content;

  return (
    <section id="about" className="text-white mb-16">
      {/* wrapper centré + largeur max */}
      <div className="max-w-6xl mx-auto py-8 px-4 xl:px-0">
        <div className="md:grid md:grid-cols-5 gap-10 items-start">
          {/* TEXT + TABS COLUMN */}
          <div className="md:col-span-3 order-1 md:order-2 flex flex-col h-full text-left">
            {/* Title + subtitle */}
            <h2 className="text-4xl font-bold text-white mb-2">About me</h2>
            <p className="text-primary-300 text-lg mb-4">
              Full-Stack .NET &amp; React Developer · 1+ year of experience · Québec
            </p>

            {/* Bio */}
            <div className="space-y-4 text-base lg:text-lg text-gray-200">
              <p>
                I am a <b>Full-Stack .NET &amp; React</b> developer with a background in
                control engineering and over 1 year of experience in <b>C# and .NET</b>.
              </p>
              <p>
                In my current role, I develop and maintain <b>Windows services</b> that
                automate and manage file processing between servers, applying{" "}
                <b>SOLID principles</b>, clean code practices, and structured debugging to
                ensure reliability and stability.
              </p>
              <p>
                Outside of work, I actively deepen my full-stack skills through personal
                projects and technical challenges, including building{" "}
                <b>.NET applications with unit tests</b>, applying <b>SOLID</b>, and
                developing front-end interfaces with <b>Vue, React and TypeScript</b>.
              </p>
              <p>
                I enjoy working in <b>Agile environments</b>, collaborating through{" "}
                <b>Git, GitLab, Azure DevOps</b>, and contributing to the improvement of
                existing systems.
              </p>
              <p>
                Based in Québec, I&apos;m comfortable working in <b>English and French</b>,
                and open to hybrid or remote roles across Québec and Canada.
              </p>
            </div>

            {/* Tabs + content attachés à la colonne texte */}
            <div className="mt-8">
              {/* group de tabs centré sur mobile, à gauche sur desktop */}
              <div className="flex justify-center md:justify-start">
                <div className="inline-flex w-full max-w-xs items-center gap-2 rounded-full bg-white/5 p-1">
                  <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}
                  >
                    Skills
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}
                  >
                    Education
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("certifications")}
                    active={tab === "certifications"}
                  >
                    Certifications
                  </TabButton>
                </div>
              </div>

              {/* Tab content */}
              <div className="mt-6 bg-white/5 rounded-2xl p-6 border border-white/10 min-h-[220px]">
                {currentTabContent}
              </div>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="md:col-span-2 order-2 md:order-1 mt-8 md:mt-0">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-primary/20">
              <Image
                src="/images/about-image.png"
                width={500}
                height={500}
                alt="Developer workspace illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
