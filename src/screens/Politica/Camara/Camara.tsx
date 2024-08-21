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

export default (): React.ReactElement => {
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
            link={"Projetos em Votação (Legislativo)"}
            text={"Informações sobre Projetos e Propostas"}
          />
          <ButtonMenu
            title={"SESSÕES"}
            color={"#457b9d"}
            icon={"vote"}
            link={"Sessões"}
            text={"Informações sobre as sessões da câmara"}
          />
          <ButtonMenu
            title={"VEREADORES"}
            color={"#38a3a5"}
            icon={"persons"}
            link={"Vereadores"}
            text={"Informações sobre os Vereadores da Cidade"}
          />
          {/* <ButtonMenu
            title={"TRANSPARÊNCIA"}
            color={"#57cc99"}
            icon={"money"}
            link={"Transparência"}
            text={"Informações gerais sobre a Gestão"}
          /> */}
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
