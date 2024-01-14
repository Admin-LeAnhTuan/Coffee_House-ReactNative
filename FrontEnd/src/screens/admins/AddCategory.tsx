import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";

const AddCategory = ({ navigation }: any) => {
  const [text, onChangeText] = React.useState("");
  let createCategory = (name: string) => {
    fetch("http://192.168.2.15:8080/categories/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    });
    navigation.navigate("Category Manage");
  };

  return (
    <View>
      <TextInput onChangeText={onChangeText} value={text}></TextInput>
      <TouchableOpacity onPress={() => createCategory(text)}>
        <View className="w-20 h-20 bg-primaryBlackHex"></View>
      </TouchableOpacity>
    </View>
  );
};

export default AddCategory;

const styles = StyleSheet.create({});
