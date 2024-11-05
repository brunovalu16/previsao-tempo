import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../ListCity/style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela
import Ionicons from '@expo/vector-icons/Ionicons'
import { Api } from '../../../src/config/api';

import Input from '../../components/Input';


export default function ListCity() {
    
    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [city, setCity] = useState("Goiânia");
    const [ weatherData, setWeatherData] = useState(null);
    const [ search, setSearch ] = useState("");


/*=============================================== FUNÇÕES ===============================================*/

const handleRemovePress = () => {
    Alert.alert("Deseja realmente excluir essa cidade?")
}


// Função para buscar dados climáticos e atualizar weatherData
const fetchWeather = async () => {
    const data = await Api(city);
    setWeatherData(data);
};

useEffect(() => {
    fetchWeather();
}, [city]); /*lista de dependências */






/*=============================================== FIM UNÇÕES ===============================================*/    
   












return ( 
        <View style={styles.container}>



            
{/*=========================================== LOGO SKY TRACKER ==============================================================*/}            
            
            
            <Image
                source={require("../../assets/img/logo-skyTracker.png")}
                style={styles.img}
            />


 {/*=========================================== INPUT E BOTÃO LUPA ==============================================================*/}

        <Input Titulo="Adicione um local..." 
        onChangeText={(text) => setSearch(text)}
        onPress={() => setCity(search)} />

{/*=============================================== LISTA ==============================================================*/}


            
            <View style={styles.list}>
                <View style={styles.square1}>
                    <Text style={styles.TextGrau}>
                        {weatherData ? Math.round(weatherData.main.temp) : "0"}°
                    </Text>

                    <Text style={styles.Text}> {city} </Text>

                    <TouchableOpacity onPress={handleRemovePress}>
                        <Ionicons style={styles.icon} name="trash-outline" size={25} color={"#c0c0c0"} />
                    </TouchableOpacity>   
                    
                </View>
             </View>
            
        </View>
    )

}