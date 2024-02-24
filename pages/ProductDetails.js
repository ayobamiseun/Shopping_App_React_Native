import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import TinyShoes from "../components/TinyShoes";
import TinySizes from "../components/TinySizes";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductDetails({ route }) {
  const navigation = useNavigation();
  const [showData, setShowData] = useState([]);
  const { name, price, image, type, size } = route.params.data;
  const value = {
    type: type,
    price: price,
    image: image,
    name: name,
    size: size,
  };

  const passData = () => {
    navigation.navigate("CartPage", {
      type: type,
      price: price,
      image: image,
      name: name,
      size: size,
    });
  };

  const storeProduct = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
      for (let i = 0; i < JSON.length; i++) {
        //i'm trying to loop through the data and populate the result
        setShowData([
          ...showData,
          {
            name: JSON.stringify[i].name,
            type: JSON.stringify[i].type,
            price: JSON.stringify[i].price,
            image: JSON.stringify[i].image,
            size: JSON.stringify[i].size,
          },
        ]);
      }

      console.log("success");
      console.log(setShowData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  ///get stored data
  const getProduct = async () => {
    try {
      const savedProduct = await AsyncStorage.getItem("user");
      const currentProduct = JSON.parse(savedProduct);
      console.log("just got it");
      console.log(currentProduct);
    } catch (error) {
      console.log(error);
    }
  };

  //if statement
  if (showData) {
    {
      showData.map((data) => data);
    }
    console.log("bbrrrr");
    return (
      <View
        //
        styles={{
          backgroundColor: "#F6F6F6",
          flex: 1,
          paddingTop: 90,
        }}
      >
        <View style={styles.second}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="black" />
        </View>

        <Image style={styles.imagecontainer} source={image} />

        <View style={styles.third}>
          <View style={styles.textcontainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={styles.type}>{type}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>

            <Text style={styles.name}>{name}</Text>

            <TinyShoes />

            <View style={styles.sizecontainer}>
              <Text style={{ fontSize: 23 }}>Size</Text>
              <Text style={{ color: "#E7E7E7", marginTop: 6, fontSize: 13 }}>
                Size Guide
              </Text>
            </View>

            <TinySizes />

            <View style={styles.sizecontainer}>
              <Text style={{ fontSize: 18, fontWeight: "400" }}>
                Description
              </Text>
              <Feather name="chevron-down" size={24} color="black" />
            </View>

            <Button
              iconName="cart-outline"
              iconSize={24}
              iconCol="#fff"
              buttonName="Add To Cart"
              onPress={() => {
                passData();
                storeProduct();
                getProduct();
              }}
            />
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  second: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  third: {
    borderRadius: 40,
    backgroundColor: "white",
    height: 490,
  },
  imagecontainer: {
    width: 200,
    height: 200,
    marginHorizontal: 60,
    marginVertical: 30,
  },

  type: {
    fontSize: 25,
    fontWeight: "400",
  },
  name: {
    fontSize: 10,
    color: "#DADADA",
  },
  textcontainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  price: {
    fontSize: 25,
    fontWeight: "400",
  },

  sizecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
});
