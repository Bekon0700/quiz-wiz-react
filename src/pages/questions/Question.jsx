import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Question = () => {
    const {data} = useLoaderData()
    console.log(data)
  return (
    <div>Question</div>
  )
}

export default Question