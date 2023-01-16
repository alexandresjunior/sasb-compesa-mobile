import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/contexts/AuthContext';
import StackRotas from './src/routes/StackRotas';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar />
        <StackRotas />
      </NavigationContainer>
    </AuthProvider>
  );
}
