import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function _layout() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  // 🔹 Function to read data from AsyncStorage
  const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      console.log("Error retrieving data:", e);
      return null;
    }
  };

  // 🔹 Check login status on app start
  useEffect(() => {
    const checkLoginStatus = async () => {
      const value = await getData("isLoggedIn");
      setLoggedIn(value === "true");
    };
    checkLoginStatus();
  }, []);

  // 🔹 Show loader until login state is known
  if (loggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#02505e" />
      </View>
    );
  }

  // 🔹 Conditional Navigation
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {loggedIn ? (
        <Stack.Screen name="(home)/home" />
      ) : (
        <Stack.Screen name="(auth)/login" />
      )}
    </Stack>
  );
}
