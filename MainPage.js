import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { Feather, Ionicons } from '@expo/vector-icons'; 



export default function App({navigation}) {
  return(
  <View style={styles.main}>
  
  
  <TouchableOpacity
  style={styles.button}
  onPress={() =>
            navigation.navigate('Task')
          }
>
<Text style={styles.paragraph}><Ionicons name="md-shield-checkmark-sharp" size={24} color="black" /> Задачи</Text>
</TouchableOpacity>
  <TouchableOpacity
  style={styles.button}
  onPress={() =>
            navigation.navigate('TaskPage')
          }
>

<Text style={styles.paragraph}><Feather name="check-circle" size={24} color="black" /> Цели</Text>
</TouchableOpacity>
 <TouchableOpacity
  style={styles.button}
  onPress={() =>
            navigation.navigate('TaskPage')
          }
>
<Text style={styles.paragraph}><Feather name="user-check" size={24} color="black" /> Отчёты</Text>
</TouchableOpacity>
  
  
  
  </View>

  )
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize:26,
    fontWeight: 'regular',


  },
   button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: '3%'
  },
  main: {
    marginTop: '10%',
  }

});
