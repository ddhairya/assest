
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {View, StyleSheet, Text} from 'react-native';


const Datetime = () => {
    const [date, setDate] = useState(new Date())
    console.log(date)
    const [time, setTime] = useState(new Date())
    console.log(time)
    return (
      <View style = {styles.viewDate}>
          <View>
       <DatePicker
        mode='date'
        date={date}
        onDateChange={setDate}
        />
       </View>
           <View>
        <DatePicker
        mode='time'
        date={time}
        onDateChange={setTime}
      />
        </View>
       
       
       
      
      
      </View>
    );
  };

const styles = StyleSheet.create({
    viewDate: {
        flexDirection: 'row',
      
    }
});
export default Datetime;
  