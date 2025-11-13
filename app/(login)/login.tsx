import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Login Handler
  const handleLogin = async () => {
    if (username === "Dhruv" && password === "1234") {
      try {
        await AsyncStorage.setItem("isLoggedIn", "true");
        router.replace("/(home)/home"); // Navigate to home screen
      } catch (e) {
        console.log("Error saving data:", e);
      }
    } else {
      Alert.alert("Invalid Credentials", "Please try again!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button title="Login" onPress={handleLogin} color="#02505e" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#e0f7f6" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "#02505e" },
  input: {
    width: "80%",
    padding: 12,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 2,
  },
});
