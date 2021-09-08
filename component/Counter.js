import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Counter() {

		const[count, setCount] = useState(0)
		const pressHandler = () => {
			setCount(count -1)
		}

    return (
        <View style={styles.buttonContainer}>
					<Button title='INCREMENT' onPress={() => setCount(count+1)}/>
					<Text style={styles.counterStyle}>{count}</Text>
					<Button title='DECREMENT' onPress={pressHandler}/>
      </View>
    )
}

const styles = StyleSheet.create({
	buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'center'
  },
  counterStyle: {
    margin: 10,
    textAlign: 'center',
    fontSize: 18,
  },
})
