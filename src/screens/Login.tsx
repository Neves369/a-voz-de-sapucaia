import { Feather } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import React, { ReactElement, useContext, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { KeyboardAvoidingView } from "../components/keyboard/keyboard.component";
import {
  PersonIcon,
  GoogleIcon,
  TwitterIcon,
  FacebookIcon,
} from "../components/icons/icons";
import AuthContext from "../contexts/auth";
import { Button, Input, Text } from "@ui-kitten/components";
import { ImageOverlay } from "../components/image-overlay/image-overlay.component";

const Login = ({ navigation }: any): React.ReactElement => {
  const [loading, setLoading] = useState(false);
  const { signIn, showMessage }: any = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data: any) => {
    setLoading(true);
    data.cpf = "00000000000";
    data.dataNascimento = "0000-00-00";
    data.nome = "Usuário Anônimo";
    setTimeout(() => {
      signIn(data);
      navigation.navigate("Dashboard");
      setLoading(false);
    }, 2000);

    // await userService
    //   .login(data)
    //   .then((resp: any) => {
    //     if (resp.status == 200) {
    //       signIn(resp.data);
    //     } else {
    //       showMessage(resp.Erro);
    //     }
    //   })
    //   .catch((resp: any) => {
    //     showMessage(resp);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate("Signup");
  };

  const onForgotPasswordButtonPress = (): void => {
    navigation && navigation.navigate("ForgotPassword");
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPasswordIcon = (): ReactElement => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Feather
        name={passwordVisible ? "eye-off" : "eye"}
        size={20}
        color="white"
      />
    </TouchableWithoutFeedback>
  );

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require("../../assets/gradient2.png")}
      >
        <View style={styles.headerContainer}>
          <Text category="h1" status="control">
            Bem-vindo
          </Text>
          <Text style={styles.signInLabel} category="s1" status="control">
            Informação para todos Sapucaia
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                status="control"
                placeholder="Email"
                accessoryRight={PersonIcon}
                keyboardType="email-address"
                textContentType="emailAddress"
                maxLength={60}
                onBlur={onBlur}
                onChangeText={(value: any) => onChange(value)}
                value={value}
              />
            )}
          />
          {errors.email && (
            <Text style={{ color: "red" }}>E-mail é obrigatório.</Text>
          )}
          <Controller
            control={control}
            name="senha"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.passwordInput}
                status="control"
                placeholder="Senha"
                accessoryRight={renderPasswordIcon}
                secureTextEntry={!passwordVisible}
                maxLength={12}
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={(value: any) => onChange(value)}
                value={value}
              />
            )}
          />
          {errors.senha && (
            <Text style={{ color: "red" }}>Senha é obrigatória.</Text>
          )}
          <View style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              appearance="ghost"
              status="control"
              onPress={onForgotPasswordButtonPress}
            >
              Esqueceu a Senha?
            </Button>
          </View>
        </View>
        <Button
          status="info"
          style={styles.signInButton}
          size="giant"
          onPress={handleSubmit(!loading ? handleLogin : () => {})}
        >
          {!loading ? "ENTRAR" : <ActivityIndicator size={30} color="white" />}
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text style={styles.socialAuthHintText} status="control">
            Entrar com uma rede social
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button
              appearance="ghost"
              status="control"
              size="giant"
              accessoryLeft={GoogleIcon}
            />
            <Button
              appearance="ghost"
              status="control"
              size="giant"
              accessoryLeft={FacebookIcon}
            />
            <Button
              appearance="ghost"
              status="control"
              size="giant"
              accessoryLeft={TwitterIcon}
            />
          </View>
        </View>
        <Button
          style={styles.signUpButton}
          appearance="ghost"
          status="control"
          onPress={onSignUpButtonPress}
        >
          Não possui uma conta? Criar
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 12,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialAuthHintText: {
    alignSelf: "center",
    marginBottom: 16,
  },
});
