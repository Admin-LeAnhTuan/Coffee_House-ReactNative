import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AddDrinkScreen = ({ navigation }: any) => {
  const [name, setName] = React.useState("");
  const [subname, setSubName] = React.useState("");
  const [category, setCategory] = React.useState("");
  //   const [size, setSize] = React.useState("");
  //   const [info, setInfo] = React.useState("");
  //   const [extraInfo, setExtraInfo] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [topping, setTopping] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const updatedItems = Object.values(selectedCategory).map((item: any) => ({
    label: item.name,
    value: item._id,
  }));

  let getCategories = async () => {
    try {
      const response = await fetch("http://192.168.2.15:8080/category/");
      const json = await response.json();
      setSelectedCategory(json);
    } catch (error) {
      console.log("Error fetching data:", error);
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    setItems(updatedItems);
  }, []);

  //   console.log(selectedCategory);
  console.log(items);

  let createProduct = (
    name: string,
    category_id: any,
    price: number,
    description: string
    // image: string
  ) => {
    fetch("http://192.168.2.15:8080/product/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nameProduct: name,
        categoryId: category_id,
        price: price,
        description: description,
        image: "",
      }),
    });
    navigation.navigate("Drink Manage");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.scrollContent}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/logoLogin.jpg")}
              resizeMode="contain"
              style={styles.logoImage}
            />
            <TouchableOpacity
              style={{ position: "absolute", top: 180, right: 50, zIndex: 999 }}
            >
              <MaterialIcons name="add-circle" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          {/* <Text style={styles.label}>Sub Name</Text>
          <TextInput
            style={styles.input}
            value={subname}
            onChangeText={(text) => setSubName(text)}
          /> */}
          <Text style={styles.label}>Category</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              backgroundColor: "#252A32",
              marginBottom: 10,
            }}
            labelStyle={{
              color: "#fff",
            }}
          />
          {/* <Text style={styles.label}>Size</Text>
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={{ position: "absolute", right: 20, top: 15, zIndex: 999 }}
            >
              <Feather name="x-circle" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.inputText}>S</Text>
          </View> */}
          {/* <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={{ position: "absolute", right: 145, top: 9, zIndex: 999 }}
            >
              <MaterialIcons name="add-circle" size={35} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.inputText}></Text>
          </View> */}
          {/* <Text style={styles.label}>Info</Text>
          <TextInput
            style={styles.input}
            value={info}
            onChangeText={(text) => setInfo(text)}
          />
          <Text style={styles.label}>Extra info</Text>
          <TextInput
            style={styles.input}
            value={extraInfo}
            onChangeText={(text) => setExtraInfo(text)}
          /> */}
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
          />
          {/* <Text style={styles.label}>Topping</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              backgroundColor: "#252A32",
              marginBottom: 10,
            }}
            labelStyle={{
              color: "#fff",
            }}
          /> */}
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={8}
          />
        </View>
        <View style={styles.SaveButtonContainer}>
          <TouchableOpacity
            style={styles.SaveButton}
            onPress={() => {
              createProduct(name, value, Number.parseInt(price), description);
            }}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
  },
  backButton: {
    marginLeft: 20,
  },
  scrollContent: {
    flexGrow: 1,
    marginTop: 60,
  },
  logoContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  imageWrapper: {
    backgroundColor: "#1A1B1D",
    padding: 10,
    borderRadius: 10,
  },
  logoImage: {
    width: 300,
    height: 200,
  },
  inputContainer: {
    marginHorizontal: "10%",
  },
  label: {
    marginBottom: 5,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 0,
    backgroundColor: "#252A32",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    color: "#fff",
  },
  inputText: {
    borderWidth: 0,
    backgroundColor: "#252A32",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    color: "#fff",
    fontSize: 17,
  },
  combobox: {
    backgroundColor: "#252A32",
    color: "#fff",
  },
  SaveButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  SaveButton: {
    backgroundColor: "#D17842",
    paddingHorizontal: 30, // Padding theo chiều ngang
    paddingVertical: 10, // Padding theo chiều dọc
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AddDrinkScreen;
