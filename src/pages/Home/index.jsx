import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela


import { styles } from '../Home/style';
import ListHome from '../../components/ListHome';
import ButtonCriar from '../../components/ButtonCriar';
import Header from '../../components/Header';



export default function Home(){

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
        <Header />
        <ListHome />
    </View>
    );
}