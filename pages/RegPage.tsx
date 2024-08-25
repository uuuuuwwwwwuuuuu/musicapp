import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";

import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hook";
import Logo from "../components/logo";
import { Dimensions } from 'react-native';

import Animated ,{
    useAnimatedStyle,
    withTiming,
    Easing,
    withSpring,
    useSharedValue
} from 'react-native-reanimated'

const RegPage = () => {
    const {colors, fonts} = useAppSelector(state => state.colors);
    const [regState, setRegState] = useState<'idle' | 'auth' | 'reg'>('idle');
    const windowHeight = Dimensions.get('window').height;

    const BUTTONS = {
        opacity: useSharedValue(1)
    }
    
    const AButtons = useAnimatedStyle(() => ({
        opacity: withTiming(BUTTONS.opacity.value, {duration: 500, easing: Easing.ease})
    }))

    const LOGO = {
        top: useSharedValue(windowHeight / 2 - 100)
    }

    const ALogo = useAnimatedStyle(() => ({
        top: withSpring(LOGO.top.value, {duration: 2000})
    }))

    useEffect(() => {
        if (regState !== 'idle') {
            BUTTONS.opacity.value = 0;
            LOGO.top.value = 0;
        }
    }, [regState])

    const s = StyleSheet.create({
        wrapper: {
            flex: 1,
            backgroundColor: colors.bgMainColor,
            padding: 15,
            paddingBottom: 65,
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        buttonsWrapper: {
            width: 250,
            height: 130,
            justifyContent: 'space-between'
        },
        signInBtn: {
            width: '100%',
            height: 55,
            backgroundColor: colors.accent,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        regBtn: {
            width: '100%',
            height: 55,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.contentMain
        },
        textB: {
            fontFamily: fonts.rubicB,
            fontSize: 18,
            color: colors.contentMain
        },
        logo: {
            position: 'absolute',
        },
        note: {
            position: 'absolute',
            transform: [{scale: 0.8}]
        }
    });


    return (
        <View style={s.wrapper}>
            <Animated.View style={[s.logo, ALogo]}>
                <Logo />
            </Animated.View>
            <Animated.View style={[s.buttonsWrapper, AButtons]}>
                <TouchableWithoutFeedback onPress={() => setRegState('auth')}>
                    <View style={s.signInBtn}>
                        <Text style={s.textB}>Войти</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setRegState('reg')}>
                    <View style={s.regBtn}>
                        <Text style={s.textB}>Зарегистрироваться</Text>
                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>
            {/* <Image style={s.note} source={require('../assets/SmallNote.png')}/>
            <Image style={s.note} source={require('../assets/BigNote.png')}/>
            <Image style={s.note} source={require('../assets/SmallNote.png')}/>
            <Image style={s.note} source={require('../assets/BigNote.png')}/> */}
        </View>
    );
};

export default RegPage;
