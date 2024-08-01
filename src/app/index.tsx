import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen'
import {PharmacyScreen} from '../screens/PharmacyScreen'

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pharmacy" component={PharmacyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
  