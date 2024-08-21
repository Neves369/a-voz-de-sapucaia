import React, { useContext } from "react";
import logo from "../../assets/brasao.png";
import { Image, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import ButtonMenu from "../components/button-menu/button-menu.component";
import {
  Layout,
  StyleService,
  useStyleSheet,
  Text,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "../components/keyboard/keyboard.component";
import useColorScheme from "../hooks/useColorScheme";
import AuthContext from "../contexts/auth";

export default (): React.ReactElement => {
  const navigation = useNavigation();
  const styles = useStyleSheet(themedStyles);
  const { signed }: { signed: boolean } = useContext(AuthContext) ?? {
    signed: false,
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View
          style={[
            styles.headerContainer,
            {
              backgroundColor:
                useColorScheme() == "dark" ? "#1A2138" : "#22577a",
            },
          ]}
        >
          <Image source={logo} alt="logo" style={styles.logo} />

          <Text category="s2" style={styles.title}>
            INFORMAÇÃO PARA TODOS {"\n"}
            <Text category="h6" style={styles.title}>
              A VOZ DE SAPUCAIA
            </Text>
          </Text>

          {signed ? (
            <Ionicons
              style={{ position: "absolute", right: 25, top: 105 }}
              name="settings-sharp"
              size={35}
              color="white"
              onPress={() => {
                // @ts-ignore
                navigation.navigate("Configurações");
              }}
            />
          ) : (
            <Entypo
              style={{ position: "absolute", right: 25, top: 105 }}
              name="login"
              size={35}
              color="white"
              onPress={() => {
                // @ts-ignore
                navigation.navigate("Login");
              }}
            />
          )}
        </View>
        <Layout style={styles.formContainer} level="1">
          <ButtonMenu
            title={"POLÍTICA PARA TODOS"}
            color={"#22577a"}
            icon={"building"}
            link={"Política"}
            text={"Informações gerais sobre a Política"}
          />

          <ButtonMenu
            title={"SAÚDE PARA TODOS"}
            color={"#457b9d"}
            icon={"heath"}
            link={""}
            text={"Informações gerais sobre a Saúde"}
          />

          <ButtonMenu
            title={"EDUCAÇÃO PARA TODOS"}
            color={"#457b9d"}
            icon={"school"}
            link={""}
            text={"Informações gerais sobre a Educação"}
          />

          <ButtonMenu
            title={"TRANSPORTE PARA TODOS"}
            color={"#457b9d"}
            icon={"bus"}
            link={""}
            text={"Informações gerais sobre o Transporte"}
          />

          <ButtonMenu
            title={"PUBLICAÇÕES"}
            color={"#38a3a5"}
            icon={"news"}
            link={"Publicações"}
            text={"Informações gerais sobre a Cidade"}
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
