import React from "react";
import { Text } from "@ui-kitten/components";
import useColorScheme from "../../hooks/useColorScheme";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Linking } from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const ButtonMenu: any = ({ title, link, icon, color, text }: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: useColorScheme() == "dark" ? "#1A2138" : color },
      ]}
      onPress={() => {
        if (link == "Transparência") {
          Linking.openURL(
            "https://app.amazonsistemas.com.br/transparenciaMunicipalSapucaia/index.jsp"
          );
        } else {
          // @ts-ignore
          navigation.navigate(link);
        }
      }}
    >
      {icon === "building" ? (
        <FontAwesome5 name="building" size={40} color="white" />
      ) : icon === "city" ? (
        <FontAwesome5 name="city" size={40} color="white" />
      ) : icon === "news" ? (
        <FontAwesome name="newspaper-o" size={40} color="white" />
      ) : icon === "money" ? (
        <FontAwesome5 name="money-bill" size={40} color="white" />
      ) : icon === "persons" ? (
        <Ionicons name="person" size={40} color="white" />
      ) : icon === "vote" ? (
        <MaterialIcons name="how-to-vote" size={40} color="white" />
      ) : icon === "construct" ? (
        <Ionicons name="construct" size={40} color="white" />
      ) : icon === "school" ? (
        <FontAwesome5 name="school" size={40} color="white" />
      ) : icon === "heath" ? (
        <FontAwesome5 name="hospital" size={40} color="white" />
      ) : icon === "bus" ? (
        <FontAwesome5 name="bus" size={40} color="white" />
      ) : (
        <></>
      )}
      <Text style={styles.itemTitle} category="h5">
        {title}
      </Text>
      <Text style={styles.itemText} category="s1">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    gap: 15,
    width: "100%",
    elevation: 5,
    height: 180,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 18,
    color: "white",
  },
  itemText: {
    fontSize: 14,
    color: "white",
  },
});

export default ButtonMenu;
