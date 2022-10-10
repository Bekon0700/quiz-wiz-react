import React from 'react'
import { useLoaderData } from 'react-router-dom'
import QuestionCard from '../../components/question-card/QuestionCard'

const Question = () => {
    const {data} = useLoaderData()
    const questions = data.questions
  return (
    <div className='w-11/12 mx-auto py-8'>
        <p className='text-3xl font-semibold text-amber-900 text-center pb-8'>Questions about {data.name}</p>
        <div className='flex flex-col gap-8'>
            {
                questions.map(el => <QuestionCard key={el.id} ques={el} />)
            }
        </div>
    </div>
  )
}

export default Question