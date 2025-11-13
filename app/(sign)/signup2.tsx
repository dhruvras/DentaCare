import { useSignup } from '@/context/SignUpContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Signup2() {
    const { signupData, setSignupData } = useSignup();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Page 2</Text>
      <Text style={styles.info}>Full Name: {signupData.fullname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { color: 'white', fontSize: 18 },
  info: { color: 'lightblue', fontSize: 16 },
});
