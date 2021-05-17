import React from 'react'
import Button from './button.js'

const Header = ({addNew}) => {
    
    const handleClick = () => {
        console.log("click hogya")
        addNew()
    }

    return (
        <div className="heading">
            <h1>Your Tasks</h1>
            <Button text="+" onClick={handleClick} />
        </div>
    )
}

export default Header
