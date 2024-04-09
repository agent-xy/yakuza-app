import React from 'react'

import { Typography } from "@material-tailwind/react";

const Cars = () => {
  return (
    <div className='py-5 bg-gray-900'>
      <div className='text-white md:text-6xl text-4xl font-nirvanaTitle p-10 flex justify-center'>
        <h2>Frakció Autók</h2>
      </div>

      <div className='w-full h-32 -skew-y-3 bg-red-700 py-5'>

      </div>

      <div className='flex md:flex-row flex-col justify-around items-center p-5'>
        <div>
          <figure className="relative h-96 w-full">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="https://agent-xy.github.io/yakuza-app/assets/images/audiL.jpg"
              alt="nature image"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Audi rs 6
                </Typography>
                {/* <Typography color="gray" className="mt-2 font-normal">
                  20 July 2022
                </Typography> */}
              </div>
              <Typography variant="h5" color="blue-gray">
                Yakuza
              </Typography>
            </figcaption>
          </figure>
        </div>
        <div className=''>
          <img className=' w-[500px]' src="https://agent-xy.github.io/yakuza-app/assets/images/gtaGirl.png" alt="" />
        </div>
      </div>  


      <div className='w-full h-32 skew-y-3 bg-red-700 py-5'>

      </div>



      <div className='flex md:flex-row flex-col justify-around items-center p-5'>
        <div>
          <img className='w-[700px]' src="https://agent-xy.github.io/yakuza-app/assets/images/girlpd.png" alt="" />
        </div>
        <div>
          <figure className="relative h-96 w-full">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="https://agent-xy.github.io/yakuza-app/assets/images/porsheR.webp"
              alt="nature image"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Porsche Gt 3
                </Typography>
                {/* <Typography color="gray" className="mt-2 font-normal">
                  20 July 2022
                </Typography> */}
              </div>
              <Typography variant="h5" color="blue-gray">
                Yakuza
              </Typography>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className='w-full h-32 -skew-y-3 bg-red-700 py-5'>

      </div>

    </div>
  )
}

export default Cars