import { useState, useContext, useEffect, useRef} from "react";

import Lottie from "react-lottie-segments";

import MenuIcon from "../../assets/lottie/islet-menu-icon.json";

import './menu-icon.styles.scss'


import { NavContext } from "../../assets/contexts/navbar-context";

const MenuButton = () => {

 const {isMenuOpen, setMenuOpen} = useContext(NavContext);


//whenever is MenuOpen is false, run setSequence

//Whenever isMenuOpen is true, set the sequence to 33.5 -> 77 run setSequence


  const [sequence, setSequence] = useState({
    segments: [0, 1],
    forceFlag: true,
  });

  const options = {
    loop: false,
    autoplay: false,
    animationData: MenuIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animate = () => {
    let start = sequence.segments[0];
    let stop = sequence.segments[1];

    if (!isMenuOpen) {
        start = 0;
        stop = 33.5;
      } else {
        start = 33.5;
        stop = 77;
      }

    setSequence({ 
        segments: [start, stop],
        forceFlag: true
      })
  }


  let initialRender = useRef(true);

  useEffect(() => {

    if (initialRender.current) {
      initialRender.current= false
    }

    else {animate()}
   
  
  }, [isMenuOpen]);



  return (

    <div className="menu-icon-wrapper" onClick={()=>setMenuOpen(!isMenuOpen)}>

    <Lottie
      options={options}
      speed={1.5}
      height={50}
      width={50}
      isClickToPauseDisabled={true}
      playSegments={sequence}
    />
  </div>
  
  )
};

export default MenuButton;
