import React, { useCallback, useState } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import {
  Layout,
  Text,
  Button,
  Card,
  List,
  Spinner,
  ListItem,
  Divider,
} from "@ui-kitten/components";
import data from "../../../data.json";
import useColorScheme from "../../hooks/useColorScheme";
import { PersonVotationItem } from "../../components/items/person-votation-item";
import { useFocusEffect } from "@react-navigation/native";
import DividerVertical from "../../components/dividerVertical";

const Project = ({ route, navigation }: any) => {
  const [screen, setScreen] = useState(0);
  const [project, setProject] = useState(route.params);
  const [favor, setFavor] = useState([]);
  const [contra, setContra] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let aFavor: any = data.vereadores.filter((vereador) =>
        project.cadidatos_a_favor.includes(vereador.id)
      );
      let contra: any = data.vereadores.filter((vereador) =>
        project.cadidatos_contra.includes(vereador.id)
      );
      setFavor(aFavor);
      setContra(contra);
    }, [])
  );

  const renderHeader = () => {
    return (
      <>
        <Layout style={styles.header} level="1">
          <View style={styles.profileDetailsContainer}>
            <Text category="h5" style={{ textAlign: "center" }}>
              {project.titulo}
            </Text>
            <Text
              appearance="hint"
              style={{ textAlign: "center" }}
              category="s1"
            >
              {project.autoria}
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
            Votos
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
            Benefícios
          </Button>
        </Layout>
      </>
    );
  };

  const renderScreen0 = () => {
    return (
      <ScrollView>
        <Card style={{ margin: 7, elevation: 1 }}>
          <Text category="s1" style={{ textAlign: "justify", fontSize: 16 }}>
            {project.descricao}
          </Text>

          <Text style={{ marginTop: 20 }}>
            Data da Votação:{" "}
            <Text style={{ fontWeight: "bold" }}>{project.data_votacao}</Text>
          </Text>
          <Text>
            Data de Início:{" "}
            <Text style={{ fontWeight: "bold" }}>{project.data_inicio}</Text>
          </Text>
          <Text>
            Data de Encerramento:{" "}
            <Text style={{ fontWeight: "bold" }}>{project.data_fim}</Text>
          </Text>
          <Text>
            Status: <Text style={{ fontWeight: "bold" }}>{project.status}</Text>
          </Text>
        </Card>
      </ScrollView>
    );
  };

  const renderItem = useCallback((item: any, voto: boolean) => {
    console.log("teste: ", voto);
    return (
      <PersonVotationItem
        style={styles.item}
        data={item.item}
        // @ts-ignore
        voto={voto}
        onPress={() => {
          //@ts-ignore
          // navigation.navigate("Arquivos", item);
        }}
      />
    );
  }, []);

  const renderBeneficios = useCallback(({ item, index }: any) => {
    return (
      <ListItem
        title={(evaProps) => (
          <Text {...evaProps} style={{ color: "#23cf23" }}>
            {item}
          </Text>
        )}
      />
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: useColorScheme() == "light" ? "#FFFFFF" : "#1A2138",
      }}
    >
      {renderHeader()}

      {screen == 0 ? (
        renderScreen0()
      ) : screen == 1 ? (
        <ScrollView>
          {favor.length > 0 && (
            <>
              <Card style={{ marginTop: 2 }}>
                <Text category="s1" style={{ color: "#23cf23" }}>
                  A Favor
                </Text>
              </Card>

              <FlatList
                style={styles.list}
                data={favor}
                renderItem={(item) => renderItem(item, true)}
              />
            </>
          )}
          {contra.length > 0 && (
            <>
              <Card>
                <Text category="s1" style={{ color: "red" }}>
                  Contra
                </Text>
              </Card>
              <FlatList
                style={styles.list}
                data={contra}
                renderItem={(item) => renderItem(item, false)}
              />
            </>
          )}
        </ScrollView>
      ) : screen == 2 ? (
        <Card style={{ marginTop: 2 }}>
          <List
            data={project.beneficios}
            renderItem={renderBeneficios}
            ItemSeparatorComponent={Divider}
          />
        </Card>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Project;

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
    marginTop: 50,
    marginBottom: 8,
  },
  profileAvatar: {
    marginHorizontal: 8,
    width: 40,
    height: 40,

    borderRadius: 20,
  },
  profileDetailsContainer: {
    flex: 1,
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
});
