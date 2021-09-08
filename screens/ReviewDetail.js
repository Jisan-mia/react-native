import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetail ({route, navigation}) {

  const user = route.params;
  console.log(user)

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}> {navigation.getParam('title')} </Text>
      <Text style={globalStyles.titleText}> {navigation.getParam('body')} </Text>
      <Text style={globalStyles.titleText}> {navigation.getParam('rating')} </Text> */}
      <Text>This is review detail: {JSON.stringify(user.name)} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})