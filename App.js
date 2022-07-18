import React from 'react';
import Routes from "./src/Components/Routes";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import Screen from './src/Components/Screen';
import Reactotron from 'reactotron-react-native'

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {

    console.tron.log({
        curso: "Alura",
        nome: "Luís"
    });

  return (
      <Screen>
        <Routes />
      </Screen>
  );
}
