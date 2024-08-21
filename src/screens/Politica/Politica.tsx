import { View } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import { Layout, StyleService, useStyleSheet } from "@ui-kitten/components";
import ButtonMenu from "../../components/button-menu/button-menu.component";
import { KeyboardAvoidingView } from "../../components/keyboard/keyboard.component";

export default (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <Layout style={styles.formContainer} level="1">
          <ButtonMenu
            title={"PREFEITURA MUNICIPAL"}
            color={"#22577a"}
            icon={"building"}
            link={"Prefeitura"}
            text={"Informações gerais sobre a Prefeitura"}
          />
          <ButtonMenu
            title={"CÂMARA DE VEREADORES"}
            color={"#457b9d"}
            icon={"city"}
            link={"Câmara"}
            text={"Informações gerais sobre a Câmara de Vereadores"}
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
