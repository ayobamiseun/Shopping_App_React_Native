import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const TinyShoes = ({ text, backgroundColor, color }) => {
  const [col, setCol] = useState(color);
  const [bgCol, setBgcol] = useState(backgroundColor);
  return (
    <TouchableOpacity
      onPress={() =>
        col === "#000"
          ? setCol("#fff")
          : setCol("#000") && bgCol == "#fff"
          ? setBgcol("#E94D2B")
          : setBgcol("#fff")
      }
      style={{
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        justifyContent: "center",
        marginTop: 15,
      }}
    >
      <View style={styles.nav}>
        <View style={styles.image}>
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require("../images/nike(red).jpg")}
          />
        </View>
        <Text style={{ color: col, marginTop: 5 }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Nav = () => {
  return (
    <View style={styles.nav}>
      <TinyShoes color="#000" />
      <TinyShoes color="#000" />
      <TinyShoes color="#000" />
      <TinyShoes color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 5,
  },
});

export default Nav;
