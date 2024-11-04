import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../ListCity/style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela
import Ionicons from '@expo/vector-icons/Ionicons'
import { Api } from '../../../src/config/api';


export default function ListCity() {
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


            <View style={styles.square}>
                <Text style={styles.Text}> Nome da cidade </Text>
            </View>
            
        </View>
    )

}