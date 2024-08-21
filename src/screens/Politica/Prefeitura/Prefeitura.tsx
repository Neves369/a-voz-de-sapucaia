import React, { useContext } from "react";
import logo from "../../assets/brasao.png";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonMenu from "../../../components/button-menu/button-menu.component";
import {
  Layout,
  StyleService,
  useStyleSheet,
  Text,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "../../../components/keyboard/keyboard.component";
import useColorScheme from "../../../hooks/useColorScheme";
import AuthContext from "../../../contexts/auth";

export default ({ navigate }: any): React.ReactElement => {
  const navigation = useNavigation();
  const styles = useStyleSheet(themedStyles);
  const { signed }: { signed: boolean } = useContext(AuthContext) ?? {
    signed: false,
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <Layout style={styles.formContainer} level="1">
          <ButtonMenu
            title={"PROJETOS"}
            color={"#22577a"}
            icon={"construct"}
            link={"Projetos em Processo (Executivo)"}
            text={"Informações sobre Projetos em Fase de Execução"}
          />
          <ButtonMenu
            title={"GESTÃO"}
            color={"#38a3a5"}
            icon={"persons"}
            link={"Gestão"}
            text={"Informações sobre a Gestão Atual"}
          />
          <ButtonMenu
            title={"TRANSPARÊNCIA"}
            color={"#57cc99"}
            icon={"money"}
            link={"Transparência"}
            text={"Portal de Transparência da Prefeitura"}
          />
        </Layout>
      </KeyboardAvoidingView>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: useColorScheme() == "dark" ? "#1A2138" : "#22577a",
          },
        ]}
      />
    </>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minHeight: 200,
    paddingTop: 50,
  },
  title: {
    color: "white",
    textAlign: "center",
    width: 200,
  },
  logo: {
    marginLeft: -60,
    width: 80,
    height: 80,
  },
  formContainer: {
    gap: 16,
    flex: 1,
    padding: 16,
    paddingBottom: 50,
  },
  footer: {
    bottom: 0,
    height: 30,
    width: "100%",
    position: "absolute",
  },
});
