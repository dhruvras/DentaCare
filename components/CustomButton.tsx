import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function CustomButton({task, text}: {task: ()=>void, text: string}) {
  return (
    <TouchableOpacity onPress={task}>
        <View style={styles.frame}>
            <Text style={styles.heading}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    frame:{
        width: '90%',
        height: 60,
        backgroundColor: '#02505e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,


    },
    heading:{
        color:'#ffffff',
        fontSize:28,
        fontWeight:'bold',
        marginHorizontal:100,
    }
})