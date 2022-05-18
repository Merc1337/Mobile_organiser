import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Button,TextInput, TouchableOpacity, ToastAndroid, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import MyList from '../components/MyList';
import ListChanger from '../components/Changer';
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function App({navigation}) {

  const [itemList, setItemList] = useState([{text: 'Новая задача', key: '1', date: Date(2022,4,12)}])
  const [buttonText, setButtonText] = useState('Сначала новые')
  


const setObjectValue = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage', jsonValue)
  } catch(e) {
    // save error
  }

  console.log('Done.')
}

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done. 1')
}
//clearAll();

const getMyObject = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage')
    const items = JSON.parse(jsonValue)
    if (items == null){
      setObjectValue([{text: 'Новая задача', key: '1', date: Date(2022,4,12)}])
    }
    else{setItemList(JSON.parse(jsonValue))}
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch(e) {
    // read error
  }

  console.log('Done.')

}


  const addHandler = (text) => {
    if (text){
      const newItem = {
        text: text, key: Math.random().toString(36).substring(7), date: Date.now()
      }
      const helpArr = [...itemList, newItem]
      console.log(helpArr)
      setItemList(helpArr)
      setObjectValue(helpArr)
      ToastAndroid.showWithGravityAndOffset(
      "Задача создана",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    }
  }


  const delHandler = (key) => {
   const helpDel = (list) => {
      return list.filter(itemList => itemList.key != key)
    }
    const editedArr = helpDel(itemList)
    setItemList(editedArr)
    console.log(itemList)
    setObjectValue(editedArr)
    ToastAndroid.showWithGravityAndOffset(
      "Задача удалена",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  const sortUpFunc = () =>{
    const reverse = (list) => {
      return list.reverse()
    }
    const editedArr = reverse(itemList)
    setItemList(editedArr)
    console.log(itemList)
    setObjectValue(editedArr)
    getMyObject()
    if (buttonText == 'Сначала новые'){
      setButtonText('Сначала старые')
    }
    else{
      setButtonText('Сначала новые')
    }
    ToastAndroid.showWithGravityAndOffset(
      "Отсортировано",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }   
  
  global.MainList = itemList
  useEffect(() => {
    getMyObject()
    
        

   
  }, [])


  return (
    <View style={styles.container}>
    <ImageBackground source={require('../back.jpg')} resizeMode='cover' style={{width: '100%', height: '100%'}}>
    <TouchableOpacity style={styles.sortButton} onPress={ () => sortUpFunc()}>
      <Text style={styles.textSortButtons1}>{buttonText}</Text>
    </TouchableOpacity>
    <FlatList data={itemList} renderItem={({item}) => (
      <MyList  el={item} delHandler={delHandler}></MyList>
    )}/>
    <ListChanger addHandler={addHandler}/>
    </ImageBackground>
    </View>
    
  );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',

  },
  sortButton:{
    alignSelf: "center",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: '3%',
    marginBottom: '5%',
    marginTop: '6%'
    
  }
});
