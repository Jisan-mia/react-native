import React, { useState } from "react";
import { Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Header from "../Header";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [todoList, setTodoList] = useState([
    {todo: 'Lord of the Rings', id:'1'},
    {todo: 'SpiderMan', id:'3'},
    {todo: 'Sherlock Holmes', id:'4'},
    {todo: 'Jurassic World', id:'5'},
    {todo: 'The Prestige', id:'6'},
    {todo: 'Catch me if you can', id:'7'},
  ])

  const pressMovieItem = (id) => {
    setFavMovies(favMovies.filter(movie => movie.id !== id))
  }

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter(todo => todo.id !== id)
    })
  }

  const addTodo = (todo) => {

    if(todo.length > 2) {
      setTodoList(prevTodos => {
        return [
          {todo: todo, id: Math.random().toString()},
          ...prevTodos,
        ]
      })
    } else {
      Alert.alert("Oh no..", "A todo must be at least 3 character", [
        {text: 'Understand', onPress:() => console.log('closed alert')}
      ]) 
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* input */}
          <InputTodo addTodo={addTodo}/>
          <View style={styles.list}>
            <FlatList 
              keyExtractor={(item) => item.id}
              data={todoList}
              renderItem={({item}) => (
                <TodoItem item={item} deleteTodo={deleteTodo} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
