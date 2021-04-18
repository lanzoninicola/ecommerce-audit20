import * as React from "react";
import { useLocalStorage } from "@hooks";
import AuthContext from "./AuthContext";
import authStatusEnums from "../enums/authStatusEnums";

const AuthProvider = ({ children }) => {
  //   const [authStatus, setAuthStatus] = React.useState("anonymous");
  const [authStatus, setAuthStatus] = useLocalStorage(
    "auditoria_authStatus",
    authStatusEnums.anonymous,
    30
  );

  function shouldAuthenticate() {
    setAuthStatus(authStatusEnums.authenticated);
  }

  function loggingOff() {
    setAuthStatus(authStatusEnums.anonymous);
  }

  const authContext = {
    shouldAuthenticate: () => shouldAuthenticate(),
    loggingOff: () => loggingOff(),
    authStatus: authStatus,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
