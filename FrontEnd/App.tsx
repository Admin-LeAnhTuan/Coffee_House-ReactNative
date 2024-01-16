import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/navigator/TabNabvigator";
import DetailsScreen from "./src/screens/DetailsScreen";
// import PaymentScreen from "./src/screens/PaymentScreen";
import { useFonts } from "expo-font";
import CategoryManageScreen from "./src/screens/admins/CategoryManageScreen";
import ProductManageScreen from "./src/screens/admins/ProductManageScreen";
import ToppingManageScreen from "./src/screens/admins/ToppingManageScreen";
import OrderManageScreen from "./src/screens/admins/OrderManageScreen";
import AddCategory from "./src/screens/admins/AddCategory";
import EditCategory from "./src/screens/admins/EditCategory";
import DrinkManagementScreen from "./src/screens/admins/DrinkManagementScreen";
import AddDrinkScreen from "./src/screens/admins/AddDrinkScreen";
import StaticScreen from "./src/screens/admins/StaticScreen";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./src/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./src/assets/fonts/Poppins-Thin.ttf"),
  });
  if (!fontsLoaded) return;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Category Manage"
            component={CategoryManageScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Drink Manage"
            component={DrinkManagementScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Topping Manage"
            component={ToppingManageScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Order Manage"
            component={OrderManageScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Add Category"
            component={AddCategory}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Edit Category"
            component={EditCategory}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Add Drink"
            component={AddDrinkScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Statistic"
            component={StaticScreen}
            options={{ animation: "slide_from_bottom" }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
