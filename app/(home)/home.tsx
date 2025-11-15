import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomCard from "../../components/CustomCard";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleLogout = async () => {
    await AsyncStorage.removeItem("isLoggedIn");
    router.replace("/welcome");
  };

  // Load username from AsyncStorage
  useEffect(() => {
    const loadUsername = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername) setUsername(storedUsername);
    };
    loadUsername();
  }, []);

  return (
    <View style={styles.container}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Hi {username} 👋</Text>
        <Text style={styles.subtitle}>how’s your smile today?</Text>
      </View>

      {/* Feature Cards Grid */}
      <View style={styles.grid}>
        <CustomCard image="scan" text="Scan My Teeth" action={()=>{router.navigate("/(scan)/scan");}}/>
        <CustomCard image="chat" text="Chat with Dentist AI" action={()=>{}}/>
        <CustomCard image="appointment" text="Book Appointment" action={()=>{}}/>
        <CustomCard image="report" text="My Reports" action={()=>{}}/>
      </View>

      {/* Dental Tip Box */}
      <View style={styles.tipBox}>
        <View style={styles.tipIcon}></View>
        <View>
          <Text style={styles.tipTitle}>Dental Tip</Text>
          <Text style={styles.tipText}>Brush twice a day and floss regularly</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFD",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    marginBottom: 30,
  },
  welcome: {
    fontSize: 32,
    fontWeight: "700",
    color: "#0C1A30",
  },
  subtitle: {
    fontSize: 20,
    color: "#4A5568",
    marginTop: 4,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },

  tipBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DFF6F5",
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
  },

  tipIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#B8ECEA",
    borderRadius: 15,
    marginRight: 15,
  },

  tipTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0C1A30",
  },

  tipText: {
    fontSize: 14,
    color: "#4A5568",
    marginTop: 3,
  },
});
