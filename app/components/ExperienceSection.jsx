"use client";

import React from "react";

const experiences = [
  {
    title: "Junior .NET Developer",
    company: "Future Electronics",
    period: "2024–2025",
    location: "Montréal, QC",
    bullets: [
      "Developed, tested and maintained internal services and libraries using C# and .NET., colaborating in Gitlab",
      "Applied SOLID principles and clean coding practices to improve reliability and maintainability.",
      "Worked on migration of existing processes, debugging and improving legacy code.",
    ],
  },
  {
    title: "Full-Stack .NET C# Developer (Volunteer)",
    company: "Custom County",
    period: "2024",
    location: "Canada (remote)",
    bullets: [
      "Contributed to an N-tier application built with Blazor and SQL Server.",
      "Implemented features following Unit of Work design pattern and SOLID principles.",
      "Collaborated in an Agile team using Azure DevOps, Git and code reviews.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="text-white mb-16">
      <div className="max-w-6xl mx-auto py-8 px-4 xl:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Professional Experience
        </h2>
        <p className="text-primary-300 mb-6">
          Real-world experience working with .NET, C#, Agile teams and modern tooling.
        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-primary/10"
            >
              <header className="mb-3">
                <h3 className="text-xl font-semibold">
                  {exp.title}{" "}
                  <span className="text-primary-300">– {exp.company}</span>
                </h3>
                <p className="text-sm text-gray-300">
                  {exp.period} · {exp.location}
                </p>
              </header>

              <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm md:text-base">
                {exp.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
