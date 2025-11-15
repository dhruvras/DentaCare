import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomButton({
  task,
  text,
  state,
}: {
  task: () => void;
  text: string;
  state: boolean;
}) {
  return (
    <TouchableOpacity onPress={task} disabled={!state}>
      <View style={[styles.frame, !state && styles.disabled]}>
        <Text style={styles.heading}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: '90%',
    height: 60,
    backgroundColor: '#02505e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

    // ✅ Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    // ✅ Elevation for Android
    elevation: 6,
  },

  // 👇 Disabled (faded) style
  disabled: {
    opacity: 0.3, // fades out the button
    backgroundColor: '#02505e', // lighter version of your color
  },

  heading: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 90,
  },
});
