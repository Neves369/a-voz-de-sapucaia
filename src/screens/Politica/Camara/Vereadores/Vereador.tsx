import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  AppState,
  Linking,
  ActivityIndicator,
} from "react-native";
import {
  Layout,
  Text,
  Button,
  List,
  Card,
  Spinner,
} from "@ui-kitten/components";
import { Image } from "expo-image";
import DividerVertical from "../../../../components/dividerVertical";
import useColorScheme from "../../../../hooks/useColorScheme";

const Vereador = ({ route, navigation }: any) => {
  const [screen, setScreen] = useState(0);
  const [projects, setProjects] = useState([]);
  const [vereador, setVereador] = useState(route.params);

  useEffect(() => {}, []);

  const renderHeader = () => {
    return (
      <>
        <Layout style={styles.header} level="1">
          <Image
            cachePolicy={"disk"}
            style={styles.profileAvatar}
            contentFit="fill"
            source={{ uri: vereador.foto }}
          />
          <View style={styles.profileDetailsContainer}>
            <Text category="h4">{vereador.nome}</Text>
            <Text appearance="hint" category="s1">
              {vereador.titulo}
            </Text>
            <View style={styles.profileSocialsContainer}></View>
          </View>
        </Layout>
        <Layout
          level="1"
          style={{ height: 50, flexDirection: "row", elevation: 5 }}
        >
          <Button
            onPress={() => {
              setScreen(0);
            }}
            style={{ flex: 1 }}
            appearance={screen == 0 ? "outline" : "ghost"}
            status={screen == 0 ? "info" : "basic"}
          >
            Resumo
          </Button>
          <DividerVertical />
          <Button
            onPress={() => {
              setScreen(1);
            }}
            style={{ flex: 1 }}
            appearance={screen == 1 ? "outline" : "ghost"}
            status={screen == 1 ? "info" : "basic"}
          >
            Projetos
          </Button>
          <DividerVertical />
          <Button
            onPress={() => {
              setScreen(2);
            }}
            style={{ flex: 1 }}
            appearance={screen == 2 ? "outline" : "ghost"}
            status={screen == 2 ? "info" : "basic"}
          >
            Processos
          </Button>
        </Layout>
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: useColorScheme() == "light" ? "#FFFFFF" : "#1A2138",
      }}
    >
      {renderHeader()}

      {screen == 0 ? (
        <ScrollView>
          <Card style={{ margin: 7, elevation: 1 }}>
            <Text style={{ textAlign: "justify" }}>{vereador.resumo}</Text>
          </Card>
          <Card style={{ margin: 7, elevation: 1 }}>
            <View style={styles.presenca_falta}>
              <Text style={{ textAlign: "justify", color: "green" }}>
                Presença em Sessões (2024):
              </Text>
              <Text style={{ textAlign: "justify", color: "green" }}>
                {vereador.presencas}
              </Text>
            </View>
            <View style={styles.presenca_falta}>
              <Text style={{ textAlign: "justify", color: "red" }}>
                Faltas em Sessões (2024):
              </Text>
              <Text style={{ textAlign: "justify", color: "red" }}>
                {vereador.faltas}
              </Text>
            </View>
          </Card>
        </ScrollView>
      ) : screen == 1 ? (
        <></>
      ) : screen == 2 ? (
        <></>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Vereador;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    margin: 7,
  },
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  header: {
    backgroundColor: "rgba(0,0,0,0)",
    flexDirection: "row",
    marginHorizontal: -16,
    paddingHorizontal: 16,
    paddingTop: 40,
    marginBottom: 8,
  },
  profileAvatar: {
    marginHorizontal: 8,
    width: 60,
    height: 60,

    borderRadius: 30,
  },
  profileDetailsContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 8,
  },
  profileSocialsContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  profileSocialContainer: {
    flex: 1,
  },
  followButton: {
    marginVertical: 16,
  },
  post: {
    margin: 8,
  },
  postHeader: {
    height: 220,
  },
  postBody: {
    flexDirection: "row",
    marginHorizontal: -8,
  },
  postAuthorContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  iconButton: {
    flexDirection: "row-reverse",
    paddingHorizontal: 0,
  },
  item: {
    paddingVertical: 16,
    elevation: 1,
    margin: 5,
    borderRadius: 5,
  },
  presenca_falta: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
