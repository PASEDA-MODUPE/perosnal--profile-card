import React from 'react'
import Footer from './Footer'

const Main = () => {
  return (
    <div className=' ml-10'>
      <h1 className=' text-2xl  mb-6'>SKILLS:</h1>
      <div className=' font-serif '>
        <button className=' border border-black-500 bg-emerald-300 w-20 hover:bg-lime-400'>Html</button> <span><button className=' border border-black-500 bg-emerald-300 w-20 hover:bg-orange-400'>Css</button></span>
       <span></span> <button className=' border border-black-500 bg-emerald-300 w-20'>JS</button> <span></span>
        <button className=' border border-black-500 bg-emerald-300 w-20 hover:bg-blue-400'>React</button> <span></span>
        <button className=' border border-black-500 hover:bg-orange-400 bg-emerald-300 w-20'>Node</button> <span><button className=' border border-black-500 bg-emerald-300 w-20 hover:bg-purple-400'>MongoDB</button></span>
         
      </div>
      <Footer />
    </div>
  )
}

export default Main
