import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../themes/theme";

interface GradientButtonProps {
  title: string;
  image: any;
}

const GradientButton: React.FC<GradientButtonProps> = ({ title, image }) => {
  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={["#7B7B7B", COLORS.primaryBlackHex]}
      className="border border-primaryLightGreyHex p-2 rounded-2xl w-40 h-auto m-2"
    
    >
      <Image source={image} className="w-max h-max m-1 mx-auto" />
      <Text className="font-poppins_medium text-size_14 text-center text-primaryWhiteHex">
        {title}
      </Text>
    </LinearGradient>
  );
};

export default GradientButton;

const styles = StyleSheet.create({});
