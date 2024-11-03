import React, {useState, useEffect} from 'react'
import {
    Text, 
    View
}from 'react-native'
const FunctionalCounterScreen=()=>{
    const [count, setCount]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prevCount)=>{
                if(prevCount>=100){
                    clearInterval(interval)
                    return prevCount
                }
                return prevCount +1
            })
        }, 100)
        return ()=>clearInterval(interval)
    }, [])
    return (
        <View>
            <Text>This is inside counter function</Text>
            <Text>Count: {count}</Text>
        </View>
    )
}

export default FunctionalCounterScreen