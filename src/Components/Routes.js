import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Services from "../Pages/Services";
import Card from "../Pages/Card";
import { cores }  from "../../Styles"

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            tabBarOptions={{
                activeTintColor: cores.roxo,
                inactiveTintColor: cores.claro,
                activeBackgroundColor: cores.roxo,
                inactiveBackgroundColor: cores.laranja,
                style:{
                    height: 70,
                },
                labelStyle:{
                    width: "100%",
                    flex: 1,
                    fontWeight: "bold",
                    fontSize: 17,
                    lineHeight: 22,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: cores.laranja,
                },
                keyboardHidesTabBar: true,
            }}>
                <Tab.Screen name="Serviços" component={Services}/>
                <Tab.Screen name="Carrinho" component={Card}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}