import { motion } from "framer-motion"

const SkillIcon = ({iconComponent, name}) => {
  return (
//w-full sm:w-fit rounded-full text-white 
    <div className="flex flex-col justify-center items-center">
      {/* w-full sm:w-fit  */}
    <motion.div 
    whileHover={{
      scale: [1, 3, 3, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      transition: { duration: 1 },
      // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    whileTap={{
        scale: [1, 3, 3, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      transition: { duration: 1 },
      }}
    className="w-12 h-12 px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 mt-3">
      {/* px-2.5 lg:px-3 py-2 */}
      <spam className="flex justify-center items-center w-10 h-10 rounded-full bg-[#121212]">
        {/* px-5 py-2 */} 
          {iconComponent}
      </spam>
    </motion.div>
    <spam className="m-auto text-xs lg:text-sm mt-1">{name}</spam>
    </div>

  )
}

export default SkillIcon