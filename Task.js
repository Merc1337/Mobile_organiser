import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button,TextInput } from 'react-native';
import Constants from 'expo-constants';
import MyList from '../components/MyList'
import ListChanger from '../components/Changer'



export default function App({navigation}) {

  const [itemList, setItemList] = useState([
    {text: 'Новая задача', key: '1'},
    {text: 'Ещё новая задача', key: '2'}
  ])



  const addHandler = (text) => {
    setItemList((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ... list
      ]
    })
  }


  const delHandler = (key) => {
    setItemList((list) => {
      return list.filter(itemList => itemList.key != key)
    });

  }



  return (
    <View style={styles.container}>
    <View style={styles.container}>
    <FlatList data={itemList} renderItem={({item}) => (
      <MyList el={item} delHandler={delHandler}></MyList>
    )}/>
    </View>
    <ListChanger addHandler={addHandler}/>
    </View>
  );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  secviev:{
    marginBottom: '5%',

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
  }
});
