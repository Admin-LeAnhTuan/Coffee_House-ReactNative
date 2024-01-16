import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const EditCategory = ({ navigation, category }: any) => {
  const route = useRoute();
  category = route.params;
  const [text, onChangeText] = React.useState(category.category.name);
  let editCategory = (id: any, name: string) => {
    fetch(`http://192.168.2.15:8080/category/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    });
    navigation.navigate("Category Manage");
  };

  return (
    <View>
      <TextInput onChangeText={onChangeText} value={text}></TextInput>
      <TouchableOpacity
        onPress={() => editCategory(category.category._id, text)}
      >
        <View className="w-20 h-20 bg-primaryBlackHex"></View>
      </TouchableOpacity>
    </View>
  );
};

export default EditCategory;

const styles = StyleSheet.create({});
