import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Shoes() {
  const navigation = useNavigation();

  const [details, setDetails] = useState([
    {
      name: "School Shoes",
      type: "Creter impact",
      price: "$99.56",
      key: "1",
      image: require("../images/shiw.jpeg"),
      size: "Size 40",
    },
    {
      name: "Gym Shoe",
      type: "Nike Dunks",
      price: "$120.50",
      key: "3",
      image: require("../images/newb.png"),
      size: "Size 42",
    },

    {
      name: "Men's Shoes",
      type: "AirForce 1",
      price: "$409.56",
      key: "4",
      image: require("../images/dunk.jpg"),
      size: "Size 39",
    },
    {
      name: "Men's Shoe",
      type: "Air Force Mid Sheed",
      price: "$137.50",
      key: "2",
      image: require("../images/sb.jpg"),
      size: "Size 41",
    },
  ]);
  const numColumns = 2;
  return (
    <View>
      <View style={styles.second}>
        <Text style={styles.text1}>New Men's</Text>
        <Text style={styles.text2}> See all</Text>
      </View>

      <View>
        <FlatList
          numColumns={2}
          key={2}
          data={details}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductDetails", { data: item })
              }
            >
              <View
                style={{
                  flex: 1,
                  paddingTop: 5,
                  paddingHorizontal: 15,
                }}
              >
                <View style={styles.viewcontainer}>
                  <View>
                    <View>
                      <Image source={item.image} style={styles.image} />
                    </View>

                    <View>
                      <Text style={styles.namecontainer}>{item.name}</Text>
                      <Text style={styles.typecontainer}>{item.type}</Text>
                    </View>

                    <View
                      style={{
                        marginTop: 7,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flex: 1,
                      }}
                    >
                      <Text style={styles.price}>{item.price}</Text>
                      <View style={styles.iconcontainer}>
                        <Feather name="plus" size={18} color="white" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#000",
  },
  text2: {
    color: "#BDBDBD",
    fontSize: 10,
    marginTop: 10,
  },
  main: {},
  second: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 20,
  },
  viewcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingBottom: 0,
    paddingTop: 35,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    flex: 1,
  },

  image: {
    width: 130,
    height: 120,
  },
  textcontainer: {
    marginHorizontal: 5,
  },
  namecontainer: {
    color: "#E3AFA3",
    fontSize: 9,
  },
  typecontainer: {
    fontSize: 17,
    fontWeight: "700",
  },
  price: {
    fontSize: 17,
    fontWeight: "600",
  },
  iconcontainer: {
    backgroundColor: "#000",
    padding: 8,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    marginHorizontal: -10,
  },
});
