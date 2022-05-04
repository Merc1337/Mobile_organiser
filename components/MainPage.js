import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, StatusBar,ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 



export default function App({navigation}) {
  return(
  <View style={styles.main}>
  <ImageBackground source={require('../back.jpg')} resizeMode='cover' style={{width: '100%', height: '100%', justifyContent: 'center'}}>
  <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Task')} >

<Text style={styles.paragraph}><Ionicons name="md-shield-checkmark-sharp" size={24} color="white" /> Задачи</Text>
</TouchableOpacity>
  <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('TaskCalendar')} >

<Text style={styles.paragraph}><FontAwesome5 name="calendar-day" size={24} color="white"/> Календарь</Text>
</TouchableOpacity>
 <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('About')}>
<Text style={styles.paragraph}><Ionicons name="person" size={24} color="white" /> О приложении</Text>
</TouchableOpacity>
</ImageBackground>

  </View>

  )
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize:26,
    fontWeight: 'regular',
    color: 'white'


  },
   button: {
    alignItems: "center",
    backgroundColor: "#954AA2", 
    padding: 10,
    marginTop: '3%'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    
  },

});
