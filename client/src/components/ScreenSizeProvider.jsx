import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScreenSizeContext from "../../contexts/ScreenSizeContext";
import { useMediaQuery } from "react-responsive";

export default function ScreenSizeProvider({ children }) {

  //state:
  const isStandardSizeScreen = useMediaQuery({ query: '(min-width: 1024px)' })
  
  //what we send through context:
  const screenObject = {
    isStandardSizeScreen,
  };

  return (
    <ScreenSizeContext.Provider value={screenObject}>{children}</ScreenSizeContext.Provider>
  );
}
