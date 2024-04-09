import React from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { RiDiscordLine } from "react-icons/ri";

import { motion } from "framer-motion"

import {
  IconButton
} from "@material-tailwind/react";


const Hero = () => {
  return (
    <div className='relative bg-hero bg-center bg-no-repeat bg-cover md:h-screen overflow-hidden'>
      <div className='absolute inset-0 bg-black opacity-50'></div> {/* Overlay */}
      <div className='h-full w-full flex flex-col justify-around py-10'>
        <div className='flex justify-start items-start md:pl-16 '>
          <div className='z-10 p-5 flex flex-col'>
            <motion.div    
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5  }}
            >
              <h1 className='font-nirvanaTitle text-white md:text-8xl text-6xl'>
                Nirvana RolePlay
              </h1>
            </motion.div>
            <motion.div    
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: .2 }}
            >
              <h1 className='font-japane text-red-700 md:text-8xl text-6xl'>
              Yakuza
              </h1>
            </motion.div>
            
          </div>
        </div>
        <div>
        <div className='relative z-10 w-full flex md:flex-row flex-col justify-around '>
          <motion.div className='md:w-3/12 p-5'
            initial={{ x: -100, opacity: 0}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: .4 }}
          >
            <div className='text-white font-default '>
              <h3 className='text-xl'>
                Mit várhatsz a frakciótól:
              </h3>
              <p>
                Segítőkész közösség
              </p>
              <p>
                Akciódús rp
              </p>
              <p>
                Értelmes társaság
              </p>
              <p>
                Remek frakció autók
              </p>
            </div>
          </motion.div>
          <motion.div className='md:w-3/12 p-5'
            initial={{ y: 100, opacity: 0}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: .6 }}
          >
            <div className='text-white font-default'>
              <h3 className='text-xl'>
                TGF Menete:
              </h3>
              <p>
                A Nirvana discord szerverén, megkeresel: @kis_herceg 
              </p>
              <p>
                Vagy belépsz a Yakuza discordra.
              </p>
              <a href='https://discord.gg/ATUfPYpHzY' target="_blank">
                <IconButton>
                  {/* <i className="fas fa-heart" /> */}
                  <RiDiscordLine className='text-xl' />

                </IconButton>
              </a>
            </div>
          </motion.div>
          <motion.div className='md:w-3/12 p-5'
            initial={{ x: 100, opacity: 0}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: .8 }}
          >
            <div className='text-white font-default'>
              <h3 className='text-xl'>
                TGF Információk:
              </h3>
              <p>
                Olyan embereket keresünk, akiket nem csak a dara érdekel, hanem a normális rp is.
              </p>
              <p>
                Min fél éves rp tapasztalat.
              </p>
              <p>
                Megfelelő komolyság a helyzetekhez mérten.
              </p>
              <p>
                Korhatár nincs, viszont a fentieket komolyan vesszük.
              </p>
              
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className='relative z-10 w-full flex justify-center p-5'>
        <div className='bg-red-700 rounded-3xl px-4 py-2 text-2xl cursor-pointer'>
          <IoIosArrowDown />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
