"use client";
import { createContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Context = createContext({});

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props): React.ReactElement<Props> => {
  return (
    <Context.Provider
      value={
        {
          // @ts-ignore
        }
      }
    >
      {children}
      <ToastContainer pauseOnFocusLoss={false} />
    </Context.Provider>
  );
};

export default ContextProvider;
