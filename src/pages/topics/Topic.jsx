import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../../components/topic-card/Card'

const Topic = () => {
  const {data} = useLoaderData()
  return (
    <div className='py-8 flex flex-col gap-8'>
      <p className='text-3xl text-center font-semibold uppercase'>Exquisite topics are</p>
      <div className='flex flex-col lg:flex-row w-11/12 lg:w-2/3 mx-auto'>
        {
          data.map(el => <Card key={el.id} info={el} />)
        }
      </div>
    </div>
  )
}

export default Topic