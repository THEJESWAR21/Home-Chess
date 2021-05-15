import React, { useState }from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
//default App
export default function Timer(props){
  const navigation = useNavigation();
  const [iconName, setIconName] = useState("play");

  function countDown(){
    setInterval(function(){
      if(timeLeft <= 0) {
        clearInterval(timeLeft = 0)
      }
      timeLeftDisplay.innerHTML = timeLeft
      timeLeft -=1
    },
   )
  }
  return(
    <View style={styles.container}>
      <TouchableWithoutFeedback >

  {/* White player box */}
  
      <View style={styles.box1}>
           <Text style={styles.titletext}>{props.route.params.name}</Text>
           
          
           <View style={styles.circle}>
           
           <TouchableOpacity onPress={() => navigation.navigate('Home')} >
           <FontAwesome5   size={40} style={styles.menuicon}  color='white'
           name={'arrow-right'}/>
             </TouchableOpacity>
           </View>
           

         </View>
      </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback >

      {/* Black player box */}

    <View style={styles.box2}  >
        
        <View style={styles.Pause} onPress={countDown}> 
<TouchableOpacity>
    <FontAwesome5 size={40} style={styles.Pauseicon}  color='white' name={'pause'}/>
</TouchableOpacity>

      
        </View>
        <TouchableOpacity>
        <View style={styles.restart}>
          <FontAwesome5 size={40} style={styles.restartIcon}  color='white' name={'undo-alt'}/>
          </View>
          
</TouchableOpacity>
        <Text style={styles.titletext2}>{props.route.params.name}</Text>
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