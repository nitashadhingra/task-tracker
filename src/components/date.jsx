import React from 'react'

const Today = () => {
        const d = new Date();
        const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        
        const day = weekDay[d.getDay()]
        const date = d.getDate()
        const month = months[d.getMonth()]
        const year = d.getFullYear()
    return (
        <div className="dateBox">
            <div className="dateInnerBox">
                {/* <h1>Today's date</h1> */}
                
                <h2>{day}, {date} {month}</h2>
                <h3>What are you doing today?</h3>
            </div> 
        </div>
    )
}

export default Today
