import React from 'react'
import LeaderCard from './LeaderCard'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Leaders = () => {
  return (
    <div className=' bg-gray-900'>
      <div className='w-full flex justify-center text-white text-6xl font-nirvanaTitle p-10'>
        <h2>Vezetőség</h2>
      </div>
      <div className='flex justify-around py-16'>
        <LeaderCard name={"Dagi"} img={"/assets/images/herceg.webp"} text={"Al-Leader"}/>
        <LeaderCard name={"Herceg"} img={"/assets/images/herceg.webp"} text={"Leader"}/>
        <LeaderCard name={"Tata"} img={"/assets/images/herceg.webp"} text={"Al-Leader"}/>
      </div>

    </div>
  )
}

export default Leaders