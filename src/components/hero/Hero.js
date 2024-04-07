import React from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { RiDiscordLine } from "react-icons/ri";

import {
  IconButton
} from "@material-tailwind/react";


const Hero = () => {
  return (
    <div className='relative bg-hero bg-center bg-no-repeat bg-cover h-screen'>
      <div className='absolute inset-0 bg-black opacity-50'></div> {/* Overlay */}
      <div className='h-full w-full flex flex-col justify-around py-10'>
        <div className='flex justify-start items-start pl-14'>
          <div className='z-10 p-5 flex flex-col'>
            <h1 className='font-nirvanaTitle text-white text-8xl'>
              Nirvana RolePlay
            </h1>
            <h1 className='font-japane text-red-700 text-8xl'>
              Yakuza
            </h1>
          </div>
        </div>
        <div>
        <div className='relative z-10 w-full flex justify-around'>
          <div className='text-white font-default w-3/12 p-5'>
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
          <div className='text-white font-default w-3/12 p-5'>
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
          <div className='text-white font-default w-3/12 p-5'>
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
