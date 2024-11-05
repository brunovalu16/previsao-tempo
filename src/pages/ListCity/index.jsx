import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { styles } from './style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela
import { Api } from '../../config/api';

import Input from '../../components/Input';
import List from '../../components/List';


export default function ListCity() {
    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [city, setCity] = useState("Goiânia");
    const [ weatherData, setWeatherData] = useState(null);
    const [ search, setSearch ] = useState("");


/*=============================================== FUNÇÕES ===============================================*/


// Função para buscar dados climáticos e atualizar weatherData
const fetchWeather = async () => {
    const data = await Api(city);
    setWeatherData(data);
};

useEffect(() => {
    if (city) fetchWeather();
}, [city]);





// Função para remover a cidade
const handleRemovePress = () => {
    Alert.alert(
        "Confirmação",
        "Deseja realmente excluir essa cidade?",
        [
            {
                text: "Não",
                onPress: () => console.log("Cancelado"),
                style: "cancel" // Este estilo diferencia o botão "Não"
            },
            {
                text: "Sim",
                onPress: () => {
                    // Lógica para remover a cidade
                    console.log("Cidade removida");
                    // Aqui você pode adicionar uma função para realmente remover a cidade
                }
            }
        ],
        { cancelable: true } //Permite que o usuário feche o alerta ao tocar fora dele, se necessário.
    );
};







/*=============================================== FIM UNÇÕES ===============================================*/    
   

return ( 
    <View style={styles.container}>
    
    {/* LOGO SKY TRACKER */}
        <Image
            source={require("../../assets/img/logo-skyTracker.png")}
            style={styles.img}
        />

    {/* COMPONENTE INPUT */}
        <Input Titulo="Adicione um local..." onChangeText={(text) => setSearch(text)} // Atualiza a pesquisa
               onPress={() => {setCity(search)}}
        />

    {/* COMPONENTE LIST */}
        <List city={city} weatherData={weatherData} onRemovePress={handleRemovePress}/>
    
    </View>
    )

}