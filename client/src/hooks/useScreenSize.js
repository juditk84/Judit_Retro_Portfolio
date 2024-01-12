import { useContext } from "react";
import ScreenSizeContext from "../../contexts/ScreenSizeContext";

export default function useScreenSize() {
  return useContext(ScreenSizeContext);
}
