import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native'

export const GridComponent = () => {
    const [isFilled, setIsFilled] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity style ={[styles.button, isFilled && styles.filledButton]}
            onPress={()=> setIsFilled((prev)=>!prev)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    button: {
        width:20,
        height:20,
        backgroundColor:'grey'
    },
    filledButton:{
        backgroundColor:'blue'
    }

})