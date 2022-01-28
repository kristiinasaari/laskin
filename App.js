import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text, text1, text2, resultplus, resultminus } from 'react-native';

export default function App() {
  const [text, setText] = useState('');



  function addTogether() {                              //Laskee yhteen
    const resultplus = text1 + text2;
    setTotal(resultplus);
    Alert.alert('Alert', 'Result: ' + resultplus);
  }

  function subtract() {                                 //Miinustaa kaksi arvoa
    const resultminus = text1 + text2;
    setTotal(resultminus);
    Alert.alert('Alert', 'Result: ' + resultminus);
  }

  const buttonPressedplus = () => {                     //Plussaa kun painaa
    Alert.alert('Result: ' + resultplus); 
  };
  const buttonPressedminus = () => {                    //Miinusta kun painaa
    Alert.alert('Result: ' + resultminus); 
  };

  return (
    <View style={styles.container}>

      <View style={styles.container}>
      <Text>Result:</Text>
      <TextInput style={styles.input} onChangeText={text => setText(text1)} value={text}/>
      <TextInput style={styles.input} onChangeText={text => setText(text2)} value={text}/>
      </View>

      <View style={styles.buttons}>
        <Button 
          flexDirection= 'row'
          onPress={buttonPressedplus} title="+" />
        <Button 
          flexDirection= 'row'
          onPress={buttonPressedminus} title="-" />
        <StatusBar style="auto" />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:200  ,
    //padding:3, 
    borderColor: 'gray', 
    borderWidth: 1,
    justifyContent:'space-between',
    //keyboardType: 'numeric',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});