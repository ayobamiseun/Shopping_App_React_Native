import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BackButton from "../components/BackButton";

export default function Checkout({}) {
  return (
     <View>
    <View style={styles.container}>
    <BackButton />
      <Text>Payment</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 80,
    justifyContent: "space-between",
    padding: 20,
  },
});
