import React, { useState } from 'react'


export default function InsNum()  
{
  const Time = new Date().toLocaleTimeString();
  const state = useState();
  const [Timezone,setTimezone] = useState(0)
  const TimeFun = () => {
    setTimezone(Time)
    console.log(Time)
  }
  return (
    <>
    <div className="container">
        <h1 className="heading">{Time}</h1>
        <button onClick={TimeFun} className="btn">
          Click Me
        </button>
      </div>
        
        
    </>
  )
}