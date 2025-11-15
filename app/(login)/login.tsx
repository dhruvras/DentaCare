import CustomButton from "@/components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);
  useEffect(() => {
  if (username.trim() !== "" && password.trim() !== "") {
    setState(true);   // enable button
  } else {
    setState(false);  // disable button
  }
}, [username, password]);


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
    <View style={styles.mainframe}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input1}
          placeholder="Username"
          placeholderTextColor="#e0f7f6"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input2}
          placeholder="Password"
          placeholderTextColor="#e0f7f6"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={{ marginTop: 30 , width: "90%", alignItems: "center"}}>
          <CustomButton text="Login" task={handleLogin} state={state} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainframe: {
    flex: 1,
    backgroundColor: "#9ae2de",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  container:{
    width: "90%",
    height: "50%",
    backgroundColor: "#52b3b4",
    borderRadius: 20,
    alignItems: "center",
    paddingTop: 20,
  },
  input1: {
    width: "90%",
    height: 50,
    backgroundColor: "#3d9d9c",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  input2: {
    width: "90%",
    height: 50,
    backgroundColor: "#3d9d9c",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
});
