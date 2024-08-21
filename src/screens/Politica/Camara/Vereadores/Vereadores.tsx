import { List, Spinner, useStyleSheet } from "@ui-kitten/components";
import { ToastAndroid, View, StyleSheet } from "react-native";
import useColorScheme from "../../../../hooks/useColorScheme";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback, useEffect, memo } from "react";
import { PersonItem } from "../../../../components/items/person-item";
//   import Ads from "../../components/Ads";
import json from "../../../../../data.json";

const Vereadores = () => {
  const navigation = useNavigation();
  const [offset, setOffset] = useState(null);
  const styles = useStyleSheet(themedStyles);
  const [loading, setLoading] = useState(false);
  const [isListEnd, setisListEnd] = useState(false);
  const [data, setData] = useState<any[]>(json.vereadores);

  const getData = async () => {
    if (!loading && !isListEnd) {
      setLoading(true);
      firestore()
        .collection("vereadores")
        .orderBy("nome")
        .startAfter(offset)
        .limit(20)
        .get()
        .then((query: any) => {
          if (query.docs.length > 0) {
            let filter = query.docs.map((item: any) => item._data);
            setOffset(query.docs[query.docs.length - 1]);
            setData([...data, ...filter]);
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
        });
    }
  };

  const renderItem = useCallback(({ item, index }: any) => {
    return (
      <PersonItem
        style={styles.item}
        data={item}
        onPress={() => {
          //@ts-ignore
          navigation.navigate("Vereador", item);
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

  useEffect(() => {
    // if (data.length == 0) {
    //   setData([]);
    //   setOffset(null);
    //   setLoading(false);
    //   setisListEnd(false);
    //   getData();
    // }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: useColorScheme() == "light" ? "#FFFFFF" : "#1A2138",
      }}
    >
      <List
        style={styles.list}
        data={data}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => `${item.nome}`}
      />
      {/* <Ads /> */}
    </View>
  );
};

export default memo(Vereadores);

const themedStyles = StyleSheet.create({
  list: {
    flex: 1,
  },
  header: {
    elevation: 5,
    marginBottom: 5,
  },
  item: {
    paddingVertical: 16,
    elevation: 5,
    margin: 5,
    borderRadius: 5,
  },
  input: {
    margin: 5,
    opacity: 0.5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
