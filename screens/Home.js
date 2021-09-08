import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home ({navigation}) {

  const [review, setReview] = useState([
    {title: 'It is amusing, wanna go again', rating: 5, body: 'lorem ipsum', key: '1' },
    {title: 'Wow! how feel I got there!', rating: 4, body: 'lorem ipsum', key: '2' },
    {title: 'The fantastic one, rewatch', rating: 3, body: 'lorem ipsum', key: '3' }
  ])
  const user = {
    name: 'jisan'
  }
  return (
    <View style={globalStyles.container}>
      {/* <FlatList
        data={review}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      /> */}
      <Text onPress={() => navigation.navigate('ReviewDetails', user)}>Go Detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
