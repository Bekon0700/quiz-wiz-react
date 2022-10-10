import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import QuestionCard from '../../components/question-card/QuestionCard'

const Question = () => {
    const {data} = useLoaderData()
    const questions = data.questions
    const [rightAns, setRightAns] = useState(0)
  return (
    <div className='w-11/12 mx-auto py-8'>
        <p className='text-2xl lg:text-3xl font-semibold text-amber-900 text-center pb-12'>Questions about {data.name}</p>
        <div className='grid grid-cols-12'>
            <div className='flex flex-col gap-8 col-span-10'>
                {
                    questions.map(el => <QuestionCard key={el.id} ques={el} setRightAns={setRightAns} />)
                }
            </div>
            <div className='col-span-2'>
                <p className='text-xl font-bold'>Answers done correct: <span className='text-green-700'>{rightAns}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Question