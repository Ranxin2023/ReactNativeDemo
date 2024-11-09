
import React, {useState}from 'react'
import { useAge } from './AgeContext'
import {View, Text, TextInput, StyleSheet} from 'react-native'
const AgeContextMathcingScreen=()=>{
    const {age, setAge}=useAge()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Age Matching (Context)</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Age:</Text>
        <TextInput
          style={styles.input}
          value={age.toString()}
          onChangeText={(value) => setAge(parseInt(value, 10) || 0)}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.result}>Current Age (Context): {age}</Text>
    </View>
  );
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
      },
      label: {
        fontSize: 16,
        marginRight: 10,
      },
      input: {
        borderBottomWidth: 1,
        fontSize: 16,
        flex: 1,
      },
      result: {
        fontSize: 18,
        marginTop: 20,
      },
})
export default AgeContextMathcingScreen