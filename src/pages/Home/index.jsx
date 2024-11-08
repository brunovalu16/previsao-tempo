import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela
import { Api } from '../../config/api';

import  Input  from '../../components/Input'


export default function Home(){

    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [city, setCity] = useState("Goiânia");
    const [ weatherData, setWeatherData] = useState(null);
    const [ search, setSearch ] = useState("");


  /* ===================================== FUNÇÕES ======================================================== */
    
    // função para executar a propriedade onPress no ícone 
    useEffect(() =>{
        const handleSearchPress = async() => {
            try{
                const data = await Api(city)
                setWeatherData(data)
                console.log(weatherData)

            }
            catch(error){
                console.error(error);
                
                
            }
            
        }
        handleSearchPress();
    }, [city]) /*lista de dependências */
    

    // Função para buscar dados climáticos e atualizar weatherData
    const fetchWeather = async () => {
        const data = await Api(city);
        setWeatherData(data);
    };

    useEffect(() => {
        fetchWeather();
    }, [city]); /*lista de dependências */


 /* ===================================== FIM FUNÇÕES ======================================================== */






    return (
      <View style={styles.container}>
            <Image
                source={require("../../assets/img/logo-skyTracker.png")}
                style={styles.img}
            />


{/*=============================================== INPUT E BOTÃO LUPA ==============================================================*/}

            
        <Input Titulo="Pesquise um local..." 
        onChangeText={(text) => setSearch(text)}
        onPress={() => setCity(search)} />


{/*=============================================== CAIXA COM GRAU E IMG. ==========================================================*/}



            <View style={styles.containermaster} />
                <View style={styles.containersquare}>
                    <Image
                        source={require("../../assets/img/storm.png")}
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

            <Text style={styles.textime}>
                09:00 AM
            </Text>

             

{/*=============================================== CAIXA AMANHÃ... ==========================================================*/}


                
                <View style={styles.nextclimate}>
                    <Image
                        source={require("../../assets/img/iconcloud.png")}
                        style={styles.imgcloud}
                    />
                    <Text style={styles.nexttexclimate}>
                        AMANHÃ EM GOIÂNIA
                    </Text>

                    <View style={styles.base}>
                        <Text style={styles.textgraucelsius2}>
                            {weatherData ? Math.round(weatherData.main.temp) : "0"}°
                        </Text>
                        <Text style={styles.nexttexclimate2}>
                            Nublado
                        </Text>

                    </View>

                </View>
        </View>
    );
}