import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        width: 96,
        height: 96,
        marginTop: 20,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        bottom: 8
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 21,
        color: '#333',
        textAlign: 'center',
    }

});