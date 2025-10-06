import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SearchScreen, ResultScreen } from '../../screens/Dictionary';
import { screens } from '../../utils/screens';

const Stack = createNativeStackNavigator();

export function DictionaryNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: '#1a1a2e' },
        headerStyle: { backgroundColor: '#16213e' },
        headerTitleStyle: { color: '#fff' },
        headerTintColor: '#0891b2',
      }}
    >
      <Stack.Screen
        name={screens.dictionary.homeScreen}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.dictionary.searchScreen}
        component={SearchScreen}
        options={{ title: 'Buscar' }}
      />
      <Stack.Screen
        name={screens.dictionary.resultScreen}
        component={ResultScreen}
        options={{ title: 'Resultado' }}
      />
    </Stack.Navigator>
  );
}