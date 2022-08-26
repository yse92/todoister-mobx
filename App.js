import React from 'react';
import {View} from 'react-native'
import TodoAdd from './src/components/TodoAdd';
import TodoList from './src/components/TodoList';
import TopBar from './src/components/TopBar'


const App = () => {
  console.log('render')
  return (
    <View style={{flex: 1,  backgroundColor: 'orange'}}>
        <TopBar />
        <TodoList />
        <TodoAdd />
    </View>
  )
};
export default App;
