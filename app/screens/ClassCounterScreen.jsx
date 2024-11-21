import React, {Component} from 'react'
import {Text, View}from 'react-native'
class CounterScreenClass extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    startCounter=()=>{
        
    }
    stopCounter=()=>{
        clearInterval(this.interval)
        console.log("counter stopped")
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
            setCount((prevCount)=>{
                if(prevCount>=100){
                    clearInterval(interval)
                    return prevCount
                }
                return prevCount +1
            })
        }, 100)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return (
            <View>
                <Text>This is inside counter class</Text>
                <Text>Count: {this.state.count}</Text>
                <Button title="Stop Counter" onPress={this.stopCounter}></Button>
            </View>
        )
    }
}

export default CounterScreenClass