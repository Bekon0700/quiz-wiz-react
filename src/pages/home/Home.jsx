import React, { useEffect, useState } from 'react'
import { topicLoader } from '../../loaderMethods'
import Card from './../../components/topic-card/Card'
const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const loadData = async () => {
      const pp = await topicLoader()
      setData(pp.data)
    }
    loadData()
  }, [])
  return (
    <div className='pb-12'>
      <div className='w-2/3 mx-auto flex flex-col lg:flex-row justify-between items-center py-24'>
        <div className='text-3xl lg:text-5xl font-bold text-amber-900 text-center'>
          <p>Be a quiz wizard</p>
          <p className='text-lg lg:text-xl font-semibold text-black pt-4'>Use our specialized quiz to justify your knowledge</p>
        </div>
        <div className='py-8'>
          <img src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=2000" alt="quiz-pic" className='lg:h-96 ring-2 rounded-md object-contain' />
        </div>
      </div>
        <div className='flex flex-col lg:flex-row items-center w-11/12 lg:w-2/3 mx-auto'>
          {
            data.map(el => <Card key={el.id} info={el} />)
          }
        </div>
    </div>
  )
}

export default Home