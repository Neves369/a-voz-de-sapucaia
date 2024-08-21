import React, { useContext, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import {
  Button,
  CheckBox,
  Datepicker,
  Divider,
  Input,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { useForm, Controller } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";
import { KeyboardAvoidingView } from "../components/keyboard/keyboard.component";
import { ImageOverlay } from "../components/image-overlay/image-overlay.component";
import {
  ArrowForwardIconOutline,
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
} from "../components/icons/icons";
import AuthContext from "../contexts/auth";
import MaskedInput from "../components/input/masked-input.component";
import { VerificaCPF } from "../../utils/ValidarCPF";

export default ({ navigation }: any): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const { signIn, setShowError, setMessageError }: any =
    useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInButtonPress = (): void => {
    navigation && navigation.navigate("Login");
  };

  const handleSignup = async (data: any) => {
    setLoading(true);
    const ncpf = data?.cpf.replace(/[^0-9]/g, "");
    if (data.confirmarSenha != data.senha) {
      return (
        setLoading(false),
        setShowError(true),
        setMessageError("A Confirmação de senha não condiz com a senha.")
      );
    }
    if (!VerificaCPF(ncpf)) {
      return (
        setLoading(false),
        setShowError(true),
        setMessageError("CPF inválido! Por favor informe outro CPF.")
      );
    }

    setTimeout(() => {
      signIn(data);
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

  const renderCheckboxLabel = React.useCallback(
    (evaProps: any) => (
      <Text {...evaProps} style={styles.termsCheckBoxText}>
        Eu concordo com os termos de Uso e Privacidade do aplicativo.
      </Text>
    ),
    []
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <ImageOverlay
        // @ts-ignore
        style={styles.headerContainer}
        source={require("../../assets/image-background.png")}
      >
        <View style={styles.signUpContainer}>
          <Text style={styles.signInLabel} category="h4" status="control">
            CADASTRAR
          </Text>
          <Button
            style={styles.signInButton}
            appearance="ghost"
            status="control"
            size="giant"
            accessoryLeft={ArrowForwardIconOutline}
            onPress={onSignInButtonPress}
          >
            Entrar
          </Button>
        </View>
      </ImageOverlay> */}
      {/* <View style={styles.socialAuthContainer}>
        <Text style={styles.socialAuthHintText}>
          Cadastar com uma rede social
        </Text>
        <View style={styles.socialAuthButtonsContainer}>
          <Button
            appearance="filled"
            size="giant"
            status="control"
            accessoryLeft={GoogleIcon}
          />
          <Button
            appearance="filled"
            size="giant"
            status="info"
            accessoryLeft={FacebookIcon}
          />
          <Button
            appearance="filled"
            size="giant"
            status="info"
            accessoryLeft={TwitterIcon}
          />
        </View>
      </View>
      <View style={styles.orContainer}>
        <Divider style={styles.divider} />
        <Text style={styles.orLabel} category="h5">
          OU
        </Text>
        <Divider style={styles.divider} />
      </View>
      <Text style={styles.emailSignLabel}>Criar uma Conta</Text> */}
      <View style={[styles.container, styles.formContainer]}>
        <Controller
          control={control}
          name="nome"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="NOME COMPLETO"
              placeholder="Nome Completo"
              maxLength={100}
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.nome && (
          <Text style={{ color: "red" }}>Nome é obrigatório.</Text>
        )}
        <Controller
          control={control}
          name="cpf"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <MaskedInput
              label={"CPF"}
              placeholder={"999.999.999-99"}
              keyboardType={"numeric"}
              mask={"999.999.999-99"}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
        />
        {errors.nome && (
          <Text style={{ color: "red" }}>Nome é obrigatório.</Text>
        )}
        <Controller
          control={control}
          name="dataNascimento"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <MaskedInput
              label={"DATA DE NASCIMENTO"}
              placeholder={"00/00/0000"}
              keyboardType={"numeric"}
              mask={"99/99/9999"}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
        />
        {errors.dataNascimento && (
          <Text style={{ color: "red" }}>
            Data de nascimento é obrigatória.
          </Text>
        )}
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              style={styles.formInput}
              label="EMAIL"
              placeholder="Email"
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
              style={styles.formInput}
              label="SENHA"
              placeholder="Senha"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.senha && (
          <Text style={{ color: "red" }}>Senha é obrigatória.</Text>
        )}
        <Controller
          control={control}
          name="confirmarSenha"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              style={styles.formInput}
              label="CONFIRMAR SENHA"
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.confirmarSenha && (
          <Text style={{ color: "red" }}>
            Confirmação de Senha é obrigatória.
          </Text>
        )}

        <CheckBox
          status="info"
          style={styles.termsCheckBox}
          checked={termsAccepted}
          onChange={(checked: boolean) => setTermsAccepted(checked)}
        >
          {renderCheckboxLabel}
        </CheckBox>
      </View>
      <Button
        style={styles.signUpButton}
        size="large"
        status="info"
        disabled={!termsAccepted}
        onPress={handleSubmit(!loading ? handleSignup : () => {})}
      >
        {!loading ? (
          "CRIAR CONTA"
        ) : (
          <ActivityIndicator size={30} color="white" />
        )}
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    minHeight: 216,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 44,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialAuthHintText: {
    alignSelf: "center",
    marginBottom: 16,
  },
  formContainer: {
    marginTop: 48,
    paddingHorizontal: 16,
  },
  evaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  signInLabel: {
    flex: 1,
  },
  signInButton: {
    flexDirection: "row-reverse",
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  socialAuthIcon: {
    tintColor: "text-basic-color",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 52,
  },
  divider: {
    flex: 1,
  },
  orLabel: {
    marginHorizontal: 8,
  },
  emailSignLabel: {
    alignSelf: "center",
    marginTop: 8,
  },
  formInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 20,
  },
  termsCheckBoxText: {
    fontSize: 11,
    lineHeight: 14,
    color: "text-hint-color",
    marginLeft: 10,
  },
});
