import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button,TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import MyList from '../components/MyList'




export default function ListChanger({addHandler, navigation}) {

  const [text, setText] = useState('');


  const onChange = (text) => {
    setText(text);
  }



  return (

    <View style={{padding: '8%'}}>
    <TextInput style={styles.input} onChangeText={onChange} placeholder='Введите задачу'></TextInput>
    <TouchableOpacity style={styles.button} onPress={() => addHandler(text)} title='Добавить задачу'>
    <Text>Добавить задачу</Text>
    </TouchableOpacity>
    </View>
  );    
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    padding: 10,
  },
  button: {
  alignItems: "center",
  marginTop: '3.5%',
  fontFamily: 'roboto'
  }
});
