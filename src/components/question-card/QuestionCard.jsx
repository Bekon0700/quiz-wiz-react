import React, { useState } from 'react'
import OptionCard from '../option-card/OptionCard';

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const QuestionCard = ({ ques, setRightAns }) => {
    const [showAns, setShowAns] = useState(false)
    const { correctAnswer, options, question } = ques
    function createMarkup(data) {
        return { __html: `${data}` };
    }
    const showAnswer = () => {
        setShowAns(!showAns)
    }

    return (
        <div >
            <div className='border-2 rounded-xl shadow-md p-4 lg:p-8 lg:w-3/4 mx-auto flex flex-col gap-8'>
                <div className='flex justify-between items-center'>
                    <div className='text-lg lg:text-xl font-semibold' dangerouslySetInnerHTML={createMarkup(question)}></div>
                    <div className='text-lg lg:text-2xl font-semibold text-red-400'>
                        {
                            showAns ?
                            <AiFillEye onClick={() => setShowAns(!showAns)}/>
                            :
                            <AiFillEyeInvisible onClick={() => showAnswer()} />
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        options.map(el => <OptionCard key={el} option={el} answer={correctAnswer} question={question} />)
                    }
                </div>
                <div className={showAns ? 'block bg-blue-400 p-2 rounded-sm' : 'hidden'}>
                    <p className='text-lg font-bold text-white'>Correct Answer is: <span className='px-1 text-black'>{correctAnswer}</span></p>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard