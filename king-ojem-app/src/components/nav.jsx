// import React from "react";
// import { useInView } from "react-intersection-observer";
import { useState } from "react";


//  NAV DATA
const Navi = [
    {id:1, name: "home"  },
    {id:2, name: "music"  },
    {id:3, name: "videos"  },
    {id:4, name: "shop"  },
    {id:5, name: "subscribe"  },


]

function Nav ({ isScrolled }){
  // const isScrolled = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // const { ref, inView } = useInView({
  //   threshold: 0.6,
  //   triggerOnce: true,
  // });
  //   const isScrolled = !inView;


    return(
        <>
        {/* <nav className={`nav${scrolled ? " scrolled" : ""}`}> */}
         {/* <div ref={ref} className="scroll-trigger" /> */}
        <nav   className={`nav ${isScrolled ? "nav-scrolled" : ""}`} >
            {/* <div><p>josh</p></div> */}
             <Hamburger isScrolled={isScrolled}/>
            <ul className={`nav-link ${isScrolled? "nav-veiw": ""}`}>
                {/* <li><a href="/">Home</a></li> */}
                {/* <li><a href="#music">Music</a></li>
                <li><a href="/">Video</a></li>
                <li><a href="/">Shop</a></li>
                <li><a href="/">Subscribe</a></li> */}
               
                {Navi.map((navlink) => (
                <li key={navlink.id}><a href={navlink.name==="home"? "/":`#${navlink.name}`}>{navlink.name}</a></li>

                ))}
            </ul>
        </nav>
        </>
    )
}
function Hamburger({ isScrolled }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`hamburger${isScrolled ? " nav-scrolled" : ""}${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="hamburger-lines" >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </div>
     {/* <Cancel isScrolled={isScrolled} /> */}
      <ul className={`hamburger-links ${isScrolled? "nav-veiw": ""}`}> 
        
        {Navi.map((navlink) => (
             <li key={navlink.id}><a href={navlink.name==="home"? "/":`#${navlink.name}`}>{navlink.name}</a></li>

        ))}
      </ul>
    </div>
);}
// function Cancel({ isScrolled }) {
//   const [open, setOpen] = useState(false);
//   // const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   return (
//     <div className={`cancel${isScrolled ? " isScrolled" : ""}${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
//       <div className="cancel-lines" >
//         {/* <span className="cancel-line1" />
//         <span className="cancel-line2" /> */}
//         <span className="cancel-line">&#88;</span>
//       </div>
//     </div>
//   );
// };

export default Nav;
