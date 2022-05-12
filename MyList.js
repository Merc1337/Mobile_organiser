
import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';





export default function MyList({el, delHandler}) {


  return (
    <TouchableOpacity onLongPress={ () => delHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
    marginTop: 20,
    width: '60%',
    marginLeft: '20%'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
