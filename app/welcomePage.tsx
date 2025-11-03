import WelcomeButton from '@/components/WelcomeButton'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
export default function index() {
  return (
    <View style={styles.mainFrame}>
      <Image  source={require('../assets/images/logo.png')} style={styles.logo_image}/>
      <Text style={styles.heading_text}>Let's make that smile more</Text>
      <Text style={styles.heading_text2}>beautiful ;)</Text>
      <WelcomeButton/>
    </View>
  )
}

const styles = StyleSheet.create({
    mainFrame:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#9ae1e0',
      },
    logo_image:{
      height:400,
      width:400,
      position:'absolute',
      top:5,

    },
    heading_text:{
      color:'#015f6a',
      fontSize:20,
      fontWeight:'bold',
    },
    heading_text2:{
      color:'#015f6a',
      fontSize:25,
      fontWeight:'bold',
      paddingTop:10,
      fontStyle:'italic',
    },

}) 