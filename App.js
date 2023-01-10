import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StackRotas from './src/routes/StackRotas';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <StackRotas />
    </NavigationContainer>
  );
}

