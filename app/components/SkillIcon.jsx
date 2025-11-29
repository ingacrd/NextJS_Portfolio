import React from "react";
import { motion, useAnimation } from "framer-motion";

const SkillIcon = ({ iconComponent, name, baseScale = 1, variant = "core" }) => {
  const controls = useAnimation();
  const isCore = variant === "core";

  const hoverFactor = isCore ? 2.4 : 1.15;
  const tapFactor = isCore ? 2.6 : 1.2;
  const inViewFactor = isCore ? 1.6 : 1.05;

  return (
    <div
      className={`flex flex-col justify-center items-center ${
        isCore ? "w-24" : "w-20 opacity-80"
      }`}
    >
      <motion.div
        animate={controls}
        initial={{ scale: baseScale, rotate: 0 }}
        onHoverStart={() => {
          controls.start({
            scale: [
              baseScale,
              baseScale * hoverFactor,
              baseScale * hoverFactor,
              baseScale,
              baseScale,
            ],
            rotate: isCore ? [0, 0, 270, 270, 0] : [0, 0, 0, 0, 0],
            transition: { duration: isCore ? 1 : 0.6 },
          });
        }}
        whileInView={{
          scale: [
            baseScale,
            baseScale * inViewFactor,
            baseScale * inViewFactor,
            baseScale,
            baseScale,
          ],
          transition: { duration: isCore ? 1 : 0.6 },
        }}
        onTap={() => {
          controls.start({
            scale: [
              baseScale,
              baseScale * tapFactor,
              baseScale * tapFactor,
              baseScale,
              baseScale,
            ],
            rotate: isCore ? [0, 0, 270, 270, 0] : [0, 0, 0, 0, 0],
            transition: { duration: isCore ? 1 : 0.6 },
          });
        }}
        className={`w-12 h-12 px-1 py-1 rounded-full mt-3 ${
          isCore
            ? "bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 shadow-lg shadow-primary-500/40"
            : "bg-[#181818] border border-white/5"
        }`}
      >
        <span
          className={`flex justify-center items-center w-10 h-10 rounded-full ${
            isCore ? "bg-[#121212]" : "bg-transparent"
          }`}
        >
          {iconComponent}
        </span>
      </motion.div>

      <span
        className={`mt-1 h-8 flex items-start justify-center text-center leading-tight ${
          isCore ? "text-[0.7rem] text-white" : "text-[0.65rem] text-gray-400"
        }`}
      >
        {name}
      </span>
    </div>
  );
};

export default SkillIcon;
