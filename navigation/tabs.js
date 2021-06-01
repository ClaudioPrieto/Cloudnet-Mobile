import React from 'react';
import {View, Button, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import {COLORS, icons} from "../constants"

import { Home, Catalog ,Videocall} from "../screens";
import { TabActions } from '@react-navigation/routers';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions = {{
                style:{
                    backgroundColor: "transparent",
                }
            }}
        >

            <Tab.Screen
                name = "Inicio"
                component = {Home}
                options={{
                    tabBarIcon:({focused}) =>(
                        <Image
                            source ={icons.home}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? COLORS.primary: COLORS.secondary
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name = "Catalogo"
                component = {Catalog}
                options={{
                    tabBarIcon:({focused}) =>(
                        <Image
                            source ={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? COLORS.primary: COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            
            <Tab.Screen
                name = "Videollamada"
                component = {Videocall}
                options={{
                    tabBarIcon:({focused}) =>(
                        <Image
                            source ={icons.camera}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? COLORS.primary: COLORS.secondary
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs