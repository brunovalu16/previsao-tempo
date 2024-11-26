import { Text, View, Image, FlatList } from 'react-native';
import { styles } from '../pages/Home/style';

import { useWeather } from '../context/WeatherContext';


export default function ListHome(){
//const [ weatherCity ] = useWeather()
const { weatherCity } = useWeather();


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
      data={weatherCity.filter((item, index, self) =>
          index === self.findIndex((t) => t.city === item.city)
      )} // Remove duplicatas
      keyExtractor={(item, index) => `${item.city}-${index}`} // Combina cidade com índice
      horizontal={true}
      renderItem={renderItem}
    />
  


      
    );
}


{/* 
      <FlatList
        data={weatherCity}
        // keyExtractor={item => item.city}  
        keyExtractor={(item) => item?.city || Math.random().toString()}
        horizontal= {true}
        renderItem={renderItem}
      /> 
      */} 

