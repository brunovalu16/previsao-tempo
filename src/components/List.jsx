import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';





export default function List( {city, temp, onRemovePress} ) {
    
    


/*=============================================== FUNÇÕES ===============================================*/

    const handleRemovePress = () => {
        Alert.alert("Deseja realmente excluir essa cidade?")
    }






/*=============================================== FIM FUNÇÕES ===============================================*/

    return(
          
    <View style={styles.list}>
        <View style={styles.square1}>
            <Text style={styles.TextGrau}>
                {temp ? Math.round(temp) : "0"}°
            </Text>

            <Text style={styles.Text}> {city} </Text>

            <TouchableOpacity onPress={onRemovePress}>
                <Ionicons style={styles.icon} name="trash-outline" size={25} color={"#c0c0c0"} />
            </TouchableOpacity>   
        </View>
     </View>
    )
};


const styles=StyleSheet.create({
    list:{
        top: '5%'
    },

    square1: {
        borderWidth: 1,
        borderColor: '#483ebd',
        padding: '2%',
        marginLeft: '8%',
        marginRight: '8%',
        borderRadius: 15,
        top: '5%',
        backgroundColor: '#483ebd',
        marginBottom: '3%',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },

    Text: {
        color: '#c6c6c6',
        alignSelf: 'center',
        alignSelf: 'flex-start',
        marginLeft: -30,
        alignSelf: 'center',
    },

    TextGrau: {
        color: '#fff',
        fontSize: 20,
        borderWidth: 1,
        borderBottomColor: '#483ebd',
        borderLeftColor: '#483ebd',
        borderTopColor: '#483ebd',
        borderRightColor: '#fff',
        paddingRight: 20,
        marginLeft: 25
    },

    icon: {
        marginRight: 10
    },
})