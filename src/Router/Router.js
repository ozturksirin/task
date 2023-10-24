import React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import home from '../Assets/Images/home.png';
import profile from '../Assets/Images/profile.png';
import favori from '../Assets/Images/favori.png';
import discount from '../Assets/Images/discount.png';
import bag from '../Assets/Images/bag.png';

import HomeScreen from '../Pages/Home/Home';
import Favorite from '../Pages/Favorite/Favorite';
import Discount from '../Pages/Discount/Discount';
import Profile from '../Pages/Profile/Profile';
import Cart from '../Pages/Cart/Cart';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

const TabScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#F2F2F2',
                        borderTopWidth: 0,
                        elevation: 0,
                        height: 60,
                    },
                    tabBarIcon: ({ focused }) => {
                        let source;
                        let iconStyle = {
                            width: 28,
                            height: 28,
                            tintColor: focused ? '#EA2027' : '#BDBDBD',
                        };
                        let dotStyle = {
                            width: 8,
                            height: 8,
                            backgroundColor: focused ? '#333333' : null,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            bottom: -4,
                        };

                        if (route.name === 'HomeTab') {
                            source = home;
                        } else if (route.name === 'Favori') {
                            source = favori;
                        } else if (route.name === 'Cart') {
                            return (
                                <View
                                    style={{
                                        backgroundColor: '#EA2027',
                                        width: 70,
                                        height: 70,
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        bottom: 20,
                                        shadowColor: '#EA2027',
                                        shadowOffset: {
                                            width: 0,
                                            height: 12,
                                        },
                                        shadowOpacity: 0.58,
                                        shadowRadius: 16.00,
                                        elevation: 24,
                                    }}
                                >
                                    <Image
                                        source={bag}
                                        resizeMode="contain"
                                        style={{
                                            width: 28,
                                            height: 28,
                                            tintColor: 'white',
                                        }}
                                    />
                                </View>
                            );
                        } else if (route.name === 'Discount') {
                            source = discount;
                        } else if (route.name === 'Profile') {
                            source = profile;
                        }

                        return (
                            <>
                                <Image
                                    source={source}
                                    resizeMode="contain"
                                    style={iconStyle}
                                />
                                <View style={dotStyle} />
                            </>
                        );
                    },
                })}
            >
                <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Favori" component={Favorite} options={{ headerShown: false }} />
                <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                <Tab.Screen name="Discount" component={Discount} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabScreen;
