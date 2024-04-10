import React from 'react'

const Video = () => {
  return (
    <div className='bg-gray-900 overflow-hidden'>

      <div className='relative z-10 w-full h-24 bg-black'></div>

      <div className='absolute w-full h-full z-0 bg-costume-video bg-cover bg-center'></div>
      


      <div className='relative z-10 py-32'>
        <div className='flex justify-center p-5 '>
          <iframe 
            width="640" 
            height="360" 
            src="https://youtube.com/embed/Peh3yIZCsuE?autoplay=1&mute=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
              
          </iframe>
        </div>
      </div>


      <div className='relative z-10 w-full h-24 bg-black'></div>

    </div>
  )
}

export default Video