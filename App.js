import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { GlobalProvider } from './src/contexts/GlobalContext';
import StackRotas from './src/routes/StackRotas';

export default function App() {
  return (
    <GlobalProvider>
        <NavigationContainer>
          <StatusBar />
          <StackRotas />
        </NavigationContainer>
    </GlobalProvider>
  );
}
