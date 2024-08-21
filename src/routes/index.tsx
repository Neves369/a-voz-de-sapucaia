import React, { useContext } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import AuthContext from "../contexts/auth";

const Routes: React.FC = () => {
  const { signed }: { signed: boolean } = useContext(AuthContext) ?? {
    signed: false,
  };

  return <AppRoutes />;
};

export default Routes;
