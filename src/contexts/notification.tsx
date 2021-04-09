import { createContext, useReducer } from "react";

export type State = {
  message: string;
};

type Action =
  | {
      type: "show";
      message: string;
    }
  | { type: "clear" };

export type Dispatch = (action: Action) => void;

export const StateContext = createContext<State>({} as State);
export const DispatchContext = createContext<Dispatch>({} as Dispatch);

type Props = {
  children: React.ReactNode;
};

export const NotificationProvider: React.VFC<Props> = (props) => {
  const initialState: State = {
    message: "",
  };

  const [notification, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "show":
          return { message: action.message };
        case "clear":
          return { message: initialState.message };
        default:
          return state;
      }
    },
    initialState
  );

  return (
    <StateContext.Provider value={notification}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
