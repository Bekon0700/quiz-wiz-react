import React, { useContext, useEffect, useState } from 'react'
import { QuestionContext } from '../../pages/questions/Question'

const OptionCard = ({ option, answer, question }) => {
    const [markAns, setMarkAns] = useState(false)
    const [rightAns, setRightAns] = useContext(QuestionContext)

    const checkOpt = (opt, ans) => {
        setMarkAns(opt === ans)
    }

    useEffect(() => {
        markAns ? 
        setRightAns(rightAns+1)
        :
        ''
    }, [markAns])

    return (
        <div onClick={() => checkOpt(option, answer)}
            className={markAns ?
                'border-2 px-3 lg:px-8 text-white bg-green-600 font-medium rounded-md flex gap-3 items-center' :
                'border-2 px-3 lg:px-8 text-gray-800 font-medium rounded-md flex gap-3 items-center'
            }
        >
            <input type="radio" id={option} name={question} value={option} />
            <label htmlFor={option} className='w-full py-4'>{option}</label>
        </div>
    )
}

export default OptionCard