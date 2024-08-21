import React, { useState } from "react";
import { Text } from "@ui-kitten/components";
import useColorScheme from "../../hooks/useColorScheme";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Collapsible from "react-native-collapsible";

const SessaoItem: any = ({ data }: any) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: useColorScheme() == "dark" ? "#10162c" : "#ebebeb",
          },
        ]}
        key={data.titulo}
        onPress={() => setCollapsed(!collapsed)}
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
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View style={styles.event}>
          <Text style={styles.texto}>{data.sumario}</Text>
          <View style={styles.acoes}>
            {data.informacoes.ações.map((e: any, index: any) => {
              return (
                <View key={`${e.vereador}-${index}`} style={styles.acao}>
                  <Text style={styles.titulo}>{e.vereador}:</Text>
                  <Text style={styles.texto}>{e.ação}</Text>
                </View>
              );
            })}
          </View>
          {data.informacoes.vereadores_faltaram?.length > 0 && (
            <View style={styles.acoes}>
              {data.informacoes.vereadores_faltaram?.map((e: any) => {
                return (
                  <View key={e} style={styles.falta}>
                    <Text style={styles.titulo}>{e}:</Text>
                    <Text style={styles.texto}>Faltou a sessão</Text>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </Collapsible>
    </>
  );
};

export default SessaoItem;

const styles = StyleSheet.create({
  button: {
    gap: 20,
    alignSelf: "center",
    width: "95%",
    elevation: 5,
    minHeight: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 10,
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
  event: {
    gap: 15,
    margin: 15,
    width: "90%",
    alignSelf: "center",
    // backgroundColor: "red",
  },
  titulo: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
  },
  texto: {
    textAlign: "justify",
  },
  acoes: {
    gap: 5,
    width: "100%",
    minHeight: 100,
    display: "flex",
  },
  acao: {
    padding: 5,
    width: "100%",
    minHeight: 60,
    borderWidth: 2,
    display: "flex",
    borderRadius: 10,
    borderColor: "green",
  },
  falta: {
    padding: 5,
    width: "100%",
    minHeight: 60,
    borderWidth: 2,
    display: "flex",
    borderRadius: 10,
    borderColor: "red",
  },
});
