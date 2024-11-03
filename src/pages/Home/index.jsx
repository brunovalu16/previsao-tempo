import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela
import Ionicons from '@expo/vector-icons/Ionicons'
import { Api } from '../../config/api';


export default function Home(){

    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [city, setCity] = useState("Goiânia")
    const [ weatherData, setWeatherData] = useState(null)
    const [ search, setSearch ] = useState("")
    
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
    }, [city])






    return (
      <View style={styles.container}>
            <Image
                source={require("../../assets/img/logo-skyTracker.png")}
                style={styles.img}
            />

            <View style={styles.containerinput}>
                <TextInput style={styles.Input}
                    placeholderTextColor={"#9D9D9D"}
                    placeholder="Pesquise um local..."
                    onChangeText={(text) => setSearch(text)}
                />
                <TouchableOpacity onPress={() => setCity(search)}>
                    <Ionicons name="search-sharp" size={30} color={"#fff"}></Ionicons>
                </TouchableOpacity>


            </View>

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
                     Tempestade
                </Text>

             
                 


                
            </View>

                <Text style={styles.textime}>
                     09:00 AM
                </Text>

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
                            
                        </Text>
                        <Text style={styles.nexttexclimate2}>
                            Nublado
                        </Text>

                </View>

                </View>

                

            

        
      </View>
    );
    
}