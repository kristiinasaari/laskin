import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



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
    <View style={styles.container}>                           
      <Text>Result: {result} </Text>                          

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

      <View style={styles.operators}>                         

        <View style={styles.buttons}>                         
          <Button title='+' onPress={() => calculate('+')}> </Button>
        </View>

        <View style={styles.buttons}>                         
          <Button title='-' onPress={() => calculate('-')}> </Button>
        </View>

      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {                              
    flex: 1,                                
    backgroundColor: '#fff',
    alignItems: 'center',                   
    justifyContent: 'center',
  },
  input : {
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: '50%'
  },
  operators: {                              
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttons: {
    width: '20%'
  }

});