import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart, LineChart, PieChart } from "react-native-chart-kit";

const StaticScreen = () => {
  const dataLineChart = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };

  const dataBarChart = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const dataPieChart = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View className="flex-1 bg-primaryBlackHex">
      <View className="flex-row justify-center items-center">
        <Text className="text-primaryWhiteHex font-poppins_semibold text-size_20 mt-12">
          Statistic
        </Text>
      </View>
      <View className="mt-12">
        <LineChart
          data={dataLineChart}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>

      <View className="mt-12">
        <PieChart
          data={dataPieChart}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 20]}
          absolute
        />
      </View>
    </View>
  );
};

export default StaticScreen;

const styles = StyleSheet.create({});
