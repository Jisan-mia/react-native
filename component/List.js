import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [favMovies, setFavMovies] = useState([
    {name: 'Lord of the Rings', id:'1'},
    {name: 'Endgame', id:'2'},
    {name: 'SpiderMan', id:'3'},
    {name: 'Sherlock Holmes', id:'4'},
    {name: 'Jurassic World', id:'5'},
    {name: 'The Prestige', id:'6'},
    {name: 'Catch me if you can', id:'7'},
  ])

  const pressMovieItem = (id) => {
    setFavMovies(favMovies.filter(movie => movie.id !== id))
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView style={{flex:1}}>
      {
        favMovies.map(movie => (
          <View key={movie.key}>
            <Text style={styles.movieItem}>{movie.name}</Text>
          </View>
        ))
      }
      </ScrollView> */}

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={favMovies}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressMovieItem(item.id)}>
            <Text style={styles.movieItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    marginHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  movieItem: {
    marginTop: 30,
    padding: 20,
    backgroundColor: 'pink',
    fontSize: 20,
    marginHorizontal: 10
  }
 

});
