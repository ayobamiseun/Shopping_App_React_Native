import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Category = ({ text ,backgroundColor, color, image}) => {
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
        marginHorizontal:20
        
      }}
    >
        <View style={styles.nav}>
        <View style={styles.image}>
        <Image
        style={{
          width: 20,
          height: 20,
          borderRadius: 20,
             
        }}
        source={image}
      />
        </View>
      
      <Text style={{ color: col , marginTop:5}}>{text}</Text>
        </View>
       
    </TouchableOpacity>
  );
};

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Category text="Lifestyle" color="#000" image={require('../images/dunk.jpg')} />
      <Category text="Basketball" color="#000"   image={require('../images/sb.jpg')} />
      <Category text="Running" color="#000" image={require('../images/newb.png')} />
    
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image:{
      backgroundColor:"#F6F6F6",
     
     padding:4,
      borderRadius:35/2
  }
});

export default Nav;