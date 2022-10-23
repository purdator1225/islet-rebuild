import { useState } from "react";

import Lottie from "react-lottie-segments";

import MenuIcon from "../../assets/lottie/islet-menu-icon.json";

import './menu-icon.styles.scss'


const MenuButton = () => {

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

    if (stop === 1 || stop === 77) {
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
  return (

  <div className="menu-icon-wrapper" onClick={()=> animate()}>
    <Lottie
      options={options}
      speed={1.5}
      height={50}
      width={50}
      isClickToPauseDisabled={true}
      playSegments={sequence}
    />
  </div>)
};

export default MenuButton;
