import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-3xl text-white">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}