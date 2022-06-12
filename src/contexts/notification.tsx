import { createContext, useReducer } from "react";

export type State = {
  message: string;
};

type Action =
  | {
      type: "show";
      payload: string;
    }
  | { type: "clear" };

export type Dispatch = (action: Action) => void;

export const StateContext = createContext<State>({} as State);
export const DispatchContext = createContext<Dispatch>({} as Dispatch);

type Props = {
  children: React.ReactNode;
};

export const NotificationProvider: React.FC<Props> = (props) => {
  const initialState: State = {
    message: "",
  };

  const [state, dispatch] = useReducer((state: State, action: Action) => {
    switch (action.type) {
      case "show":
        return { message: action.payload };
      case "clear":
        return initialState;
      default:
        return state;
    }
  }, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
