import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function Menu(){
    return(
        <View style={styles.menuContainer}>
            <Text style={styles.randomText}>Menu Page</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    menuContainer:{
        flex: 1,
        color: '#fff',
    },
    randomText:{
        alignItems: 'center',
        alignContent: 'center',
    }
})