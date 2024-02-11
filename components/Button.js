import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Button({
  iconName,
  iconSize,
  iconCol,
  buttonName,
  onPress,
}) {
  return (
    <View>
      <TouchableOpacity  onPress={onPress} style={styles.main}>
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconCol}
        />
        <Text style={styles.text}> {buttonName} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#E84727",
    padding: 18,
    flexDirection: "row",
    borderRadius: 20,
    paddingHorizontal: 116,
    marginVertical: 30,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    paddingLeft: 18,
    paddingTop: 3,
  },
});
