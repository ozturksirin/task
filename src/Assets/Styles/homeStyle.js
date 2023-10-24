import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    categoriesContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    categories: {
        color: '#333',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 26,

    },
    viewAll: {
        color: '#EA2027',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 18,
    },
    cardArea: {
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    popularText: {
        color: '#333',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 20,
    },
    popularImg: {
        width: '%100',
        borderRadius: 18,
        marginTop: 14,
    }


})