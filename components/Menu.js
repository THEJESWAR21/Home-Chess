import React, { useState } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import { Button } from 'react-native-paper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Menu({navigation}){

    const Home = () => {
        navigation.navigate('Home');
      }

        const {time, setTime} = useState([
            {time : '5:00'},
            {time : '10:00'},
            {time : '15:00'},
            {time : '20:00'},
            {time : '25:00'},
            {time : '30:00'},
            {time : '40:00'},
            {time : '45:00'},
            {time : '50:00'},
            {time : '55:00'},
            {time : '01:00:00'},
            {time : '02:00:00'},
        ]);
      
   

    return(
     <View></View>

       
       
        )
}

const styles = StyleSheet.create({
    menuContainer:{
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    randomText:{
        alignItems: 'center',
        alignContent: 'center',
    },
    options: {
        marginTop: 40,
        height: 70,
        width: 300,
        marginLeft: 50,
        backgroundColor: '#0FD4FF',


    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 40,
        
    },
    circle: {
        width: 90,
        height: 90,
        backgroundColor: '#000',
        borderRadius: 60,
        borderWidth:  5,
        position: 'relative',
        alignSelf : 'flex-end',
        marginTop: 10,
        marginRight: 20,
      },
      menuicon: {
        left: 23,
        top: 18,
      },
    
})