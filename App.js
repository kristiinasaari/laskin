//import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

 {/*Kommenttikenttä*/}

export default function App() {
  const [result, setResult] = useState('');
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');

  const initialFocus = useRef(null);


  const calculate = operator => {                         
    console.log(operand1, operand2, operator);
    const [number1, number2] = [Number(operand1), Number(operand2)];
    switch (operator) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
    }
    setOperand1('');
    setOperand2('');
    initialFocus.current.focus();
  }


  return (
    <View style={styles.container}>                           {/*Ei ole määritelty suuntaa joten kaikki menee pystyyn*/}
      <Text>Result: {result} </Text>                          {/*Result: normi tekstinä, vastaus objektina*/}

      <TextInput style={styles.input} ref={initialFocus}      
        keyboardType='number-pad'
        onChangeText={text => setOperand1(text)}
        value={operand1}>
      </TextInput>

      <TextInput style={styles.input}                         
        keyboardType='number-pad'
        onChangeText={text => setOperand2(text)}
        value={operand2}>
      </TextInput>

      <View style={styles.operators}>                         {/*Button on vähän köyhä komponentti, joten erikseen view komponentti jolle määritellään flexdirection row eli tämän sisällä juoksee vasemmalta oikealle*/}

        <View style={styles.buttons}>                         {/*Ensimmäinen nappi*/}
          <Button title='+' onPress={() => calculate('+')}> </Button>
        </View>

        <View style={styles.buttons}>                         {/*Toinen nappi*/}
          <Button title='-' onPress={() => calculate('-')}> </Button>
        </View>

      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {                              //expo init pohjasta joten sen tyylit
    flex: 1,                                //Tarkoittaa sitä että täyttää kaiken sille käytössä olevan tilan
    backgroundColor: '#fff',
    alignItems: 'center',                   //Kaikki pakataan keskelle sekä pysty että vaakasuunnassa, se on niinku lähtökohtana
    justifyContent: 'center',
  },
  input : {
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: '50%'
  },
  operators: {                              //Tällä saadaan napit vaakasuuntaan
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttons: {
    width: '20%'
  }

});