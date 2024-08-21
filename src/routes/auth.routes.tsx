import React from "react";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/Signup";

const AuthRoutes: React.FC = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={Login} />

      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
