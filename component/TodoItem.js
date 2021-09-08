import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoItem({item, deleteTodo}) {
    return (
			<TouchableOpacity onPress={() => deleteTodo(item.id)}>
				<View  style={styles.item}>
					<Text>{item.todo}</Text>
					<MaterialIcons name="delete" size={18} color="#333" />
				</View>
			</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	
	item: {
		padding: 15,
		marginTop: 15,
		backgroundColor: '#ededed',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// fontSize: 18
	}
})
