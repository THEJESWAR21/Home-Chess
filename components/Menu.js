import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Menu({ navigation }) {
  const [time, setTime] = useState([
    { name: '5',seconds: '00',  id: '1' },
    { name: '10',seconds: '00', id: '2' },
    { name: '15',seconds: '00', id: '3' },
    { name: '20',seconds: '00', id: '4' },
    { name: '25',seconds: '00', id: '5' },
    { name: '30',seconds: '00', id: '6' },
    { name: '35',seconds: '00', id: '7' },
    { name: '40',seconds: '00', id: '8' },
    { name: '45',seconds: '00', id: '9' },
    { name: '50',seconds: '00', id: '10' },
  ]);

  return (
    <View style={styles.container}>
        
<FlatList 
        numRows={1}
        keyExtractor={(item) => item.id} 
        data={time} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Timer', item)}>
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: '#18dcff',
    fontSize: 39,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});