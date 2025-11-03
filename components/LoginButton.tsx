import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function LoginButton() {
  return (
    <View style={styles.frame}>
      <Text style={styles.button_text}>Continue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    frame:{
        width: '85%',
        height: 50,
        backgroundColor: '#00606a',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4, // for Android shadow
        paddingHorizontal:60,
        marginTop:50,
    },
    button_text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
})