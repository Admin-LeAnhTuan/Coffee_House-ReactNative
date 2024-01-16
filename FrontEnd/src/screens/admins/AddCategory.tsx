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
    fetch("http://192.168.2.15:8080/category/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    });
    navigation.navigate("Category Manage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add Category</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
      <TouchableOpacity
        style={styles.SaveButton}
        onPress={() => createCategory(text)}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );

  // return (
  //   <ScrollView
  //     style={styles.container}
  //     contentContainerStyle={{ flexGrow: 1 }}
  //   >
  //     <View style={styles.scrollContent}>
  //       <TouchableOpacity style={styles.backButton}>
  //         <AntDesign name="arrowleft" size={24} color="#fff" />
  //       </TouchableOpacity>
  //       <View style={styles.logoContainer}>
  //         <View style={styles.imageWrapper}>
  //           <Image
  //             source={require("../../assets/logoLogin.jpg")}
  //             resizeMode="contain"
  //             style={styles.logoImage}
  //           />
  //           <TouchableOpacity
  //             style={{ position: "absolute", top: 180, right: 50, zIndex: 999 }}
  //           >
  //             <MaterialIcons name="add-circle" size={35} color="#fff" />
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //       <View style={styles.inputContainer}>
  //         <Text style={styles.label}>Name</Text>
  //         <TextInput style={styles.input} value={name} onChangeText={setName} />
  //         {/* <Text style={styles.label}>Sub Name</Text>
  //         <TextInput
  //           style={styles.input}
  //           value={subname}
  //           onChangeText={(text) => setSubName(text)}
  //         /> */}
  //         <Text style={styles.label}>Category</Text>
  //         <DropDownPicker
  //           open={open}
  //           value={value}
  //           items={items}
  //           setOpen={setOpen}
  //           setValue={setValue}
  //           // setItems={setItems}
  //           style={{
  //             backgroundColor: "#252A32",
  //             marginBottom: 10,
  //           }}
  //           labelStyle={{
  //             color: "#fff",
  //           }}
  //         />
  //         {/* <Text style={styles.label}>Size</Text>
  //         <View style={{ position: "relative" }}>
  //           <TouchableOpacity
  //             style={{ position: "absolute", right: 20, top: 15, zIndex: 999 }}
  //           >
  //             <Feather name="x-circle" size={24} color="#fff" />
  //           </TouchableOpacity>
  //           <Text style={styles.inputText}>S</Text>
  //         </View> */}
  //         {/* <View style={{ position: "relative" }}>
  //           <TouchableOpacity
  //             style={{ position: "absolute", right: 145, top: 9, zIndex: 999 }}
  //           >
  //             <MaterialIcons name="add-circle" size={35} color="#fff" />
  //           </TouchableOpacity>
  //           <Text style={styles.inputText}></Text>
  //         </View> */}
  //         {/* <Text style={styles.label}>Info</Text>
  //         <TextInput
  //           style={styles.input}
  //           value={info}
  //           onChangeText={(text) => setInfo(text)}
  //         />
  //         <Text style={styles.label}>Extra info</Text>
  //         <TextInput
  //           style={styles.input}
  //           value={extraInfo}
  //           onChangeText={(text) => setExtraInfo(text)}
  //         /> */}
  //         <Text style={styles.label}>Price</Text>
  //         <TextInput
  //           style={styles.input}
  //           value={price}
  //           onChangeText={setPrice}
  //         />
  //         {/* <Text style={styles.label}>Topping</Text>
  //         <DropDownPicker
  //           open={open}
  //           value={value}
  //           items={items}
  //           setOpen={setOpen}
  //           setValue={setValue}
  //           setItems={setItems}
  //           style={{
  //             backgroundColor: "#252A32",
  //             marginBottom: 10,
  //           }}
  //           labelStyle={{
  //             color: "#fff",
  //           }}
  //         /> */}
  //         <Text style={styles.label}>Description</Text>
  //         <TextInput
  //           style={styles.input}
  //           value={description}
  //           onChangeText={setDescription}
  //           multiline={true}
  //           numberOfLines={8}
  //         />
  //       </View>
  //       <View style={styles.SaveButtonContainer}>
  //         <TouchableOpacity
  //           style={styles.SaveButton}
  //           onPress={() => {
  //             createProduct(name, value, Number.parseInt(price), description);
  //           }}
  //         >
  //           <Text style={styles.buttonText}>Save</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   </ScrollView>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
    paddingTop: 100,
    paddingHorizontal: "5%",
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
    fontSize: 20,
    textAlign: "center",
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

export default AddCategory;
