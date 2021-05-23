import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Header(){
  return(
    <Header
      centerComponent = {{text: 'Prime For Life'}}
    /> 
  )
}

function CoachScreen() {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/logo.png')} style={styles.headerImage} />
      <Text>Coaching Screen Here!</Text>
    </View>
  );
}

function LibraryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Library!</Text>
    </View>
  );
}

function TrackingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tracking!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Sasha') {
              iconName = focused
                ? 'chatbubbles'
                : 'chatbubbles-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? 'library' : 'library-outline';
            }
            else if (route.name === 'Tracking') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'menu' : 'menu-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Sasha" component={CoachScreen} 
          options = {{
            tabBarIcon:  () => (
              <View>
                <Image
                  source = {require('./assets/sasha.jpeg')}
                  style = {{
                    width: 30,
                    height: 30,
                    borderRadius: 30/2,
                  }}
                  />
              </View>
            )}}/>
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Tracking" component={TrackingScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 26,
    height: 26,
  }
});