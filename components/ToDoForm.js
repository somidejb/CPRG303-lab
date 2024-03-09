import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Add new todo...'
        onChangeText={changeHandler}
        value={text}
      />
      <Button onPress={() => submitHandler(text)} title='Add' color='black' />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default ToDoForm;