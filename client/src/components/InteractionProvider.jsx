import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InteractionLogicContext from "../../contexts/InteractionLogicContext";
export default function InteractionProvider({ children }) {

  //state:
  const [buttonSelected, setButtonSelected] = useState({name: "(press an action button)"});
  const [activeSceneObject, setActiveSceneObject] = useState("")
  const [narratorMessage, setNarratorMessage] = useState("")
  const [lightsOn, setLightsOn] = useState(true)

  //what we send through context:
  const logicObject = {
    buttonSelected,
    setButtonSelected,
    activeSceneObject,
    setActiveSceneObject,
    narratorMessage,
    setNarratorMessage,
    lightsOn,
    setLightsOn
  };

  return (
    <InteractionLogicContext.Provider value={logicObject}>{children}</InteractionLogicContext.Provider>
  );
}
