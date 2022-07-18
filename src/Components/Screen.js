import React from "react";
import styles , { cores } from "../../Styles";
import {Platform, StatusBar, KeyboardAvoidingView, SafeAreaView} from "react-native";
import estilos from './ScreenIOSStyles'

export default function Screen({ children }){
    return (
        <>
        <SafeAreaView style={estilos.ajusteScreen}>
            <StatusBar backgroundColor={cores.roxo}/>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? "padding" : "height"}
                style={styles.preencher}>
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
            <SafeAreaView style={estilos.ajusteScreenBottom}/>
        </>
    )
}