import { useContext } from "react";
import InteractionLogicContext from "../../contexts/InteractionLogicContext";

export default function useInteraction() {
  return useContext(InteractionLogicContext);
}
