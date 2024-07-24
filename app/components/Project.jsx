'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Projects = ({i, title, description, src, link, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (<>
  

  <div ref={container} className="h-[100vh] rounded-lg flex items-center justify-center sticky top-0">
    <motion.div 
      style={{backgroundColor: color, borderRadius:"20px", scale, top:`calc(-5vh + ${i * 25}px)`}} 
      className="flex flex-col relative top-[-25%] h-[500px] w-[1000px] p-[50px] origin-top "
    >
      <h2 className=' text-2xl md:text-4xl font-bold text-center'>{title}</h2>
      <div className="flex flex-col md:flex-row h-[100%] mt-2 md:mt-[50px] gap-6 md:gap-[50px]">
        <div className="w-full md:w-[40%] relative top-[10%]">
          <p className='text-lg first-letter:text-xl'>{description}</p>
          <span className='flex mt-[10px] items-center gap-[10px]'>
            <a href={link} target="_blank" className='text-lg border rounded-md p-[5px] cursor-pointer'>See more</a>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='white'>
              <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
            </svg>
          </span>
        </div>

        <div className="relative w-[60%] h-[100%] overflow-hidden">
          <motion.div
            className="w-[100%] h-[100%] hidden  md:flex"
            style={{scale: imageScale}}
          >
            <Image
            className='object-contain'
              fill
              src={src}
              alt="image" 
            />
          </motion.div>
        </div>

      </div>
    </motion.div>
  </div>
  </>
)
}

export default Projects