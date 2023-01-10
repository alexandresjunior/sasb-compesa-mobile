import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import TelaInicial from './src/screens/TelaInicial';

export default function App() {
  return (
    <View>
      <StatusBar />
      <Cadastro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
