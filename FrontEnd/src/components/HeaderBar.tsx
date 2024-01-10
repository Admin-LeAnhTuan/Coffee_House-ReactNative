import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SPACING } from "../themes/theme";
import { FONTFAMILY, FONTSIZE } from "../themes/font";
import GradientBGIcon from "./GradientBGIcon";
import ProfilePic from "./ProfilePic";

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon
        name="setting"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
