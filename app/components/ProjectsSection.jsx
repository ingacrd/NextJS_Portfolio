"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const featuredProjects = [
  {
    id: "bid-calculator",
    title: "Bid Calculator — Full-Stack .NET 8 API + React Frontend (TDD)",
    description:
      "A clean full-stack project demonstrating TDD, domain design, and a modern React frontend. Calculates bid totals with dynamic fees using a .NET 8 API and reactive UI.",
    stack:
      ".NET 8 · C# · ASP.NET Core Web API · React · TypeScript · TailwindCSS · xUnit · Vitest · React Testing Library · Azure · Netlify",
    bullets: [
      "Backend built with SOLID principles and TDD (xUnit + FluentAssertions).",
      "Fee engine with clean domain architecture.",
      "React + TypeScript frontend with live debounced updates and unit tests (Vitest + React Testing Library)",
      "Deployed to Azure (API) & Netlify (Frontend).",
    ],
    liveDemoUrl: "https://bidreactcalc.netlify.app/",
    frontendRepoUrl: "https://github.com/ingacrd/React-Bid-Calculator-Frontend",
    backendRepoUrl: "https://github.com/ingacrd/Donet-TDD-Bid-Calculator",
  },
  {
    id: "property-rental",
    title: "Property Rental Management — ASP.NET Core MVC + SQL Server",
    description:
      "Multi-role property management platform for tenants, owners and managers, with scheduling, chat, and property administration.",
    stack:
      "ASP.NET Core MVC · C# · Entity Framework Core · SQL Server · Bootstrap · JavaScript · Azure",
    bullets: [
      "Designed the data model and implemented CRUD features for properties, users and rental operations.",
      "Built authentication/authorization with role-based access and secure account workflows.",
      "Integrated scheduling, messaging and property-administration features using MVC architecture.",
      "Deployed the application on Azure with SQL Server database and managed environment configuration.",
      "Demo user: owner1, password: Owner123! "
    ],
    liveDemoUrl: "https://property-rentals-ingaru-f6gghbhgg8dkgbaf.canadacentral-01.azurewebsites.net/",
    frontendRepoUrl: null,
    backendRepoUrl:
      "https://github.com/ingacrd/Property-Rental-Management-ASP.Net-Core-MVC",
  },
  {
    id: "ai-prompting-tool",
    title: "Full-Stack AI Prompting Tool — Next.js + MongoDB",
    description:
      "Full-stack web app to create, organize and share AI prompts with tags, user profiles, and Google authentication.",
    stack: "Next.js  · Tailwind · MongoDB · NextAuth (Google Login)",
    bullets: [
      "Implemented full CRUD for prompts with tags, likes and user profiles.",
      "Implemented Google authentication (NextAuth) and user profiles with secure session handling.",
      "Built all pages, forms and layouts in Next.js with responsive Tailwind UI.",
      "Integrated MongoDB with Next.js server-side logic for persistent data storage.",
    ],
    liveDemoUrl: "https://next-js-ai-prompting-tool.vercel.app/",
    frontendRepoUrl: null,
    backendRepoUrl: "https://github.com/ingacrd/NextJS_AI_PromptingTool",
  },
  {
    id: "react-notes",
    title: "React Notes App — React + TypeScript",
    description:
      "A fully-featured note-taking app built with React and TypeScript, supporting markdown editing, tagging, search, and dynamic filtering. Expanded significantly beyond the original starter with new features, improved UX, and a clean, scalable component structure.",
    stack: "React · TypeScript · React Router · Bootstrap · Local Storage Persistence",
    bullets: [
      "Implemented complete CRUD for notes with markdown editing and category tagging.",
      "Added content search, category filtering, creation date property, and date-range filtering.",
      "Enhanced the routing structure and optimized component organization for scalability.",
      "Persisted notes using local storage for a lightweight client-side experience.",
    ],
    liveDemoUrl: "https://notesapplication-react.netlify.app/",
    frontendRepoUrl: null,
    backendRepoUrl: "https://github.com/ingacrd/React_TypeScript_NotesApp",
  },
];

const otherProjects = [
  {
    id: "react-movie-searcher",
    title: "React Movie Searcher",
    description:
      "Movie search app using the OMDB API with dynamic cards and custom sorting.",
    image: "images/projects/ReactMovieSearcher.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ingacrd/ReactMovieSearcher",
    previewUrl: "https://reactmoviesearcher.netlify.app/",
    technologies: ["React"],
  },
  {
    id: "android-couple-game",
    title: "Android App – CouplePoints",
    description:
      "Android app that rewards couples for completing challenges and sending appreciation notes.",
    image: "images/projects/myCoupleGame.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ingacrd/couplePoints-Android-App",
    previewUrl: "/",
    technologies: ["Android", "Java", "Firebase"],
  },
  {
    id: "ios-poly-verbs",
    title: "iOS App – Poly French Verbs Game",
    description:
      "iOS quiz game that consumes the French Verbs API to help users learn verbs, with sign in and registration.",
    image: "images/projects/poly.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ingacrd/IOS-Verbs-French",
    previewUrl: "/",
    technologies: ["Swift", "iOS"],
  },
  {
    id: "ios-task-manager",
    title: "iOS Task Manager",
    description:
      "iPhone app to view, add, update, delete, search and complete tasks.",
    image: "images/projects/IOSTaskManager.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ingacrd/IOS-TaskApp",
    previewUrl: "/",
    technologies: ["Swift", "iOS"],
  },
  {
    id: "python-french-verbs-api",
    title: "French Verbs API — Python + MongoDB",
    description:
      "REST API to search and retrieve French verbs with conjugation metadata.",
    image: "images/projects/PythonFrenchVerbs.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ingacrd/Python-API-French-Verbs/",
    previewUrl: "/",
    technologies: ["Python", "FastAPI/Flask", "MongoDB"],
  },
  {
    id: "php-quiz-game",
    title: "Quiz Game — PHP + AJAX + MySQL",
    description:
      "Browser-based quiz game with score tracking, multi-level game and history.",
    image: "images/projects/QuizGame.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ingacrd/game_quizz",
    previewUrl: "/",
    technologies: ["PHP", "MySQL", "AJAX"],
  },
  {
    id: "chrome-extension",
    title: "Chrome Extension – Lead Tracking",
    description:
      "Chrome extension to save leads’ profile links using local storage.",
    image: "images/projects/chromeExtension.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ingacrd/tracking-leads-chrome-extention",
    previewUrl: "/",
    technologies: ["JavaScript", "Chrome Extension API"],
  },
  {
    id: "blackjack-game",
    title: "JavaScript Blackjack Game",
    description: "Simple BlackJack game demonstrating DOM and game logic.",
    image: "images/projects/BlackJack.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ingacrd/Blackjack-game",
    previewUrl: "https://exquisite-dango-c516ae.netlify.app/",
    technologies: ["JavaScript"],
  },
  {
    id: "js-bootstrap-portfolio",
    title: "JavaScript Bootstrap Portfolio",
    description:
      "Responsive portfolio built with JavaScript, Bootstrap, SASS and CSS animations.",
    image: "images/projects/JsBootstrapSassPortfolio.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ingacrd/PortfolioJavascriptBootstrap",
    previewUrl: "https://aru-portfolio.netlify.app/",
    technologies: ["JavaScript", "Bootstrap", "SASS"],
  },
  {
    id: "multipurpose-layout",
    title: "Multipurpose Responsive Layout",
    description:
      "Landing page with services, testimonials, FAQ, portfolio and contact sections.",
    image: "images/projects/MultipurposeLayoutBootstrap.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ingacrd/PortfolioJavascriptBootstrap",
    previewUrl: "https://aru-portfolio.netlify.app/",
    technologies: ["Bootstrap", "SASS"],
  },
  {
    id: "mirror-fashion",
    title: "Ecommerce Mirror Fashion",
    description:
      "Ecommerce front-end using HTML and CSS animations to showcase products.",
    image: "images/projects/Mirror_fashion.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://harmonious-starburst-036a9a.netlify.app/",
    technologies: ["HTML", "CSS Animations"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [showAllOther, setShowAllOther] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    // When changing tag, reset to collapsed view so it never overwhelms
    setShowAllOther(false);
  };

  const filteredOtherProjects = otherProjects.filter((project) =>
    project.tag.includes(tag)
  );

  const VISIBLE_OTHER_COUNT = 6;
  const visibleOtherProjects = showAllOther
    ? filteredOtherProjects
    : filteredOtherProjects.slice(0, VISIBLE_OTHER_COUNT);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-16">
      {/* Top: Experience + Featured Projects */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
          I build full-stack solutions with .NET, JavaScript and modern web
          frameworks, focusing on clean architecture, testing and maintainable
          code. Here are a few projects that best represent how I work
          end-to-end.
        </p>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-10 mt-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 flex flex-col justify-between
           hover:border-primary-500/60 hover:-translate-y-1 hover:shadow-xl/30 transition-transform transition-colors duration-200"
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-primary-500/10 text-primary-300 text-xs font-semibold px-3 py-1 mb-3">
                  Featured Project
                </span>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.stack.split("·").map((tech) => (
                    <span
                      key={tech.trim()}
                      className="text-[11px] md:text-xs px-2 py-1 rounded-full bg-white/5 text-primary-100 border border-white/10"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-sm text-gray-300">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2 sm:gap-3 items-center">
                {/* Live demo = primary */}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold px-4 py-2 rounded-full bg-primary-500 text-white shadow-md shadow-primary-500/40 hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition"
                  >
                    Live demo
                  </a>
                )}

                {/* Repos = secondary pills */}
                {project.frontendRepoUrl && (
                  <a
                    href={project.frontendRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full bg-white/5 text-gray-100 border border-white/15 hover:bg-white/10 hover:border-primary-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition"
                  >
                    Frontend repo
                  </a>
                )}
                {project.backendRepoUrl && (
                  <a
                    href={project.backendRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full bg-white/5 text-gray-100 border border-white/15 hover:bg-white/10 hover:border-primary-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition"
                  >
                    Backend repo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Other Projects (compact grid) */}
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white text-center mb-3">
          Other Projects
        </h3>
        <p className="text-center text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
          Smaller projects, tutorials and experiments that show my curiosity and
          range across web, mobile and APIs. These are bonus projects on top of
          my main .NET + React focus.
        </p>

        <div className="text-white flex flex-row justify-center items-center gap-2 py-4">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>

        <ul className="grid md:grid-cols-3 gap-6 md:gap-8">
          {visibleOtherProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technologies={project.technologies}
                compact
              />
            </motion.li>
          ))}
        </ul>

        {filteredOtherProjects.length > VISIBLE_OTHER_COUNT && (
          <div className="flex flex-col items-center mt-6">
            <button
              type="button"
              onClick={() => setShowAllOther((prev) => !prev)}
              className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full bg-white/5 text-gray-100 border border-white/15 hover:bg-white/10 hover:border-primary-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition"
            >
              {showAllOther ? "Show fewer projects" : "Show more projects"}
            </button>
            <span className="mt-2 text-xs text-gray-400">
              Showing {visibleOtherProjects.length} of{" "}
              {filteredOtherProjects.length} projects
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
