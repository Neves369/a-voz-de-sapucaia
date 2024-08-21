import React from "react";
import { Text } from "@ui-kitten/components";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import useColorScheme from "../../hooks/useColorScheme";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../progressbar/progressbar";

const ProjetoItem: any = ({ data, onPress }: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: useColorScheme() == "dark" ? "#10162c" : "#ebebeb" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          { color: useColorScheme() === "dark" ? "white" : "#22577a" },
          styles.itemTitle,
        ]}
        category="h5"
      >
        {data.titulo}
      </Text>
      <Text style={styles.itemText} category="s1" numberOfLines={8}>
        {data.descricao}
      </Text>
      {data.data_votacao !== "" ? (
        <Text style={styles.itemData} category="h6">
          Data da Votação: {data.data_votacao}
        </Text>
      ) : (
        <></>
      )}
      {data.data_inicio !== "" ? (
        <Text style={styles.itemData} category="h6">
          Data de Início: {data.data_inicio}
        </Text>
      ) : (
        <></>
      )}
      {data.data_fim !== "" ? (
        <Text style={styles.itemData} category="h6">
          Data de Entrega: {data.data_fim}
        </Text>
      ) : (
        <></>
      )}
      {data.status !== "" ? (
        <Text style={styles.itemData} category="h6">
          Status: {data.status}
        </Text>
      ) : (
        <></>
      )}
      <ProgressBar total={data.qtd_votos} yes={data.qtd_votos_sim} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    gap: 20,
    alignSelf: "center",
    width: "95%",
    elevation: 5,
    minHeight: 200,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    padding: 15,
  },
  itemTitle: {
    textAlign: "left",
    width: "100%",
    fontSize: 18,
  },
  itemText: {
    fontSize: 14,
    // color: "white",
    textAlign: "justify",
  },
  itemData: {
    width: "100%",
    fontSize: 14,
    textAlign: "left",
  },
});

export default ProjetoItem;
