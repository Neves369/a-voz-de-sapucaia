import React, { useContext, useEffect, useState } from "react";
import { Linking, Platform, StyleSheet, View } from "react-native";
import { Button, Card, Modal, Text } from "@ui-kitten/components";
import { Entypo, Ionicons } from "@expo/vector-icons";
import AuthContext from "../../contexts/auth";

const ErrorModal: React.FC = () => {
  const { showError, messageError, setShowError, setMessageError }: any =
    useContext(AuthContext);

  const Header = (props: any): React.ReactElement => (
    <View {...props}>
      <Text status="danger" style={{ textAlign: "center" }} category="h6">
        Erro!
      </Text>
    </View>
  );

  const Footer = (props: any): React.ReactElement => (
    <View
      {...props}
      // eslint-disable-next-line react/prop-types
      style={[props.style, styles.footerContainer]}
    >
      <Button
        style={styles.footerControl}
        size="small"
        status="warning"
        onPress={() => {
          setMessageError("");
          setShowError(false);
        }}
      >
        Fechar
      </Button>
    </View>
  );

  return (
    <Modal
      visible={showError}
      backdropStyle={styles.backdrop}
      // onBackdropPress={() => setVisible(false)}
    >
      <Card style={styles.card} header={Header} footer={Footer}>
        <Text>{messageError}</Text>
      </Card>
    </Modal>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "red",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerControl: {
    width: "100%",
    marginHorizontal: 2,
  },
});
