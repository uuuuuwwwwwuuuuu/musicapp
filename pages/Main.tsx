import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../hook";
import RegPage from "./RegPage";
import YM from "../yandex/YandexMusic";

const Main = () => {
    const colors = useAppSelector(state => state.colors.colors)

    const s = StyleSheet.create({
        SAV: {
            flex: 1,
            backgroundColor: colors.bgMainColor
        }
    })

    return (
        <SafeAreaView style={s.SAV}>
            <RegPage/>
        </SafeAreaView>
    );
};



export default Main;
