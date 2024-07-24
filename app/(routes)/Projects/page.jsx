'use client';
import { projects } from '../../../data';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Projects from '@/app/components/Project';

export default function page() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className="main">
        <div className="mt-20 ">
      <div className="text-center">
        <h1 className="font-bold md:text-5xl text-2xl">PROJECTS</h1>
        <p className="bg-gradient-to-r from-violet-400 to-red-500 text-transparent bg-clip-text tracking-[10px]">
          EXPLORE NOW
        </p>
      </div>
        </div>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Projects key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}