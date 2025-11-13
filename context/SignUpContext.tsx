import { useSignup } from '@/context/SignUpContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Signup2() {
  const { signupData } = useSignup(); // ✅ destructure correctly

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Page 2</Text>
      <Text style={styles.info}>Full Name: {signupData.fullname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 18 },
});
