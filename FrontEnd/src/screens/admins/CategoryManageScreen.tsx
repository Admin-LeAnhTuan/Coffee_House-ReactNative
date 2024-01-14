import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import GradientBGIcon from "../../components/GradientBGIcon";
import { COLORS } from "../../themes/theme";
import { FONTSIZE } from "../../themes/font";
import DashboardScreen from "./DashboardScreen";
import TabNavigator from "../../navigator/TabNabvigator";

const CategoryManageScreen = ({ navigation }: any) => {
  const categories = [
    {
      id: 1,
      name: "Coffee",
    },
    {
      id: 2,
      name: "Juice",
    },
    {
      id: 3,
      name: "Milk Tea",
    },
  ];

  const [data, setData] = useState([]);
  const getCategories = async () => {
    try {
      const response = await fetch("http://192.168.2.15:8080/categories/");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("Error fetching data:", error);
      console.log(error);
    }
  };
  console.log(data);
  let deleteCategory = (id: any) => {
    fetch(`http://192.168.2.15:8080/categories/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  // let editCategory = (id: any) => {
  //   fetch(`http://192.168.2.15:8080/categories/${id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //   });
  // };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View className="flex-1 bg-primaryBlackHex">
      <View className="flex-row justify-center items-center">
        <Text className="text-primaryWhiteHex font-poppins_semibold text-size_20 mt-9">
          Category Management
        </Text>
      </View>
      {data.map((category: any, key: any) => {
        return (
          <View
            key={key}
            className="border-b-2 border-primaryWhiteHex flex-row h-12 justify-between items-center mx-1 my-2 bg-primaryGreyHex"
          >
            <Text className="text-primaryWhiteHex text-size_20">
              {category.name}
            </Text>
            <View className="flex-row">
              <TouchableOpacity className="border rounded-3xl bg-primaryOrangeHex w-20 mx-1">
                <Text
                  className="text-primaryWhiteHex text-size_20 text-center"
                  onPress={() => navigation.push("Edit Category")}
                >
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="border rounded-3xl bg-primaryOrangeHex w-24 mx-1">
                <Text
                  className="text-primaryWhiteHex text-size_20 text-center"
                  onPress={() => {
                    deleteCategory(category._id);
                    console.log(category._id);
                  }}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      <View className="justify-center items-center bg-primaryGreyHex p-1">
        <TouchableOpacity
          className=" rounded-full bg-primaryLightGreyHex w-10 h-10 mx-1"
          onPress={() => {
            navigation.navigate("Add Category");
          }}
        >
          <Text className="text-primaryWhiteHex text-size_24 text-center ">
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryManageScreen;

const styles = StyleSheet.create({});
