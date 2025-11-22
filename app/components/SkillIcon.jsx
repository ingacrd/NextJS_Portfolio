import { motion, useAnimation } from "framer-motion"

const SkillIcon = ({iconComponent, name, baseScale = 1}) => {
  const controls = useAnimation();
  return (
//w-full sm:w-fit rounded-full text-white 
    <div className="flex flex-col justify-center items-center w-24">
      {/* w-full sm:w-fit  */}
    <motion.div 
      animate={controls}                              
      initial={{ scale: baseScale, rotate: 0 }}
     onHoverStart={() => {
      controls.start({
      scale: [baseScale, baseScale *3 ,baseScale* 3, baseScale, baseScale],
      rotate: [0, 0, 270, 270, 0],
      transition: { duration: 1 },
      //borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      
      });
      }}
      whileInView={{
      scale: [baseScale, baseScale*1.8, baseScale*1.8, baseScale, baseScale],
      //rotate: [0, 0, 270, 270, 0],
      transition: { duration: 1 },
     // borderRadius: ["20%", "20%", "50%", "50%", "20%"],

    }}
     onTap={() => {                                 
        controls.start({
          scale: [baseScale, baseScale*3, baseScale*3, baseScale, baseScale],
          rotate: [0, 0, 270, 270, 0],
          transition: { duration: 1 },
        });
      }}

    className="w-12 h-12 px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 mt-3">
      {/* px-2.5 lg:px-3 py-2 */}
      <span className="flex justify-center items-center w-10 h-10 rounded-full bg-[#121212]">
        {/* px-5 py-2 */} 
          {iconComponent}
      </span>
    </motion.div>
    <span className="mt-1 h-8 flex items-start justify-center text-xs text-center leading-tight">{name}</span>
    {/* <span className="m-auto text-xs lg:text-sm mt-1">{name}</span> */}
    
    </div>

  )
}

export default SkillIcon