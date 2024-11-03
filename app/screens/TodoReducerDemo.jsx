import React, {useState, useReducer}from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, View, Text, TextInput } from 'react-native'

function todoReducer(todos, action){
    // console.log(`dispatch action type ${action.type}`)
    switch(action.type){
        case 'ADD_TODO':
            return [...todos, { id: Date.now(), text: action.payload }]
        case "REMOVE_TODO":
            return todos.filter(todo=>todo.id !== action.payload)
        default:
            return todos
    }
}

const TodoReducerScreen=()=>{
    const [todos, dispatch]=useReducer(todoReducer, [])
    const [newTodo, setNewTodo]=useState('')
    const handleAddTodo=()=>{
        if (newTodo.length>0&&newTodo.trim() !== '') {
            dispatch({type: 'ADD_TODO', payload:newTodo})
            setNewTodo('')
        }
    }
    const handleRemoveTodo=(id)=>{
        dispatch({type: "REMOVE_TODO", payload:id})
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text>To-do List</Text>
            <TextInput
            style={styles.input}
            placeholder='add a new task'
            value={newTodo}
            onChangeText={setNewTodo}/>
            <Button title="Add Todo" onPress={handleAddTodo} />
            <FlatList
                data={todos}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>(
                    <View style={styles.todoItem}>
                        <Text style={styles.todoText}>{item.text}</Text>
                        <Button title="Remove" onPress={() => handleRemoveTodo(item.id)} />
                    </View>
                )}
            />
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
      },
      todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      },
      todoText: {
        fontSize: 18,
      },
})
export default TodoReducerScreen