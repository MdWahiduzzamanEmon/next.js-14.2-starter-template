import { Context } from "@/Context/ContextProvider";
import { useContext } from "react";

const useAuth = () => {
  return useContext(Context);
};

export default useAuth;
