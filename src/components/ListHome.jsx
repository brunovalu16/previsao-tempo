import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { styles } from '../pages/Home/style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Api } from '../config/api';

export default function Home(){

    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [city, setCity] = useState("");
    const [ weatherData, setWeatherData] = useState(null);
    const [ search, setSearch ] = useState("");
    const [ storegeCity , setStoregeCity ] = useState([]);
    const [ weatherCity , setWeatherCity ] = useState([]);


//função que recupera o que foi armazenado no AsyncStorage
const getStorageData = async () => {
    try {
        await AsyncStorage.getItem ("@previsao_do_tempo_cities")
        .then(cities => {
        const cityData = cities ? JSON.parse(cities) : []
        const dataArray = []
        cityData.forEach(city => {
            Api(city)
            .then(data =>{
                dataArray.push({
                    temp:data.main.temp,
                    description: data.weather[0].description,
                    city: city
                })
                if (dataArray.length === cityData.length) {
                    setWeatherCity(dataArray) 
                }
            })
        });
        })
    }
    catch (error){
        console.error("Não foi adicionado", error)
    }
}
useEffect(() => {
    //getStorageData()
    console.log(weatherCity)
})

const renderItem=({item}) => (
    <View style={styles.container}>
            
            <View style={styles.containermaster}>
                    <View style={styles.containersquare}>
                        <Image
                            source={require("../assets/img/storm.png")}
                            style={styles.imageInsideSquare}
                        />

                        <Text style={styles.texcity}>
                            {item.city}
                        </Text>

                        <Text style={styles.textgraucelsius}>
                            {item ? Math.round(item.temp) : "0"}°
                        </Text>

                        <Text style={styles.texclimate}>
                            {item ? item.description : "Carregando..."}
                        </Text>
                    </View>
                </View>
            </View>
)


    return (

      <FlatList
        data={weatherCity}
        keyExtractor={item => item.city}  
        horizontal= {true}
        renderItem={renderItem}
      />  
      
    );
}

