import { Image } from "expo-image";
import React, { useCallback } from "react";
import { ListItem, Text } from "@ui-kitten/components";
import { StyleSheet, View, ViewStyle } from "react-native";
import avatar from "../../../assets/avatar.png";

export const PersonVotationItem = (props: any) => {
  const { data, onPress, voto, ...listItemProps } = props;

  const renderMessageDate = (style: ViewStyle): React.ReactElement => (
    <View style={styles.dateContainer}>
      <Text
        style={[styles.dateText, { color: voto ? "#23cf23" : "red" }]}
        appearance="hint"
        category="c1"
      >
        {data.partido}
      </Text>
    </View>
  );

  const renderProfileAvatar = useCallback(
    (): React.ReactElement => (
      <Image
        cachePolicy={"memory-disk"}
        style={[styles.avatar, { borderColor: voto ? "#23cf23" : "red" }]}
        contentFit="fill"
        source={data.foto !== "" ? { uri: data.foto } : avatar}
      />
    ),
    []
  );

  return (
    <ListItem
      {...listItemProps}
      onPress={onPress}
      title={(evaProps) => (
        <Text {...evaProps} style={{ color: voto ? "#23cf23" : "red" }}>
          {data.nome}
        </Text>
      )}
      description={data.titulo}
      accessoryLeft={renderProfileAvatar}
      accessoryRight={renderMessageDate}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: "#969696fa",
    borderBottomColor: "#fdf9f92f",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    textAlign: "right",
    minWidth: 64,
  },
});
