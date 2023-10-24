import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { style } from '../Assets/Styles/menuCardStyle'

const MenuCard = (props) => {
    const { name, image, onPress } = props
    return (
        <>
            <View style={style.container}>
                <TouchableWithoutFeedback onPress={onPress} >
                    <View style={style.content}>
                        <Image source={image} style={style.image} />
                        <Text style={style.text}>{name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View >
        </>
    )
}

export default MenuCard
