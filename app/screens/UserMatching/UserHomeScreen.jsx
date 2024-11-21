import React, {useState, useContext}from 'react'
import {SafeAreaView,StyleSheet, View, Text, TextInput, TouchableOpacity}from 'react-native'
import EmailContext from "./EmailContext"
import { useNavigation } from 'expo-router'

const UserHomeScreen=()=>{
    const navigation=useNavigation()
    const {setEmail}=useContext(EmailContext)
    const [inputEmail, setInputEmail]=useState('')
    const checkAt=()=>{
        if(inputEmail.length==0){
            return false
        }
        for(const c of inputEmail){
            if(c=='@'){
                return true
            }
        }
        return false
    }
    const onLoginPress=()=>{
        if(inputEmail.length>0&&checkAt()){

            setEmail(inputEmail)
            navigation.navigate("Async Storage")
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.emailInputContainer}>
                <Text style={styles.enterEmailInfo}>Email:</Text>
                <TextInput
                onChangeText={setInputEmail}
                style={styles.emailTextInput}/>
            </View>
            <TouchableOpacity
            onPress={onLoginPress}
            style={styles.loginButton}>
                <View >
                    <Text style={styles.loginText}>Login</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:20
    },
    emailInputContainer:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'left'
    },
    emailTextInput:{
        borderBottomWidth:1,
        marginBottom:20,
        fontSize:16,
        width:300
    },
    enterEmailInfo:{
        fontSize:16,
        marginTop:5,
        marginRight:10,
        width:60
    },
    loginButton:{
        backgroundColor:'#1EA7B4',
        width:300, 
        height:50, 
        alignSelf:'center',
        marginTop:50, 
        borderRadius:30
    },
    loginText:{
        color:'white',
        fontSize:20,
        alignSelf:'center',
        marginVertical:10
    }
})
export default UserHomeScreen