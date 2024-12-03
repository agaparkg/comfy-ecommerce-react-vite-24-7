import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { setStorageItem } from "../utils/utils";

const GlobalReduxProvider = ({ children }) => {
  useEffect(() => {
    setStorageItem("cartProducts", cartProducts);
  }, [cartProducts]);

  return <Provider store={store}>{children}</Provider>;
};

export default GlobalReduxProvider;
