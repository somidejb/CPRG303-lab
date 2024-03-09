import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

export default function App() {
  const [tasks, setTasks] = useState([
    { text: 'Sleep', key: '1' },
    { text: 'Eat', key: '2' },
    { text: 'Cry', key: '3' },
  ]);

  const addTask = (text) => {
    setTasks((prevTasks) => {
      return [{ text, key: Math.random().toString() }, ...prevTasks];
    });
  };

  const deleteTask = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ToDoForm submitHandler={addTask} />
        <ToDoList tasks={tasks} clickHandler={deleteTask} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
});