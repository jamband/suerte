import { hasTouchScreen } from "@/utils/screen";
import { useEffect, useState } from "react";

export const useHasTouchScreen = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(hasTouchScreen());
  }, []);

  return {
    hasTouchScreen: state,
  };
};
