import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const TinySizes = ({ text ,backgroundColor, color}) => {
  const [col, setCol] = useState(color);
  const [bgCol, setBgcol]= useState(backgroundColor);
  return (
    <TouchableOpacity
      onPress={() => (col === "#000" ? setCol("#fff") : setCol("#000") && bgCol== "#fff" ? setBgcol("#E94D2B"): setBgcol("#fff"))}
      style={{
        alignItems: "center",
        padding: 8,
        backgroundColor: "#fff",
        borderRadius: 20,
        justifyContent:"center",
        marginTop:15
     
        
      }}
    >
        <View style={styles.nav}>
        <View style={styles.text}>
        <Text style={{ color: col }}>{text}</Text>
        </View>
        
        </View>
       
    </TouchableOpacity>
  );
};

const Nav = () => {
  return (
    <View style={styles.nav}>
      <TinySizes color="#000"  text="40" />
      <TinySizes color="#000" text="41"/>
      <TinySizes color="#000" text="41.5"/>
      <TinySizes color="#000" text="42"/>
      <TinySizes color="#000" text="42.5"/>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },

  text:{
      backgroundColor:"#F6F6F6",
      padding:16,
      borderRadius:5,
      marginTop:5,
      
      
      
  }
});

export default Nav;