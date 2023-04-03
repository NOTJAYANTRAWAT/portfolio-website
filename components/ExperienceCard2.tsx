import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCard2({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] 
    p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
       <motion.img
       initial={{
        y:-100,
        opacity:0,
      }}
       whileInView={{opacity:1,y:0}}
       transition={{duration:1.2}}
       viewport={{once:true}}
       className="w-32 h-32 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center "
       src="/noman.jpg"
       alt=""/>
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light ">UI/UX Designer</h4>  
        <p className="font-bold text-xl mt-1">nomaan.io</p>
        <div className="flex space-x-2 my-2">
          <img className="h-5 w-5 rounded-full"
          src='/Figma-Icon.svg'
          />
        </div>
        <p className="uppercase py-5 text-gray-300
        "> 01/1/2023</p>
        <ul className="list-disc space-y-2 ml-3 text-lg">
          <li>Created multiple design.</li>
          <li>Deisgned UI for an application.</li>
          <li>Provided multiple design ideas.</li>
          <li>Build and publish design ideas.</li>
          <p>
            
          </p>
        </ul>
      </div>      
    </article>
  )
}