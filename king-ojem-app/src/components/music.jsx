// import  { useState } from "react";
import Casseette from "../assets/images/casette.jpg";
import Casseette2 from "../assets/images/cassette image.jpg";
import Viynyl from "../assets/images/vinyl.jpg"
import { useState } from "react";
  const images =[
      {id:1, defaultImg: Casseette, hoverImg: Viynyl},
      {id:2, defaultImg: Casseette2, hoverImg: Viynyl}, 
      {id:3, defaultImg: Casseette, hoverImg: Viynyl},
      {id:4, defaultImg: Casseette2, hoverImg: Viynyl},
      {id: 5, defaultImg: Casseette, hoverImg: Viynyl},
      {id: 6, defaultImg: Casseette2, hoverImg: Viynyl},

      
    ]
function MusicDiv({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  // const [isClicked, setClicked] = useState(false)
  //   const infoCardStyle ={
  //     height: isClicked ? "26rem" : "inherit",
  //     top: isClicked? "75%" : "83%",
  //     fontSize:isClicked? "0.9rem" : "0.8rem",
  //     padding:isClicked? "1% 1% 1.5%" : "0.8rem",
  //   }

  const cardStyle = {
    backgroundImage: `url(${isHovered ? item.hoverImg : item.defaultImg})`,
    transition: 'background-image 0.4s ease, transform 0.3s ease',
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    cursor: 'pointer',
    // width: isHovered ? '100px': '700px'
  };

  return (
    <>
      {/* <h1>Music</h1>
      <p>Welcome to the Music section!</p>
      </div>
      <div style={infoCardStyle}>
      <h1>Welcome to King Ojem</h1>
      <p>Experience the power of innovation and creativity with our cutting-edge solutions. Join us on a journey to transform your ideas into reality.</p>
      <button onClick={() => setClicked(!isClicked)}>{isClicked ? "Close" : "Learn More"}</button> */}
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="album_display"
      />
    </>
  );
}


function Music ({name}){
  return(
    <>
    <div className="between_tabs" id={name}>
        <h1>{name}</h1>
      <div className="music_container">
      
      {images.map((item) =>(
          <MusicDiv key={item.id} item = {item} />
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Music;