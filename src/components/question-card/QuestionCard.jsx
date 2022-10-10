import React from 'react'

const QuestionCard = ({ ques }) => {
    const { correctAnswer, options, question } = ques
    function createMarkup(data) {
        return { __html: `${data}` };
      }
    return (
        <div >
            <div className='border-2 rounded-xl shadow-md p-4 lg:p-8 lg:w-1/2 mx-auto flex flex-col gap-8'>
                <div className='text-xl font-semibold' dangerouslySetInnerHTML={createMarkup(question)}></div>
                <div className='flex flex-col gap-2'>
                    {
                        options.map(el => {
                            return (
                                <div key={el} className='border-2 px-8 text-gray-800 font-medium rounded-md flex gap-3 items-center'>
                                    <input type="radio" id={el} name={question} value={el}/>
                                    <label for={el} className='w-full py-4'>{el}</label>
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