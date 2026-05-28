import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../navigation/screens/HomeScreen';
import PerfilScreen from '../navigation/screens/PerfilScreen';
import ConfiguracoesScreen from '../navigation/screens/ConfiguracoesScreen';

const Stack =
  createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
        />

        <Stack.Screen
          name="Configurações"
          component={
            ConfiguracoesScreen
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}