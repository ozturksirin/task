import React from 'react'
import { style } from '../../Assets/Styles/homeStyle'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import MenuCard from '../../Components/MenuCard';
import hamburger from '../../Assets/Images/popular/hamburger.png';

const Home = () => {

    const data = [
        { id: 1, name: 'Salad', image: require('../../Assets/Images/categories/salad.png') },

        { id: 2, name: 'Fries', image: require('../../Assets/Images/categories/fries.png') },

        { id: 3, name: 'Taco', image: require('../../Assets/Images/categories/taco.png') },

        // { id: 4, name: 'Taco', image: require('../../Assets/Images/categories/salad.png') },
    ]

    return (
        <>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
                <View style={style.categoriesContainer}>
                    <Text style={style.categories}>Categories</Text>
                    <TouchableOpacity>
                        <Text style={style.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <View style={style.cardArea}>
                            <MenuCard name={item.name} image={item.image} onPress={() => console.log(`item ${item.name}`)} />
                        </View>
                    }
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View >

            <View style={{ flex: 1 }}>
                <Text style={style.popularText}>Popular Today</Text>
                <TouchableOpacity>
                    <Image source={hamburger} style={style.popularImg} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />

        </>
    )
}

export default Home
