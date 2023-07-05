"use client";
import React from "react";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
