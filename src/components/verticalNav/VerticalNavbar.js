import React from 'react'

import { IconButton } from "@material-tailwind/react";

import { IoLogoDiscord } from "react-icons/io5";
import { SiTiktok } from "react-icons/si";

const VerticalNavbar = () => {
  return (
    <div className='fixed z-20 top-0 left-0 h-screen hidden md:block'>
      <div className='flex flex-col justify-between p-5 h-full items-center'>
        <div>
          <a target='_blank' href='https://www.tiktok.com/@nirvanaroleplayhivatalos'>
            <IconButton>
              <SiTiktok size={24} />
            </IconButton>
          </a>
        </div>
        <div>
          <h2 className='write-vertical font-nirvanaTitle text-white tracking-widest'>NIRVANA ROLEPLAY</h2>
        </div>
        <div>
          <a target="_blabk" href='https://discord.gg/nirvanaroleplay2024'>
            <IconButton>
              <IoLogoDiscord size={24} />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  )
}

export default VerticalNavbar