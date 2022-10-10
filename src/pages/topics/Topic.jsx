import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Topic = () => {
  const {data} = useLoaderData()
  console.log(data)
  return (
    <div>
      <p>Exquisite topics are</p>
    </div>
  )
}

export default Topic