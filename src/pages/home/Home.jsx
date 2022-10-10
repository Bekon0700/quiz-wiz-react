import React from 'react'

const Home = () => {
  return (
    <div className='w-2/3 mx-auto flex flex-col lg:flex-row justify-between items-center py-24'>
      <div className='text-3xl lg:text-5xl font-bold text-amber-900 text-center'>
        <p>Be a quiz wizard</p>
        <p className='text-lg lg:text-xl font-semibold text-black pt-4'>Use our specialized quiz to justify your knowledge</p>
      </div>
      <div className='py-8'>
        <img src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=2000" alt="quiz-pic" className='lg:h-96 ring-2 rounded-md object-contain'/>
      </div>
    </div>
  )
}

export default Home