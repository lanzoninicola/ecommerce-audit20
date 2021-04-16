import * as React from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = React.useState("anonymous");

  function shouldAuthenticate() {
    setAuthStatus("authenticated");
  }

  function loggingOff() {
    setAuthStatus("anonymous");
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
