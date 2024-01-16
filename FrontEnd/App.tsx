import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import Regitser from './src/screens/RegisterScreen';
import Login from './src/screens/LoginScreen';
import Profile from './src/screens/ProfileScreen';
import EditProfile from './src/screens/EditProfile';
import AddDrinkScreen from './src/screens/AddDrinkScreen';
import AddTopping from './src/screens/AddTopping';
import EditTopping from './src/screens/EditTopping';
import Test from './src/Test/Test';
import Test1 from './src/Test/Test1';
import {Provider} from 'react-redux';
import store from './src/redux/store';

// import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <Provider store={store}>
       <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
          name="Regitser"
          component={Regitser}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
          name="Profile"
          component={Profile}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
          name="AddDrinkScreen"
          component={AddDrinkScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        {/* <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
