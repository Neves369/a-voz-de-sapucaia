import { Image } from "expo-image";
import React, { useCallback } from "react";
import { ListItem, Text } from "@ui-kitten/components";
import { StyleSheet, View, ViewStyle } from "react-native";
import avatar from "../../../assets/avatar.png";

export const PersonItem = (props: any) => {
  const { data, onPress, ...listItemProps } = props;

  const renderMessageDate = (style: ViewStyle): React.ReactElement => (
    <View style={styles.dateContainer}>
      <Text style={styles.dateText} appearance="hint" category="c1">
        {data.partido}
      </Text>
    </View>
  );

  const renderProfileAvatar = useCallback(
    (): React.ReactElement => (
      <Image
        cachePolicy={"memory-disk"}
        style={styles.avatar}
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
      title={data.nome}
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
    borderWidth: 1,
    backgroundColor: "#969696fa",
    borderColor: "#ddd",
    borderBottomWidth: 1,
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
