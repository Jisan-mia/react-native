import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InputComponent() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState(null)
    return (
        <View style={styles.userInputContainer}>
					
					<Text>Enter Your Name: </Text>
					<TextInput 
							style={styles.inputStyle}
							multiline
							placeholder='E.g. John Doe' 
							onChangeText={(value) => setName(value)} />
	
					<Text>Enter your email:</Text>
					<TextInput 
							style={styles.inputStyle}
							placeholder='E.g. doe@gmail.com' 
							onChangeText={value => setEmail(value)} />

					<Text>Enter your age:</Text>
					<TextInput 
							keyboardType='numeric'
							style={styles.inputStyle}
							placeholder='E.g. 20'
							onChangeText={value => setAge(value)} />
			</View>

			<View>
					<Text>Name: {name} </Text>
					<Text>Email: {email}</Text>
					<Text>Age: {age}</Text>
			</View>
      </View>
    )
}

const styles = StyleSheet.create({
	userInputContainer: {
    padding: 20
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginTop: 5,
    width: 200,
  }
})
