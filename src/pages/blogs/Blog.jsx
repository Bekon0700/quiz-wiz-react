import React from 'react'

const blogData = [
  {
    id: 1,
    ques: `What is the purpose of react-router?`,
    ans: `React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.`
  },
  {
    id: 2,
    ques: `How does context api works?`,
    ans: `The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.`
  },
  {
    id: 3,
    ques: `What is useRef`,
    ans: `Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} /> , React will set its .current property to the corresponding DOM node whenever that node changes.`
  },
]

const Blog = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <p className='text-2xl font-bold py-8 text-center'>Today's Blog Posts</p>
      <div className='flex flex-col gap-4'>
        {
          blogData.map(el => {
            return (
              <div key={el.id} className='flex flex-col gap-4 p-4 text-xl font-semibold border-2 shadow-md'>
                <p className='text-amber-800'>{el.ques}</p>
                <p className='text-lg font-medium'>{el.ans}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Blog