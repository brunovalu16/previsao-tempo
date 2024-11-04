import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5F53E7",
        flex: 1,
        paddingTop: 30, 
    },

    square: {
        borderWidth: 1,
        borderColor: '#483ebd',
        padding: '2%',
        marginLeft: '8%',
        marginRight: '8%',
        borderRadius: 15,
        top: '5%',
        backgroundColor: '#483ebd'
    },

    Text: {
        color: '#c6c6c6',
        alignSelf: 'center',
        alignSelf: 'flex-start',
        marginLeft: 10
    },

    img: {
        width: "40%",
        marginLeft: 50,
        marginTop: 30,
    },

    containerinput: {
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
})