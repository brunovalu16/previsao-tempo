import { StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
    container: {
       backgroundColor: "#5F53E7",
        flex: 1,
        paddingTop: 30,
        
    },

    img: {
        width: "40%",
        marginLeft: 50,
        marginTop: 30,
    },

    Input: {
        backgroundColor: "#4C43C6",
        height: 40,
        paddingRight: 70,
        color: '#fff'
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

    containermaster: {
        marginLeft: 70,
        marginTop: 10,
    },

    containersquare: {
        width: '70%',             
        height: '45%',            
        backgroundColor: 'transparent', 
        borderColor: '#fff',    
        borderWidth: 1,         
        borderRadius: 30,
        position: 'relative',
        marginTop: 100,
        marginLeft: 50
    },

    imageInsideSquare: {
        width: 270,            
        height: 200,            
        alignSelf: 'center',
        marginTop: -100,
        position: 'absolute',
        
    },

    texcity: {
        position: 'absolute',
        marginTop: 100,
        marginLeft: 100,
        color: "#fff",
        letterSpacing: 2,
    },

    textgraucelsius: {
        position: 'absolute',
        marginTop: 120,
        marginLeft: 60,
        color: "#b7b7b7",
        fontSize: 140,
        letterSpacing: -15,
    },

    texclimate: {
        position: 'absolute',
        marginTop: 320,
        letterSpacing: 5,
        color: "#b7b7b7",
        marginLeft: 75,
      
    },

    textime: {
        letterSpacing: 3,
        color: "#fff",
        zIndex: 1,
        textAlign: 'center',
        marginTop: 10
    },

    //estilização da parte de amanhã em goiania...

    nextclimate: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        position: 'relative',
        zIndex: 2,
        alignSelf: 'center',
        width: '65%',
        marginTop: 25
      },
      imgcloud: {
        width: 36,           
        height: 30,          
        marginRight: 5,     
      },

      nexttexclimate: {
        color: "#fff",       
        letterSpacing: 2,    
        fontSize: 10,        
        marginRight: 20,    
        marginRight: 0,
      },
      base: {
        flexDirection: 'column',  
        alignItems: 'center',     
      },
      textgraucelsius2: {
        color: "#b7b7b7",   
        fontSize: 25,      
      },
      nexttexclimate2: {
        color: "#fff",      
        fontSize: 10,      
      },





   

    

});

