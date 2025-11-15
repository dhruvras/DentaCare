import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Map image names to actual requires
const images = {
  scan: require('../assets/images/1.png'),
  chat: require('../assets/images/2.png'),
  appointment: require('../assets/images/3.png'),
  report: require('../assets/images/4.png'),
};

export default function CustomCard({ image, text , action}) {
  return (
    <TouchableOpacity style={styles.card} onPress={action} >
        <View >
            <Image 
                source={images[image]}
                style={styles.icon}
                resizeMode="contain"
            />
            <Text style={styles.label}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginBottom: 15,

    // Soft shadow like your sample
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0c1a30',
    textAlign: 'center',
  },
});
