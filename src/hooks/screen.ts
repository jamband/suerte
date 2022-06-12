import { useEffect, useState } from "react";
import { hasTouchScreen } from "../utils/screen";

export const useHasTouchScreen = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(hasTouchScreen());
  }, []);

  return {
    hasTouchScreen: state,
  };
};
