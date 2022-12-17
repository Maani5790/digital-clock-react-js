import React, { useState } from 'react';
 
 
const App = () => {
    let time = new Date().toLocaleTimeString();
    
    const [count, setCount] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCount(time);
    };
    setInterval(UpdateTime,1000)
    return(
        <>
<div className="container">
        <h1 className="heading">{time}</h1>
      
      </div>           
        </> 
    );
};    
export default App;