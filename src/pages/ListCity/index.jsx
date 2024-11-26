import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';

import { styles } from '../ListCity/style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela
import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Api } from '../../../src/config/api';
import Input from '../../components/Input';
import List from '../../components/List';
import Header from '../../components/Header';
import { useWeather } from '../../context/WeatherContext';


export default function ListCity() {
    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [ search, setSearch ] = useState("");
    const { weatherCity, addCity } = useWeather();
   


// função para criar o renderItem
const renderItem =({item}) => (
    <List
            city={item.city}
            temp={item.temp}
            
        />
)


return ( 
    <View style={styles.container}>
    
    <Header />

    {/* INPUT E BOTÃO LUPA */}
        <Input
            Titulo="Adicione um local..."
            onChangeText={(text) => setSearch(text)} // Atualiza a pesquisa
            onPress={() => {
                if (search.trim()) {
                  addCity(search); // Adiciona cidade ao AsyncStorage
                  setSearch(""); // Limpa o campo de pesquisa
                }
              }}
        />

    {/* LISTA COM DADOS CLIMÁTICOS */}
        
        {/* 
        <FlatList
            data={weatherCity}
            keyExtractor={item => item.city}
            horizontal= {false}
            renderItem={renderItem}
        />
        */}
        
        <FlatList
            data={weatherCity.filter(
                (item, index, self) =>
                    index === self.findIndex((t) => t.city === item.city)
            )} // Remove duplicatas
            keyExtractor={(item, index) => `${item.city}-${index}`} // Combina cidade com índice
            horizontal={false}
            renderItem={renderItem}
/>

        

    

  
    

    </View>
    )

}