import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
     <ImageBackground source={require('../back.jpg')} resizeMode='cover' style={{width: '100%', height: '100%', justifyContent: "center"}}>
      <Card style={styles.card}>
       <Card.Title title="Основная информация" titleStyle={styles.title}/>
         <Card.Content>
      <Paragraph style={styles.paragraph}>На главной странице представлены кнопки навигации.</Paragraph>
      <Paragraph style={styles.paragraph}>Самая первая из них ведёт к списку задач.</Paragraph>
      <Paragraph style={styles.paragraph}>Задачи можно: </Paragraph>
      <Paragraph style={styles.paragraph_list}>1. Создавать.</Paragraph>
      <Paragraph style={styles.paragraph_list}>2. Удалять.</Paragraph>
      <Paragraph style={styles.paragraph_list}>3. Сортировать.</Paragraph>
      <Paragraph style={styles.paragraph}>Вторая кнопка показывает календарь</Paragraph>
      <Paragraph style={styles.paragraph}>Дата создания задачи выделяется фиолетовым цветом</Paragraph>
    </Card.Content>
      </Card>
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
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    marginTop: '1%'
    
  },
  paragraph:{
    color: 'white',
    marginTop: '1%',
    fontSize: 16,
    
  },
  paragraph_list:{
    color: 'white',
    marginLeft: '3%',
    fontSize: 15,
  },
  card: {
    backgroundColor: '#954AA2',
    marginLeft: '3%',
    marginRight: '3%'
  }
});
