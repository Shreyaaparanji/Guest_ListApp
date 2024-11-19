import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import AdminLoginScreen from './src/AdminLoginScreen';
import Sidebar from './src/Sidebar';
import AddGuest from './src/AddGuest';
import GuestList from './src/GuestList';
import EditGuestForm from './src/EditGuestForm';
import SeatDisplay from './src/SeatDisplay';
import BackgroundScreen from './src/BackgroundScreen';
import AdminGuestList from './src/AdminGuestlist'




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sidebar" component={Sidebar} />
        <Stack.Screen name="AddGuest" component={AddGuest} />
        <Stack.Screen name="GuestList" component={GuestList} />
        <Stack.Screen name="EditGuestForm" component={EditGuestForm} />
        <Stack.Screen name="SeatDisplay" component={SeatDisplay} />
        <Stack.Screen name="BackgroundScreen" component={BackgroundScreen} />
        <Stack.Screen name="AdminGuestList" component={AdminGuestList} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
