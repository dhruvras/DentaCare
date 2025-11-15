import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function home() {
    const router = useRouter();
    const handleLogout = async () => {
      await AsyncStorage.removeItem("isLoggedIn");
      router.replace("/welcome");
    };

  return (
    <View>
      <Text>home</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

const styles = StyleSheet.create({

})