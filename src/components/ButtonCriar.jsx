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
        width: '90%',
        minHeight: 56,
        maxHeight: 56,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    title: {
        color: '#4ea3dc'
    },
});