import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function InputTodo({addTodo}) {
  const [todoInput, setTodoInput] = useState('')

  const handleChange = (value) => {
    setTodoInput(value)
  }

  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder="New todo.."
        onChangeText={handleChange}
        defaultValue={todoInput}
      />

      <Button title="Add" onPress={() => {
        addTodo(todoInput);
        setTodoInput('') 
        }} color="coral" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd'
  }
})
