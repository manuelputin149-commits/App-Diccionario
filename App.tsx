import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { DictionaryNavigation } from './src/navigations/stacks/DictionaryNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DictionaryNavigation />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}