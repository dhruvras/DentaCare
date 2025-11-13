import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
export default function welcome() {
    const router = useRouter();
  return (
    <View style={styles.mainframe}>
        <Image source={require('../assets/images/logo.png')} style={styles.image}/>
        <Text style={styles.heading}>Let's make that smile beautiful</Text>
        <View style={styles.buttonframe}>
            <CustomButton text="Get Started" task={()=>{router.navigate('/(login)/login')}} state={false} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainframe:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9be1df'
    },
    image:{
        height:350,
        width:350,
        position:'absolute',
        top:30,
    },
    heading:{
        fontSize:24,
        color:'#00606b',
        fontWeight:'bold',
        fontStyle:'italic',
        position:'absolute',
        top:350,
    },
    buttonframe:{
        position:'absolute',
        bottom:80,
        width:'100%',
        alignItems:'center',
    }
})