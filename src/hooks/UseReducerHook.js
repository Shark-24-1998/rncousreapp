import React, {useReducer, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//action={ type:'ADD',payload:}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: Date.now().toString(), text: action.payload}];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add a task"
      />
      <Button
        title="Add"
        onPress={() => {
          dispatch({type: 'ADD_TODO', payload: task});
          setTask('');
        }}
      />

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch({type: 'REMOVE_TODO', payload: item.id});
              }}>
              <Text style={styles.removeText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 , backgroundColor:"white", padding:30},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginLeft: 20},
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  removeText: {color: 'red', fontSize: 18},
});

export default TodoApp;