import Routes from "./src/routes";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { AuthProvider } from "./src/contexts/auth";
import checkVersion from "./utils/CheckStoreVersion";
import NetInfo from "@react-native-community/netinfo";
import useColorScheme from "./src/hooks/useColorScheme";
import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import ErrorModal from "./src/components/modais/Error-modal";
import messaging from "@react-native-firebase/messaging";
import firestore from "@react-native-firebase/firestore";

export default function App() {
  const [update, setUpdate] = useState(false);
  const [conectado, setConectado] = useState<boolean | null>();

  const verifyUpdateStore = async () => {
    try {
      const check = await checkVersion();
      if (check.result === "new") {
        setUpdate(true);
      }
    } catch (e) {}
  };

  const setupFirebase = async () => {
    await messaging().registerDeviceForRemoteMessages(); // Somente para iOS
    await messaging().setAutoInitEnabled(true); // Ativar a inicialização automática

    // Obtenha o token do dispositivo (você pode enviar este token para seu servidor)
    const token = await messaging().getToken();
    // sendToken(token);
  };

  useEffect(() => {
    setupFirebase();
    verifyUpdateStore();

    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setConectado(state.isConnected);
    });

    unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <ApplicationProvider
        {...eva}
        theme={useColorScheme() == "light" ? eva.light : eva.dark}
      >
        <StatusBar style="light" />
        <AuthProvider>
          <Routes />

          <ErrorModal />
        </AuthProvider>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
