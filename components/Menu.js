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
        <ScrollView>
             <View style={styles.menuContainer}>
               <View style={styles.circle}>
           
           <TouchableOpacity onPress={Home}  >
           <FontAwesome5    size={40} style={styles.menuicon}  color='white'
           name={'arrow-left'}/>
             </TouchableOpacity>
           </View>
               {/* Button Code */}
               <FlatList
                data={time}
                style={styles.options} 
                renderItem={({ item }) => (
                    <TouchableOpacity >
                        <Text style={styles.buttonText}>{ item.time }</Text>
                    </TouchableOpacity>
                )}
               />
        


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
                 {/* Button Code End */}

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