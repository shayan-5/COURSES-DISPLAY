import React from 'react'


const Card = (props) => {
  
    let course = props.course;
  return (
    <div className='w-[300px] h-[450px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden cursor-pointer hover:scale-105 hover: border-white hover:border-2 transition-all '>
        <div className='relative'>
            <img src={course.image.url} alt="404 not found"/>
        </div>
        

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>{course.description}</p>
            
        </div>
    </div>
  )
}

export default Card
