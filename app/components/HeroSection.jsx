"use client"
import React from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Link from "next/link"

const HeroSection = () => {
  const downloadCV = () => {
    const aTag = document.createElement("a")
    aTag.href = "/CVFull.pdf"
    aTag.setAttribute("download", "AndreaRuizCV.pdf")
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (

    <section className="pt-20 pb-16 lg:py-16 lg:min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          {/* ✅ titre sans hauteur fixe, marge réduite */}
          <h1 className="text-white mb-1 text-3xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
          </h1>

          {/* ✅ pas de h-28, juste un min-height léger pour éviter le “saut” du texte */}
          <h2 className="text-white mb-3 text-2xl sm:text-4xl lg:text-6xl lg:leading-tight font-extrabold min-h-[2.5rem] sm:min-h-[3rem]">
            <TypeAnimation
              sequence={[
                "Andrea Ruiz",
                1000,
                "Fullstack Developer",
                1000,
                ".Net & React Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          {/* ✅ texte plus proche du nom */}
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-1">
            Full-Stack .NET & React Developer · 1+ year of experience ·📍Open
            to regional Québec roles
          </p>

          <p className="text-[#ADB7BE] mb-4">
            Focused on C#, ASP.NET Core, SQL Server, React, TypeScript, Azure &
            automated testing.
          </p>

          <div className="mb-6 space-y-1 text-sm sm:text-base text-[#E5E7EB]">
            <p className="uppercase tracking-wide text-[11px] sm:text-xs text-primary-300 font-semibold">
              Languages
            </p>
            <p>
              <b className="text-secondary-300">English:</b>{" "}
              <span className="font-light">Full professional proficiency</span> ·{" "}
              <b className="text-secondary-300">French:</b>{" "}
              <span className="font-light">Professional / functional</span>
            </p>
          </div>

          <div>
            <Link href="#projects">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                View my projects
              </button>
            </Link>
            <button
              onClick={downloadCV}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] relative">
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
