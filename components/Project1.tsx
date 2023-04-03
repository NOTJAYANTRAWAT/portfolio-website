import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Project1({}: Props) {
  return (
    <div className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center p-20 md:p-44 xl:p-44 h-screen  '> 
                    <motion.img 
                    initial={{
                      y:-300,
                      opacity:0,
                  }}
                  transition={{
                      duration:1.2,
                  }}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                    src='/try3_new.png'
                    alt=''
                    />
                    <div className='space-y-10 px-0 md:px-0 max-w-6xl'> 
                        <h4 className='text-sm font-semibold text-center xl:text-xl'>
                        <span className='underline decoration-[#F7AB0A]/10}'>
                           Project 1 of 3 : 
                        </span>
                        Alz Budz
                        </h4>
                        <p className='text-sm text-center md:text-left xl:text-lg'>
                        Now-a-days the worst thing that can happen to our loved one who is suffering from disease like 
                        Dementia and Alzheimer is that if he/she is out of house and forget the address or even forget where 
                        he/she is? 
                        Although this is such a huge problem but no promising solution has been made that is accessible 
                        to common public. Taking this in mind and the fact that how mobiles have integrated to our daily 
                        life and easily accessible to public, we propose a Native Mobile Application for the same.
                        </p>
                        </div>
                        
                        
                </div>
  )
}

export default Project1