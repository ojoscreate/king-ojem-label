import  { useState } from "react";
function Music() {

    const [isClicked, setClicked] = useState(false)
      const infoCardStyle ={
        height: isClicked ? "26rem" : "inherit",
        top: isClicked? "75%" : "83%",
        fontSize:isClicked? "0.9rem" : "0.8rem",
        padding:isClicked? "1% 1% 1.5%" : "0.8rem",
      }
  return (
    <>
        <div>
        <h1>Music</h1>
        <p>Welcome to the Music section!</p>
        </div>
        <div  style={infoCardStyle}>
        <h1>Welcome to King Ojem</h1>
        <p>Experience the power of innovation and creativity with our cutting-edge solutions. Join us on a journey to transform your ideas into reality.</p>
        <button onClick={() => setClicked(!isClicked)}>{isClicked ? "Close" : "Learn More"}</button> 
      </div>
    </>
    
  )
}

export default Music;