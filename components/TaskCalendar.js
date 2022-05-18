import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import {Calendar, CalendarList, Agenda, Arrow} from 'react-native-calendars';
import { Card } from 'react-native-paper';


let dateArr = []
let editedDateArr = []

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};



export default function App() {

  try{
    for (let i = 0; i<global.MainList.length; i++) {
      dateArr[i] = Date(global.MainList[i].date)
    }
    for (let i = 0; i<global.MainList.length; i++) {
      let test = new Date(dateArr[i])
      editedDateArr[i] = test.toISOString().split('T')[0]
    }
  }
  catch (e){
    //error
  }
    let markedDay = {}
    editedDateArr.map((item) => {
        markedDay[item] = {
          selected: true,
          marked: true,
          dotColor: 'red',
          selectedColor: 'purple'
        };
      });

  
console.log(editedDateArr)

  return (
    
    <View style={styles.container}>
    <ImageBackground source={require('../back.jpg')} resizeMode='cover' style={{width: '100%', height: '100%', justifyContent: 'center'}}>
      <Card style={styles.card}>
        <Calendar
  current={Date.now()}
  onDayPress={day => {
    console.log('selected day', day);
  }}
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MMMM yyyy'}
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  hideArrows={false}
  hideExtraDays={true}
  disableMonthChange={true}

  firstDay={1}
  hideDayNames={false}
  showWeekNumbers={false}
  onPressArrowLeft={subtractMonth => subtractMonth()}
  onPressArrowRight={addMonth => addMonth()}
  disableAllTouchEventsForDisabledDays={true}
  enableSwipeMonths={true}
  markingType={'multi-dot'}
  markedDates={markedDay}
/>
      </Card>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  card: {
    marginLeft: '3%',
    marginRight: '3%'
  }
});
