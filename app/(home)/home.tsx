import LoginButton from '@/components/LoginButton';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.mainFrame}>
      <Text style={styles.heading_text}>Login In</Text>
      <View style={styles.entryBox}>
        <TextInput
        style={styles.input1}
        placeholder="Enter Username"
        placeholderTextColor="#5C6B73"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input2}
        placeholder="Enter Password"
        placeholderTextColor="#5C6B73"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <LoginButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainFrame:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        backgroundColor:'#88ffedff',
    },
    heading_text:{
      fontSize:40,
      fontWeight:'bold',
      marginTop:40,
    },
    entryBox:{
      width:'80%',
      height:'50%',
      backgroundColor:'#08d0deff',
      borderRadius:20,
      marginTop:50,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4, // for Android shadow
      alignItems:'center',
        // justifyContent:'center',
    },
    input1: {
    width: "85%",
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop:40,
  },
    input2: {
    width: "85%",
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
})