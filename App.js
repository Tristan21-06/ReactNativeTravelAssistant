import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ChatbotScreen from './views/ChatbotScreen';
import TripsScreen from './views/TripsScreen';
import SettingsScreen from './views/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            id={"main"}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'Chatbot') {
                  iconName = 'chatbubbles';
                } else if (route.name === 'Voyages') {
                  iconName = 'map';
                } else if (route.name === 'Paramètres') {
                  iconName = 'settings';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
        >
          <Tab.Screen name="Chatbot" component={ChatbotScreen} />
          <Tab.Screen name="Voyages" component={TripsScreen} />
          <Tab.Screen name="Paramètres" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
