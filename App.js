import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const adaptive = require("./assets/adaptive-icon.png");

export default function App() {
  const [isVisible, setIsVisible] = useState(false)
  const onPress = () => {
     setIsVisible((prev) => !prev); 
  }
  return (
    <View style={{ flex: 1, ...padding(70, 10, 10, 10) }}>
      <ScrollView>
        <Text>Some text</Text>
        <View style={{ ...padding(10, 0, 0, 0) }}>
          <Text>Some more text</Text>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png",
            }}
            style={{ width: 200, height: 200 }}
          />
          <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Press</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={isVisible}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View style={{ ...padding(10, 0, 0, 0) }}>
            <Text>Some more text</Text>

            <TouchableOpacity
              onPress={onPress}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}>Press</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
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
    paddingLeft: d !== undefined ? d : (b !== undefined ? b : a)
  }
}