import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import TodoListItems from './TodoListItems';

const TodoList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TodoListItems />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  }
})

export default TodoList
