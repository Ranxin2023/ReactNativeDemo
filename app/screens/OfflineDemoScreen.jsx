import React , {useState}from 'react'
import {SafeAreaView,StyleSheet,  View, Text, TextInput}from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const OfflineDemoScreen=()=>{
    const [input, setInput]=useState('')
    const [storedData, setStoredData]=useState('')
    const saveData=async()=>{
        try{
            await AsyncStorage.setItem('userInput', JSON.stringify(input))
            console.log('successfully store the input')
        }
        catch(error){
            console.log('Fail to save the data', error)
        }
    }
    const getData=async()=>{

    }
    return (
        <SafeAreaView style={styles.container}>
             <Text style={styles.title}>AsyncStorage Example</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter something"
                value={input}
                onChangeText={setInput}
            />
            <Button title="Save Data" onPress={saveData} />
            <Button title="Retrieve Data" onPress={getData} />
            <Text style={styles.result}>Stored Data: {storedData}</Text>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
    justifyContent: 'center',
    padding: 16,
    },
})
export default OfflineDemoScreen