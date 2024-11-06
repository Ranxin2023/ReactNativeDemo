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
        <View style={styles.container}>
          <Text style={styles.title}>Enter your information:</Text>
          <View style={styles.userInputContainer}>

            <Text style={styles.userInfo}>Name: </Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.userTextInput}
            />
          </View>
          <View style={styles.userInputContainer}>
            <Text style={styles.userInfo}>Age: </Text>
          <TextInput
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            style={styles.userTextInput}
            />
          
            </View>
          <View style={styles.userInputContainer}>
            <Text style={styles.userInfo}>Gender: </Text>
          <TextInput
            placeholder="Gender"
            value={gender}
            onChangeText={setGender}
            style={styles.userTextInput}
            />
            </View>
    
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
    container:{
        padding:20
    },
    title:{
        fontSize:20,
        marginTop:40,
        fontWeight:'bold'
    }, 
    userInputContainer:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'left'
    },
    userTextInput:{
        borderBottomWidth:1,
        marginBottom:20,
        fontSize:16,
        width:300
    },
    userInfo:{
        fontSize:16,
        marginTop:5,
        marginRight:10,
        width:60
    }
})
export default AsyncStorageScreen