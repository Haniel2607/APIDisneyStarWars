import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/starships/');
  const parsed = await response.json();
  callback(parsed.results);
};

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Usando API do Star Wars</Text>
      <FlatList
          data={registros}
          keyExtractor={(item)=>item.name.toString()}
          renderItem={({item})=>
            <Text style={styles.item}>
            <Text>Nave: {item.name} {'\n'}</Text>
            <Text>Modelo: {item.model} {'\n'}</Text>
            <Text>Usando: {item.manufacturer} {'\n'}</Text>
            </Text>
          }
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    fontSize: 30,
    marginVertical: 30
  },
  item: {
    fontSize: 18,
    backgroundColor: '#00FFFF',
    paddingTop: 20,
    paddingLeft: 20,
    margin: 5,
    borderRadius: 20
  },
});
