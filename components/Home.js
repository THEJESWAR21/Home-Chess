import React, { useState }from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//default App
export default function Home({navigation}){

  const Menu = () => {
    navigation.navigate('Menu');
  }
 
  

  const [iconName, setIconName] = useState("play");
  const [backgroundColor, setBackgroundColor] = useState('#fff')
  const [backgroundColor2, setBackgroundColor2] = useState('#000')

  const buttonPress = () => {
    if(backgroundColor2 == "#000" ){
      setIconName("#fff")
      }
      if(backgroundColor2 == "#fff"){
        setBackgroundColor2("#000")
      }
  }
  return(
    <View style={styles.container}>
      <TouchableWithoutFeedback >
        
      <View style={styles.box1}>
           <Text style={styles.titletext}>0:00</Text>
           
          
           <View style={styles.circle}>
           
           <TouchableOpacity onPress={Menu} >
           <FontAwesome5   size={40} style={styles.menuicon}  color='white'
           name={'bars'}/>
             </TouchableOpacity>
           </View>
           

         </View>
      </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback >
    <View style={styles.box2} onPress={buttonPress} name={backgroundColor2} >
        
        <View style={styles.Start}> 
<TouchableOpacity onPress={() => {
         if(iconName == "play" ){
          setIconName("pause")
          }
          if(iconName == "pause"){
            setIconName("play")
          }
}}>
    <FontAwesome5 size={40} style={styles.playicon}  color='white' name={iconName}/>
</TouchableOpacity>
      
        </View>
        <Text style={styles.titletext2}>0:00</Text>
        </View>
    </TouchableWithoutFeedback>

        
        
    </View>
  )
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    color: '#fff',
    
  },
  box1: {
   flex: 0.8,
    backgroundColor: '#fff',
    flexWrap: 'wrap'
  },
  box2: {
    flex: 0.8,
    backgroundColor: '#000',
    flexWrap: 'wrap'
  },
  titletext: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 100,
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  titletext2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 100,
    position: 'absolute',
    marginTop: 100,
    alignSelf: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  circle: {
    width: 90,
    height: 90,
    backgroundColor: '#000',
    borderRadius: 60,
    borderWidth:  5,
    position: 'absolute',
    alignSelf : 'flex-end',
    right: 8,
    top: 6
  },

  Start: {
    width: 90,
    height: 90,
    backgroundColor: '#000',
    borderRadius: 60,
    borderWidth:  5,
    borderColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 280
    
  },

  menuicon: {
    left: 23,
    top: 18,
  },
  playicon: {
    position: 'relative',
    marginTop: 20,
    marginLeft: 25,
    
  }
  
});