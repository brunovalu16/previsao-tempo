import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export default function ButtonCriar() {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>
                Adicionar uma nova cidade
            </Text>
        </TouchableOpacity>
    )
};


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '70%',
        minHeight: 56,
        maxHeight: 56,
        backgroundColor: '#b7b7b7',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        alignSelf: 'center',
    },

    title: {
        color: '#5f53e7'
    },
});