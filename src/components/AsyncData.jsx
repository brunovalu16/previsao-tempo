import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../../../src/config/api';

export const getStorageData = async () => {
  try {
    const cities = await AsyncStorage.getItem("@previsao_do_tempo_cities");
    const cityData = cities ? JSON.parse(cities) : [];
    const dataArray = [];

    for (const city of cityData) {
      const data = await Api(city);
      dataArray.push({
        temp: data.main.temp,
        description: data.weather[0].description,
        city: city,
      });
    }

    return dataArray;
  } catch (error) {
    console.error("Erro ao recuperar dados do AsyncStorage", error);
    return [];
  }
};
