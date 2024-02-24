
import {  View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function BackButton() {
      const navigation = useNavigation();
  return (
    <View>
       <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
    </View>
  )
}

export default BackButton
