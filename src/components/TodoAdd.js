import {observer} from 'mobx-react';
import {Button, TextInput, StyleSheet} from 'react-native';
import store from '../store/store';
import React from 'react';

const TodoAdd = observer(() => {
  return (
    <>
      <TextInput style={styles.input} placeholder="type here" onChangeText={e => {store.newTodo = e}} value={store.newTodo} />
      <Button title="add todo" onPress={() => store.addTodo()}/>
    </>
  )
})
const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    width: '95%',
    alignSelf: 'center',
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    padding: 5
  }
})
export default TodoAdd
