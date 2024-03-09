import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TodoItemList from './TodoItemList';

const ToDoList = ({ tasks, clickHandler }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TodoItemList item={item} clickHandler={clickHandler} />
        )}
        keyExtractor={(item) => item.key.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

export default ToDoList;