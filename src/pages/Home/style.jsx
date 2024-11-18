import { StyleSheet } from "react-native";

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

  containermaster: {
    marginLeft: 70,
    marginTop: 90,
  },

  containersquare: {
    width: 250,
    height: 300,
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  imageInsideSquare: {
    top: "-25%",
  },

  texcity: {
    marginTop: -90,
    color: "#fff",
    letterSpacing: 2,
  },

  textgraucelsius: {
    alignSelf: "center",
    color: "#b7b7b7",
    fontSize: 140,
    letterSpacing: -15,
  },

  texclimate: {
    marginTop: 10,
    letterSpacing: 1,
    color: "#b7b7b7",
    textAlign: "center",
  },

  textime: {
    letterSpacing: 3,
    color: "#fff",
    zIndex: 1,
    textAlign: "center",
    marginTop: 10,
  },

  // estilização da parte de amanhã em goiânia...

  nextclimate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 2,
    alignSelf: "center",
    width: "65%",
    marginTop: 25,
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
    marginRight: 0,
  },

  base: {
    flexDirection: "column",
    alignItems: "center",
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
