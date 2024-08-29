"use client"
import React from "react"
import Image from "next/image"

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";




const HeroSection = () => {
  const downloadCV = () => {

    const aTag = document.createElement("a")
    aTag.href = "/CVFull.pdf"
    aTag.setAttribute("download", "AndreaRuizCV.pdf")
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    
  }

  return (
    <section className="lg:py-16 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <motion.div
             initial={{ opacity: 0, scale:0}} 
             animate={{opacity: 1, scale:1}} 
             transition={{duration:0.5}} 
             className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 h-28 sm:h-auto text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                    Hello, I&apos;m {""}
                    </span>
                    <br />
                       <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          "Andrea Ruiz",
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                          "Fullstack Developer",
                          1000,
                          "Web Developer",
                          1000,
                          "Programmer Analyst",
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
                  </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                A passionate fullstack developer based in 📍Montreal, Québec, Canada. 
                </p>
                <div>
                  <Link
                    href="#contact"
                  >
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                        Hire me
                      </button>
                  
                  </Link>
                  <button 
                    onClick={downloadCV}
                    className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                  </button>
                </div>
            </motion.div>
            <motion.div
             initial={{ opacity: 0, scale:0}} 
             animate={{opacity: 1, scale:1}} 
             transition={{duration:0.5}}  
             className="col-span-4 place-self-center mt-4 lg:mt-0">
              <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
                />
              </div>
              
            </motion.div>
            
        </div>
        
    </section>
  )
}

export default HeroSection