import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import useColorScheme from "../../../../hooks/useColorScheme";
import { ToastAndroid, View, StyleSheet } from "react-native";
import { List, Spinner, useStyleSheet } from "@ui-kitten/components";
import React, { useState, useCallback, useEffect, memo } from "react";
import SessaoItem from "../../../../components/items/sessao-item";
//   import Ads from "../../components/Ads";
import json from "../../../../../data.json";

const Sessao = () => {
  const [offset, setOffset] = useState(null);
  const styles = useStyleSheet(themedStyles);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<any[]>([]);
  const [isListEnd, setisListEnd] = useState(false);
  const [documentCount, setDocumentCount] = useState(0);
  const [data, setData] = useState<any[]>(json.sessoes);

  const getData = async () => {
    if (!loading && !isListEnd) {
      setLoading(true);
      firestore()
        .collection("sessoes")
        .orderBy("data_cadastro")
        .startAfter(offset)
        .limit(20)
        .get()
        .then((query: any) => {
          if (query.docs.length > 0) {
            let filter = query.docs.map((item: any) => item._data);
            setOffset(query.docs[query.docs.length - 1]);
            setData([...data, ...filter]);
            setFilter([...data, ...filter]);
            setLoading(false);
          } else {
            setisListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          ToastAndroid.show(
            "Não foi possível buscar dados!",
            ToastAndroid.SHORT
          );
        })
        .finally(() => {});
    }
  };

  const getDocumentCount = async () => {
    try {
      const collectionReference = firestore().collection("sessoes");

      const querySnapshot = await collectionReference.get();
      const count = querySnapshot.size;

      setDocumentCount(count);
    } catch (error) {
      console.error("Erro ao obter a contagem de documentos:", error);
    }
  };

  useEffect(() => {
    // if (data.length == 0) {
    //   setData([]);
    //   setOffset(null);
    //   setLoading(false);
    //   setisListEnd(false);
    //   Promise.all([getData(), getDocumentCount()]);
    // }
  }, []);

  // useEffect(() => {
  //   if (searchTerm.length == 0) {
  //     setFilter(data);
  //   } else {
  //     const resposta: any = [];
  //     data.map((pregador) => {
  //       if (
  //         pregador?.nome
  //           ?.toLowerCase()
  //           .normalize()
  //           .indexOf(searchTerm.toLowerCase().normalize(), 0) >= 0
  //       ) {
  //         resposta.push(pregador);
  //       }
  //     });
  //     setFilter(resposta);
  //   }
  // }, [searchTerm]);

  const sortData = (data: any) => {
    let sorted = data.sort((a, b) => {
      return a.data_cadastro - b.data_cadastro;
    });

    return sorted;
  };

  const renderItem = useCallback(({ item, index }: any) => {
    return (
      <SessaoItem
        key={index}
        data={item}
        onPress={() => {
          //@ts-ignore
          // navigation.navigate("Projeto", item);
        }}
      />
    );
  }, []);

  const renderFooter = (): React.ReactElement => (
    <View
      style={{
        width: "100%",
        height: 25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? <Spinner status="warning" /> : <></>}
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: useColorScheme() == "light" ? "#FFFFFF" : "#1A2138",
      }}
    >
      <List
        style={styles.list}
        data={sortData(data)}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => `${item.titulo}`}
      />
      {/* <Ads /> */}
    </View>
  );
};

export default memo(Sessao);

const themedStyles = StyleSheet.create({
  list: {
    flex: 1,
  },
  header: {
    elevation: 5,
    marginBottom: 5,
  },
  input: {
    margin: 5,
    opacity: 0.5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
