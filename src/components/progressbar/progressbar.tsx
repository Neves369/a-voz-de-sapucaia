import React from "react";
import { Text } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ total, yes }: any) => {
  const yesPercentage = (yes / total) * 100;
  const noPercentage = 100 - yesPercentage;

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Votos:</Text>
      <View style={styles.votos}>
        <View
          style={[
            styles.bar,
            { width: `${yesPercentage}%`, backgroundColor: "green" },
          ]}
        >
          <Text style={styles.text}>SIM: {yes}</Text>
        </View>
        <View
          style={[
            styles.bar,
            { width: `${noPercentage}%`, backgroundColor: "red" },
          ]}
        >
          <Text style={styles.text}>NÃO: {total - yes}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  votos: {
    flexDirection: "row",
    height: 20,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    marginTop: 10,
  },
  bar: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProgressBar;
