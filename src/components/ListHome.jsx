import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { styles } from '../pages/Home/style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela



export default function Home(){

    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [city, setCity] = useState("");
    const [ weatherData, setWeatherData] = useState(null);
    const [ search, setSearch ] = useState("");
    const [ storegeCity , setStoregeCity ] = useState([]);
    const [ weatherCity , setWeatherCity ] = useState([]);


    return (
      <View style={styles.container}>
            
            <View style={styles.containermaster}>
                    <View style={styles.containersquare}>
                        <Image
                            source={require("../assets/img/storm.png")}
                            style={styles.imageInsideSquare}
                        />

                        <Text style={styles.texcity}>
                            {city}
                        </Text>

                        <Text style={styles.textgraucelsius}>
                            {weatherData ? Math.round(weatherData.main.temp) : "0"}°
                        </Text>

                        <Text style={styles.texclimate}>
                            {weatherData ? weatherData.weather[0].description : "Carregando..."}
                        </Text>
                    </View>
                </View>
            </View>
    );
}

