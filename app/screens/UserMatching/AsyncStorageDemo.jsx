import React, {useState, useEffect, useContext} from 'react'
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableHighlight, View}from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmailContext from './EmailContext';
import { useNavigation } from 'expo-router';
const AsyncStorageScreen=()=>{
    const navigation=useNavigation()
    const {email}=useContext(EmailContext)
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
    const navigateBack=async()=>{
        saveUserInfo()
        navigation.goBack()
    }
    const saveUserInfo=async()=>{
        console.log("saving info")
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
    const longSaveUserInfo=async()=>{
        console.log("long saving info and do nothing")
        // try{
        //     await AsyncStorage.setItem('name', name)
        //     await AsyncStorage.setItem('age', age)
        //     await AsyncStorage.setItem('gender', gender)
        //     console.log("successfully saving all the user info")
        // }
        // catch(error){
        //     console.error("error in storing the preference")
        // }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
                        <Image
                            source={require("../../../assets/images/backArrow.png")}
                            style={styles.backArrow}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Enter User Info</Text>
                </View>
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
    
          {/* <Button title="Save Information" onPress={saveUserInfo} /> */}
          <TouchableOpacity
          onPress={saveUserInfo}
          onLongPress={longSaveUserInfo}
          >
            <View style={styles.submitButton}>
                <Text style={styles.ButtonText}>Save Information</Text>
            </View>
          </TouchableOpacity>
          <TouchableHighlight
          underlayColor='#107500'
          onPress={saveUserInfo}
          style={styles.changeContextButton}
          >
            <View >
                <Text style={styles.ButtonText}>Color Information</Text>
            </View>
          </TouchableHighlight>

          <Text style={{ marginTop: 20 }}>Saved Info:</Text>
          <Text>Name: {name}</Text>
          <Text>Age: {age}</Text>
          {/* <Text>Birthday: {birthday}</Text> */}
          <Text>Gender: {gender}</Text>
          <Text>Email: {email}</Text>
        </SafeAreaView>
      );
}
const styles=StyleSheet.create({
    container:{
        padding:20
    },
    headerTitle: {
        // fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        fontWeight:'bold',
        color: '#062236',
        marginHorizontal:30,
        // alignSelf:'center'
    },
    title:{
        fontSize:20,
        marginTop:40,
        fontWeight:'bold'
    }, 
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 44,
        marginBottom: 20,
        marginHorizontal: 16,
    },
    backButton: {
        marginRight: 52,
    },
    backArrow: {
        width: 24,
        height: 24,
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
    },
    submitButton:{
        width:300,
        height:50, 
        backgroundColor:'#1EA7B4',
        borderRadius:30,
        alignSelf:'center'
    },
    ButtonText:{
        alignSelf:'center',
        marginVertical:10,
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    changeContextButton:{
        width:300,
        height:50, 
        backgroundColor:'#751005',
        borderRadius:30,
        alignSelf:'center',
        marginTop:30
    }
})
export default AsyncStorageScreen