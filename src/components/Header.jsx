
import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function Header() {
    return (
        <View style={styles.container}>

        <TouchableOpacity style={styles.button} >
            <Ionicons name="chevron-back-outline" size={30} color="#5f54e7" />
        </TouchableOpacity>
        
        <Image style={styles.logo} source={require('../assets/img/logo-skyTracker.png')} />

        </View>
    )
};


export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252072',
        width: '100%',
        height: '8%',
        flexDirection:  'row',
        alignItems: 'center'
    },

    logo: {
        width: 120,
        height: 60,
        resizeMode: 'contain',
        marginRight: 20
    },

    button: {
        flex: 1,
        marginLeft: 20,
    },
});