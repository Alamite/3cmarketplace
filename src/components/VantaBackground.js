// src/components/VantaBackground.js

import React, { useEffect, useRef } from "react";

const VantaBackground = ({children}) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const VANTA = window.VANTA;
    if (VANTA) {
      const vantaEffect = VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        blurFactor: 0.90,
        zoom: 0.70,
        baseColor: 0x9acafc, // Change this to your desired base color
        highlightColor: 0xf7b9b9, // Change this to your desired highlight color
        midtoneColor: 0x9dd0f5,
        lowlightColor: 0xf53a59
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return <div ref={vantaRef} style={{ height:"100%"}}>{children}</div>;
};

export default VantaBackground;
