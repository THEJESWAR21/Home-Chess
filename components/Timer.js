import React, { useState }from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//default App
export default function Timer({navigation}){

  const Home = () => {
    navigation.navigate('Home');
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

  {/* White player box */}
  
      <View style={styles.box1}>
           <Text style={styles.titletext}>0:00</Text>
           
          
           <View style={styles.circle}>
           
           <TouchableOpacity onPress={Home} >
           <FontAwesome5   size={40} style={styles.menuicon}  color='white'
           name={'arrow-right'}/>
             </TouchableOpacity>
           </View>
           

         </View>
      </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback >

      {/* Black player box */}

    <View style={styles.box2} onPress={buttonPress} name={backgroundColor2} >
        
        <View style={styles.Pause}> 
<TouchableOpacity>
    <FontAwesome5 size={40} style={styles.Pauseicon}  color='white' name={'pause'}/>
</TouchableOpacity>

      
        </View>
        <TouchableOpacity>
        <View style={styles.restart}>
          <FontAwesome5 size={40} style={styles.restartIcon}  color='white' name={'undo-alt'}/>
          </View>
          
</TouchableOpacity>
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
    backgroundColor: '#0FD4FF',
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
    right: 10,
    top: 6
  },

  Pause: {
    width: 90,
    height: 90,
    backgroundColor: '#000',
    borderRadius: 60,
    borderWidth:  5,
    borderColor: 'white',
    position: 'relative',
    bottom: 40,     
    marginLeft: 80,
  },

  menuicon: {
    left: 23,
    top: 18,
  },
  Pauseicon: {
    position: 'relative',
    marginTop: 20,
    marginLeft: 23,
    
  },
restart: {
  width: 90,
  height: 90,
  backgroundColor: '#000',
  borderRadius: 60,
  borderWidth:  5,
  borderColor: 'white',
  position: 'relative',
  marginLeft: 240,
  bottom: 130,
},
restartIcon:{
  position: 'relative',
  marginTop: 20,
  marginLeft: 20,
}

  
});