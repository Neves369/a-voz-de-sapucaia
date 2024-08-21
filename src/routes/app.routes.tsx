import React from "react";
import Dashboard from "../screens/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";
import useColorScheme from "../hooks/useColorScheme";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Prefeitura from "../screens/Politica/Prefeitura/Prefeitura";
import Camara from "../screens/Politica/Camara/Camara";
import Vereadores from "../screens/Politica/Camara/Vereadores/Vereadores";
import ProjetosVotacaoLegislativo from "../screens/Politica/Camara/Projetos/Projetos-processo";

import Gestao from "../screens/Politica/Prefeitura/Gestao/Gestao";
import Project from "../screens/Politica/Project";
import Vereador from "../screens/Politica/Camara/Vereadores/Vereador";
import Sessao from "../screens/Politica/Camara/Sessao/Sessao";
import ProjetosProcesso from "../screens/Politica/Prefeitura/Projetos/Projetos-processo";
import Politica from "../screens/Politica/Politica";

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />

      <AppStack.Screen
        name="Política"
        component={Politica}
        options={{
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />

      <AppStack.Screen
        name="Prefeitura"
        component={Prefeitura}
        options={{
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <AppStack.Screen
        name="Projetos em Processo (Executivo)"
        component={ProjetosProcesso}
        options={{
          headerTitle: "Projetos em Processo",
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <AppStack.Screen
        name="Gestão"
        component={Gestao}
        options={{
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />

      <AppStack.Screen
        name="Câmara"
        component={Camara}
        options={{
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <AppStack.Screen
        name="Sessões"
        component={Sessao}
        options={{
          headerTitle: "Sessões",
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <AppStack.Screen
        name="Projetos em Votação (Legislativo)"
        component={ProjetosVotacaoLegislativo}
        options={{
          headerTitle: "Projetos em Votação",
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <AppStack.Screen
        name="Vereadores"
        component={Vereadores}
        options={{
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <AppStack.Screen
        name="Vereador"
        component={Vereador}
        options={{
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />

      <AppStack.Screen
        name="Projeto"
        component={Project}
        options={{
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <AppStack.Screen
        name="Configurações"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <AppStack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: "Entrar",
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />

      <AppStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerTitle: "Cadastrar",
          headerStyle: {
            backgroundColor:
              useColorScheme() == "light" ? "#22577a" : "#1A2138",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
