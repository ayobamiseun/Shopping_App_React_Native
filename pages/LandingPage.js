import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default function LandingPage({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={["#272320", "#DB5F39"]}
        locations={[0.6, 0.9]}
        style={styles.linearGradient}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            marginBottom: 30,
            marginTop: 10,
          }}
          //   source={require("../images/nike(red).jpg")}
        />
        <Text style={styles.basetext}>LIVE YOUR PERFECT</Text>
        <Text style={styles.text}>
          Smart, gorgeous & fashionable{"\n"}collection makes you cool
        </Text>

        <View
          style={{
            alignContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
            <Feather name="chevrons-up" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ color: "white" }}>Get Started</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  basetext: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
    textAlign: "center",
  },

  text: { color: "white", fontSize: 10, textAlign: "center" },
});
