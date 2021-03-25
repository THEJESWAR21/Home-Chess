import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native'
import { Button } from 'react-native-paper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Menu({navigation}){

    const Home = () => {
        navigation.navigate('Home');
      }

    return(
        <ScrollView>
             <View style={styles.menuContainer}>
               <View style={styles.circle}>
           
           <TouchableOpacity onPress={Home} >
           <FontAwesome5   size={40} style={styles.menuicon}  color='white'
           name={'arrow-left'}/>
             </TouchableOpacity>
           </View>

            <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>05:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>10:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>15:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>20:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>25:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>30:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>40:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>45:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>50:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>55:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>01:00:00</Text>

                </Button>
                <Button style={styles.options}  mode="contained" onPress={() => console.log('')}>
            <Text style={styles.buttonText}>02:00:00</Text>

                </Button>
                

        </View>
        </ScrollView>
       
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