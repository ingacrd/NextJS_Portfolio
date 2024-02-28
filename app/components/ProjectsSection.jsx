"use client";

import React,{useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id:1,
        title: "NextJS AI Prompting tool",
        description: "Project 1 description",
        image: "images/projects/ReactNoteApp.gif",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ingacrd/NextJS_AI_PromptingTool",
        previewUrl: "https://next-js-ai-prompting-tool.vercel.app/",
    },
    {
        id:2,
        title: "React Notes App",
        description: "Create, edit, filter, and delete notes, tagging system, markdown support.",
        image: "images/projects/ReactNoteApp.gif",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ingacrd/React_TypeScript_NotesApp",
        previewUrl: "https://notesapplication-react.netlify.app/",
    },
    {
        id:3,
        title: "React Movie Searcher",
        description: "Search for movies using the OMDB API, showing dynamic movie cards with details.",
        image: "images/projects/ReactMovieSearcher.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ingacrd/ReactMovieSearcher",
        previewUrl: "https://reactmoviesearcher.netlify.app/",
    },
    {
        id:4,
        title: "IOS Task Manager",
        description: "iPhone app to view, add, update, delete, search and complete tasks",
        image: "images/projects/IOSTaskManager.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/ingacrd/IOS-TaskApp",
        previewUrl: "/",
    },
    {
        id:5,
        title: "Python Verb French API",
        description: "API for managing verbs and users, using Flask and MongoDB",
        image: "images/projects/PythonFrenchVerbs.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ingacrd/Python-API-French-Verbs/",
        previewUrl: "/",
    },
    {
        id:6,
        title: "PHP Quiz Game",
        description: "PHP. AJAX. Sign-Up. Sign-In. Logout. Time-Out. Change Password. Multi-Level Gam. Game Abandonment. History Result. MySQL.",
        image: "images/projects/QuizGame.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ingacrd/game_quizz",
        previewUrl: "https://quizzgame-88db6df00806.herokuapp.com/",
    },
    {
        id:6,
        title: "Javasript Bootstrap Portfolio ",
        description: "Portfolio Web responsive made using JavaScript, Bootstrap, SASS ans CSS Animations",
        image: "images/projects/JsBootstrapSassPortfolio.jpeg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ingacrd/PortfolioJavascriptBootstrap",
        previewUrl: "https://aru-portfolio.netlify.app/",
    },
    {
        id:6,
        title: "Javasript BlackJack game",
        description: "BlackJack simmple game using JavaScript",
        image: "images/projects/BlackJack.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ingacrd/Blackjack-game",
        previewUrl: "https://exquisite-dango-c516ae.netlify.app/",
    },
    {
        id:7,
        title: "Tracking Leads Chrome Extension",
        description: "JavaScript Chrome Extension to save leads's profile link using local storage memory",
        image: "images/projects/chromeExtension.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ingacrd/tracking-leads-chrome-extention",
        previewUrl: "/",
    },
    {
        id:8,
        title: "Ecommerce Mirror Fashion",
        description: "Ecommerce Front-end using HTML and CSS Animation",
        image: "images/projects/Mirror_fashion.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://harmonious-starburst-036a9a.netlify.app/",
    },

];

const ProjectsSection = () => {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: {y:50, opacity:0},
        animate: {y:0, opacity:1},
    };

  return (
    <section>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick = {handleTagChange} 
                name="All" 
                isSelected ={tag === "All"}
            />
            <ProjectTag 
                onClick = {handleTagChange} 
                name="Web" 
                isSelected ={tag === "Web"}
            />
            <ProjectTag 
                onClick = {handleTagChange} 
                name="Mobile" 
                isSelected ={tag === "Mobile"}
            />
        </div>
        <ul ref={ref}className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
                <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial" 
                    animate = {isInView? "animate" : "initial"}
                    transition={{duration: 0.3, delay: index*0.4}}
                    >
                        <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        tags={project.tag}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                     />
                </motion.li>
                
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection