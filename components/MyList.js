import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';


export default function MyList({el, delHandler}) {

  return (
    <View >

    <TouchableOpacity   onLongPress={ () => delHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#954AA2',
    borderWidth: 1,
    marginTop: 20,
    width: '60%',
    marginLeft: '20%',
    color: 'white',
  },
});
