import React, { useState } from "react";
    const currTime=new Date().toLocaleTimeString();
const App=()=>{
    const[time,setTime]=useState(currTime);
    const changeTime=()=>{
        setTime(new Date().toLocaleTimeString());
    }
return(
    <>

<div className="container">
        <h1 className="heading">{time}</h1>
        <button onClick={changeTime} className="btn">
          get Time
        </button>
      </div>


    </>
)
}

export default App;