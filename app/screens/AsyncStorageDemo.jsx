import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, TextInput, Button}from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const AsyncStorageScreen=()=>{
    const [name, setName]=useState('')
    const [age, setAge]=useState(20)
    const [gender, setGender]=useState('')
    useEffect(()=>{
        const loadPreferences=async()=>{
            try{
                const storedName=await AsyncStorage.getItem('name')
                const storedAge=await AsyncStorage.getItem('age')
                const storedGender=await AsyncStorage.getItem('gender')
                if(storedName){
                    setName(storedName||'')
                }
                if(storedAge){
                    setAge(storedAge||20)
                }
                if(storedGender){
                    setGender(storedGender||'')
                }
                console.log("successfully loading all the info")
            }
            catch(error){
                console.error("error in fetching the preference")
            }
        }
        loadPreferences()
    }, [])
    const saveUserInfo=async()=>{
        try{
            await AsyncStorage.setItem('name', name)
            await AsyncStorage.setItem('age', age)
            await AsyncStorage.setItem('gender', gender)
            console.log("successfully saving all the user info")
        }
        catch(error){
            console.error("error in storing the preference")
        }
    }
    return (
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>Enter your information:</Text>
    
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          
          <TextInput
            placeholder="Gender"
            value={gender}
            onChangeText={setGender}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
    
          <Button title="Save Information" onPress={saveUserInfo} />
          <Text style={{ marginTop: 20 }}>Saved Info:</Text>
          <Text>Name: {name}</Text>
          <Text>Age: {age}</Text>
          {/* <Text>Birthday: {birthday}</Text> */}
          <Text>Gender: {gender}</Text>
        </View>
      );
}
const styles=StyleSheet.create({
    title:{
        fontSize:20,
        marginTop:40,
        fontWeight:'bold'
    }
})
export default AsyncStorageScreen