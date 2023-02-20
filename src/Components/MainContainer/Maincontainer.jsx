import React from 'react'
import Experience from './Experience/Experience'
import Hobbies from './Hobbies/Hobbies'
import './maincontainer.css'
import Name from './Name/Name'
import Skill from './Skills/Skill'




const Maincontainer = () => {
  return (
    <>
    <div className='maincontainer'>
        <Name/>
        <Experience/>
        <Skill/>

        <Hobbies/>
    </div>
    </>
  )
}

export default Maincontainer