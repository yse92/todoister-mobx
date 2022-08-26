import {observer} from 'mobx-react';
import store from '../store/store';
import {Button, TextInput, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';

const TodoListItems = observer(() => {
  return (
    <>
      {
        store.todos && store.todos.map(todo => <View style={styles.container}>
          <CheckBox
            style={styles.checkbox}
            value={todo.done}
            onValueChange={()=> {todo.done = !todo.done}} />
          <TextInput
            style={styles.input}
            value={todo.text}
            onChangeText={e => {todo.text = e}} />
          <TouchableOpacity style={styles.button} onPress={() => {store.removeTodo(todo.id)}}>
            <Image source={require('../assets/delete.png')} style={styles.image} />
          </TouchableOpacity>
        </View>)
      }
    </>
  );
})

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  checkbox: {
    marginRight: 20,
    width: 20,
    height: 20
  },
  input: {
    fontSize: 20,
    width: '70%',
  },
  button: {
    marginLeft: 20,
  },
  image: {

  }
})

export default TodoListItems
