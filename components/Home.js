import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//default App
export default function Home(){
  
  return(
    <View style={styles.container}>
         <View style={styles.box1}>
           <Text style={styles.titletext}>0:00</Text>
           <View style={styles.circle} />
           

         </View>
        <View style={styles.box2} >
        <View style={styles.Start} />
        <Text style={styles.titletext2}>0:00</Text>
        </View>
        
        
    </View>
  )
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    color: '#fff',
  },
  box1: {
    width: 411,
    height: 330,
    backgroundColor: '#fff',
  },
  box2: {
    width: 411,
    height: 330,
    backgroundColor: '#000',
  },
  titletext: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 100,
    marginTop: 90,
    marginLeft: 110,
  },
  titletext2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 100,
    top: 10,
    marginLeft: 110,
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: '#000',
    borderRadius: 60,
    marginLeft: 320,
    bottom: 210,
  },

  Start: {
    width: 90,
    height: 90,
    backgroundColor: '#000',
    borderRadius: 60,
    marginLeft: 160,
    borderWidth:  5,
    borderColor: 'white',
    bottom: 40,
  },
})

