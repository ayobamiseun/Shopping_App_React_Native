import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Landingpage"
        >
          <MainNavigator.Screen name="LandingPage" component={LandingPage} />
          <MainNavigator.Screen name="HomePage" component={HomePage} />
          <MainNavigator.Screen
            name="ProductDetails"
            component={ProductDetails}
          />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b !== undefined ? b : a,
    paddingBottom: c !== undefined ? c : a,
    paddingLeft: d !== undefined ? d : b !== undefined ? b : a,
  };
}
