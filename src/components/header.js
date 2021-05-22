import React from 'react'
import Button from './button.js'

const Header = ({optionToAddTask, showForm}) => {
    
    const handleClick = () => {
        console.log("click hogya")
        optionToAddTask()
    }

    return (
        <div className="heading">
            <h1>Your Tasks</h1>
            <Button text={showForm ? "x" : "+"} onClick={handleClick} />
        </div>
    )
}

export default Header
