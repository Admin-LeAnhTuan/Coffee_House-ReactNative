import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../../themes/theme";
import Logo from "../../components/Logo";
import GradientButton from "../../components/GradientButton";
import HomeScreen from "../HomeScreen";

const DashboardScreen = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-primaryBlackHex">
      <Logo />
      <View className="border border-primaryWhiteHex rounded-3xl w-96 h-96 mx-auto mt-10 p-3">
        <Text className="text-primaryWhiteHex text-size_30 mx-auto font-poppins_semibold">
          Dashboard
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex flex-row flex-wrap items-center justify-center">
            <TouchableOpacity>
              <GradientButton
                title="Drink Management"
                image={require("../../assets/icons/tea-cup.png")}
              />
            </TouchableOpacity>
            <GradientButton
              title="Drink Management"
              image={require("../../assets/icons/tea-cup.png")}
            />
            <GradientButton
              title="Topping Management"
              image={require("../../assets/icons/cherries.png")}
            />
            <GradientButton
              title="Category Management"
              image={require("../../assets/icons/dashboard.png")}
            />
            <GradientButton
              title="Statistic"
              image={require("../../assets/icons/signal.png")}
            />
            <GradientButton
              title="Order Management"
              image={require("../../assets/icons/order.png")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
