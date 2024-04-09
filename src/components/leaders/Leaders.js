import React, { useRef } from 'react'
import LeaderCard from './LeaderCard'

import { motion, useScroll, useTransform } from "framer-motion"

const Leaders = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const circleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div  className=' bg-gray-900 overflow-hidden relative'> 
      <div className='relative  w-full h-full flex justify-center '>
        <motion.div ref={ref} style={{ y: circleY, marginTop: '-300px' }} className=' z-0 absolute rounded-full bg-red-700 w-[800px] h-[800px] '>

        </motion.div> 
      </div>
      <div className='z-10 relative w-full flex justify-center text-white md:text-6xl text-4xl font-nirvanaTitle p-10'>
        <motion.div    
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5  }}
              >
          <h2>Vezetőség</h2>
        </motion.div>
      </div>
      <div className='z-10 relative p-5 flex md:flex-row flex-col justify-around py-16 items-center gap-5'>
        <LeaderCard name={"Dagi Gandi"} img={"https://agent-xy.github.io/yakuza-app/assets/images/herceg.webp"} text={"Al-Leader"}/>
        <LeaderCard name={"Herceg"} img={"https://agent-xy.github.io/yakuza-app/assets/images/herceg.webp"} text={"Leader"}/>
        <LeaderCard name={"Spang Lee"} img={"https://agent-xy.github.io/yakuza-app/assets/images/herceg.webp"} text={"Al-Leader"}/>
      </div>

    </div>
  )
}

export default Leaders