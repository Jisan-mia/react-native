import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetail ({route, navigation}) {

  const item = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> {item.title} </Text>
      <Text style={globalStyles.titleText}> {item.body} </Text>
      <Text style={globalStyles.titleText}> {item.rating} </Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})