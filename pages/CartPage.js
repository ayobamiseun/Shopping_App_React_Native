import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Button from "../components/Button";

// import { CheckBox } from "react-native-elements";

export default function CartPage({ route, navigation }) {
  const { type, size, price, image, name } = route.params;

  const passData = () => {
    navigation.navigate("Checkout", {
      type: type,
      price: price,
      image: image,
      name: name,
      size: size,
    });
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.cart}>Cart</Text>

        <Entypo name="dots-three-vertical" size={20} color="black" />
      </View>

      {/* checkbox */}

      <View style={styles.contentdisplay}>
        <Image style={styles.imagecontainer} source={image} />
        <View>
          <Text style={styles.typecontainer}> {type} </Text>

          <Text style={styles.sizecontainer}>{size}</Text>

          <View style={styles.contentdisplay}>
            <Text style={styles.pricecontainer}> {price} </Text>
            <View style={styles.button}>
              <AntDesign name="minuscircleo" size={20} color="black" />
              <Text> 1 </Text>

              <AntDesign name="pluscircleo" size={20} color="black" />
            </View>
          </View>
        </View>
      </View>

      <Button
        iconCol="#fff"
        buttonName="Checkout"
        onPress={() => {
          passData();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop: 80,
    justifyContent: "space-between",
    padding: 20,
  },
  cart: {
    fontSize: 20,
    fontWeight: "500",
  },
  pricecontainer: {
    fontSize: 22,
    fontWeight: "700",
  },
  imagecontainer: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  contentdisplay: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 4,
  },
  sizecontainer: {
    fontSize: 14,
    color: "#DADADA",
    fontWeight: "500",
    paddingLeft: 6,
  },
  typecontainer: {
    color: "#EEB5AA",
    fontSize: 18,
    fontWeight: "600",
  },
  button: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 80,
  },
});
