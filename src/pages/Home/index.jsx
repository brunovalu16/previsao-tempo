import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { styles } from './style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela


import ListHome from '../../components/ListHome';
import ButtonCriar from '../../components/ButtonCriar';



export default function Home(){

    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [city, setCity] = useState("Goiânia");
    const [ weatherData, setWeatherData] = useState(null);
    const [ search, setSearch ] = useState("");
    const [ storegeCity , setStoregeCity ] = useState([]);
    const [ weatherCity , setWeatherCity ] = useState([]);




return (
    <View style={styles.container}>
            <Image
                style={styles.img}
                source={require("../../assets/img/logo-skyTracker.png")}
            />
{/*
        <Input Titulo="Pesquise um local..." 
        onChangeText={(text) => setSearch(text)}
        onPress={() => setCity(search)} />

*/}
            <ListHome />
            <ButtonCriar />


            
    </View>

    );
}