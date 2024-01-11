import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../themes/theme";

const Logo = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, "#1C2129"]}
        className="size-44 rounded-full mx-auto mt-space_42"
      >
        <Image
          source={require("../assets/coffee_assets/Logo.png")}
          className="w-36 h-28 mx-5 my-8"
        />
      </LinearGradient>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
