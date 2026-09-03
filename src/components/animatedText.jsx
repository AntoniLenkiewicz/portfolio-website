import { useState , useEffect } from 'react'
import { TypeAnimation } from "react-type-animation";


function AnimatedText() {
  return (
    <TypeAnimation
      sequence={[
        "I create Full Stack Solutions.",
        2000,
        "",
        700,
        "I build modern websites and apps.",
        2000,
        "",
        700,
        "Obsess over details.",
        2000,
        "",
        700,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className='text-2xl'
    />
  );
}

export default AnimatedText;

