import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#d9d9d9'
    },

    container: {
        backgroundColor: "grey",
        height: 150,
        padding: 20,
        justifyContent: 'flex-end'
    },
    header:{
        marginBottom: 8
      },
      image:{
        width: '100%',
        height: 100
      },

    total: {
        color: "blue",
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: "uppercase"
    },

    price: {
        color: "blue",
        fontSize: 24,
    },

    button: {
        width: 110,
        height: 35,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        marginRight: 20,
        borderRadius: 2,
    },

    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})
