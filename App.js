import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RespostaOpcoes from './src/components/RespostaOpcoes';
import StackRotas from './src/routes/StackRotas';

export default function App() {
  return (
    <NavigationContainer>
      <RespostaOpcoes />
    </NavigationContainer>
  );
}

