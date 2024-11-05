import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

                            // adicionar o restante das propriedades do TextInput
export default function Input({Titulo, onPress, onChangeText, ...props}) {
    return(

        <View style={styles.container}>
            <TextInput
                style={styles.Input}
                placeholderTextColor={"#9D9D9D"}
                placeholder={Titulo}
                onChangeText={onChangeText}
                {...props}
            />
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="search-sharp" size={30} color={"#fff"} />
        </TouchableOpacity>
    </View>
    )
};


const styles=StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 50,
        backgroundColor: "#4C43C6",
        marginLeft: 30,
        marginEnd: 30,
        justifyContent: "space-around",
        borderRadius: 15,
    },
    Input: {
        backgroundColor: "#4C43C6",
        height: 40,
        paddingRight: 70,
        color: '#fff'
    },

    
}); 