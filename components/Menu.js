import React, { useState } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import { Button } from 'react-native-paper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Menu({navigation}){

    const Home = () => {
        navigation.navigate('Home');
      }

        const {time, setTime} = useState([
            {time : '5:00', key:"1"},
            {time : '10:00', key:"2"},
            {time : '15:00', key:"3"},
            {time : '20:00', key:"4"},
            {time : '25:00', key:"5"},
            {time : '30:00', key:"6"},
            {time : '40:00', key:"7"},
            {time : '45:00', key:"8"},
            {time : '50:00', key:"9"},
            {time : '55:00', key:"10"},
            {time : '01:00:00', key:"11"},
            {time : '02:00:00', key:"12"},
        ]);
      
   

    return(
     <FlatList
        data={time}
        renderItem={( item ) => (

        )}
    />
       
       
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