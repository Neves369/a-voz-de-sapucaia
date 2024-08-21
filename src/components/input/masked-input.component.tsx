import { Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import useColorScheme from "../../hooks/useColorScheme";

const MaskedInput: any = ({
  placeholder,
  keyboardType,
  mask,
  onBlur,
  onChange,
  value,
  label,
}: any) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text
        style={[styles.label, { color: "rgb(143, 155, 179)" }]}
        category="h1"
      >
        {label}
      </Text>
      <View
        style={[
          styles.inputView,
          {
            borderColor:
              useColorScheme() == "light"
                ? isFocused
                  ? "rgb(51, 102, 255)"
                  : "rgb(228, 233, 242)"
                : isFocused
                ? "rgb(51, 102, 255)"
                : "rgb(16, 20, 38)",
          },
        ]}
      >
        <TextInputMask
          style={{
            width: "100%",
            padding: 10,
            backgroundColor:
              useColorScheme() == "light"
                ? isFocused
                  ? "white"
                  : "rgb(247, 249, 252)"
                : isFocused
                ? "#222B45"
                : "rgb(26, 33, 56)",
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          type={"custom"}
          placeholderTextColor="rgb(143, 155, 179)"
          options={{
            mask: mask,
          }}
          autoCapitalize="none"
          onBlur={(ev) => {
            onBlur(ev), setIsFocused(false);
          }}
          onChangeText={(value: any) => onChange(value)}
          value={value}
        />
      </View>
    </View>
  );
};

export default MaskedInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  label: {
    fontSize: 12,
    marginBottom: 3,
  },
  inputView: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
