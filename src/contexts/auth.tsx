import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import DeviceInfo from "react-native-device-info";
import IUsuario from "../models/IUsuario";
import * as Network from "expo-network";

export interface AuthContextData {
  signed: boolean;
  // splash: boolean;
  // logando: boolean;
  showError: boolean;
  messageError: string;
  user: IUsuario | undefined;
  signIn(usuario: IUsuario): Promise<void>;
  signOut(): void;
  signOutClearUser(): void;
  signOutClearAll(): void;
  // changeLogando(logou: boolean): void;
  // renderSplash(renderizou: boolean): void;
  setMessageError(message: string): void;
  setShowError(showError: boolean): void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: any = ({ children }: any) => {
  const [IP, setIP] = useState("");
  const [splash, setSplash] = useState(true);
  const [loading, setLoading] = useState(true);
  const [logando, setlogando] = useState(false);
  const [showError, setShowError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const [signedUser, setSignedUser] = useState(false);
  const [user, setUser] = useState<IUsuario | undefined>(undefined);

  useEffect(() => {
    async function getIP() {
      const ip = await Network.getIpAddressAsync();
      // const teste = await DeviceInfo.getUniqueIdSync();
      // console.log("device: ", teste);
      setIP(ip);
    }
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@Usuario:user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
        setSignedUser(true);
      }
    }
    getIP();
    loadStorageData();
  }, []);

  async function signIn(usuario: IUsuario) {
    usuario.status = true;
    usuario.ip = IP;

    console.log("usuario: ", usuario);
    setUser(usuario);
    setSignedUser(true);
    await AsyncStorage.setItem("@Usuario:user", JSON.stringify(usuario));

    return Promise.resolve();
  }

  //Mantém o usuário setado e encerra a sessão.
  function signOut() {
    setSignedUser(false);
  }

  //Remove o usuário setado e encerra a sessão.
  async function signOutClearAll() {
    await AsyncStorage.clear().then(() => {
      setSignedUser(false);
    });
  }

  //Remove o usuário setado e encerra a sessão.
  async function signOutClearUser() {
    const keys = ["@Usuario:user"];
    await AsyncStorage.multiRemove(keys).then(() => {
      setSignedUser(false);
    });
  }

  // //Muda o estado da splash para executar só uma vez
  // async function renderSplash(renderizou: boolean) {
  //   setSplash(renderizou);
  // }

  // async function changeLogando(logou: boolean) {
  //   setlogando(logou);
  // }

  return (
    <AuthContext.Provider
      value={{
        signed: signedUser,
        user,
        // logando,
        showError,
        messageError,
        // splash,
        signIn,
        signOut,
        signOutClearAll,
        signOutClearUser,
        // renderSplash,
        // changeLogando,
        setShowError,
        setMessageError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
