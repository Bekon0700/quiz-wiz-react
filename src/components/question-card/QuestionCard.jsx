import React from 'react'

const QuestionCard = ({ ques }) => {
    const { correctAnswer, options, question } = ques
    return (
        <div >
            <div className='border rounded-xl py-4 px-2 w-1/2 mx-auto'>
                <code className='text-center whitespace-pre-line'>{question}</code>
                <div>
                    {
                        options.map(el => {
                            return (
                                <div key={el} className='border p-4 text-gray-800 font-semibold flex gap-3 items-center'>
                                    <input type="radio" id={el} name={question} value={el} />
                                    <label for={el} className='w-full'>{el}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default QuestionCard