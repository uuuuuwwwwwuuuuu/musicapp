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
    useSharedValue,
    useDerivedValue
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
        top: withSpring(LOGO.top.value, {duration: 2000, dampingRatio: 0.7})
    }))

    const NOTES = [
        {
            vertical: useSharedValue(50),
            horizontal: useSharedValue(45),
            scale: useSharedValue(1.1),
            rotate: useSharedValue(-17)
        },
        {
            vertical: useSharedValue(45),
            horizontal: useSharedValue(0),
            scale: useSharedValue(1.7),
            rotate: useSharedValue(5)
        },
        {
            vertical: useSharedValue(360),
            horizontal: useSharedValue(0),
            scale: useSharedValue(1.1),
            rotate: useSharedValue(-47)
        },
        {
            vertical: useSharedValue(260),
            horizontal: useSharedValue(110),
            scale: useSharedValue(2),
            rotate: useSharedValue(37)
        },
    ]

    const rotateValue1 = useDerivedValue(() => `${NOTES[0].rotate.value}deg`)
    const rotateValue2 = useDerivedValue(() => `${NOTES[1].rotate.value}deg`)
    const rotateValue3 = useDerivedValue(() => `${NOTES[2].rotate.value}deg`)
    const rotateValue4 = useDerivedValue(() => `${NOTES[3].rotate.value}deg`)
    
    const ANote1 = useAnimatedStyle(() => ({
        top: withSpring(NOTES[0].vertical.value, {duration: 2000, dampingRatio: 0.7}),
        left: withSpring(NOTES[0].horizontal.value, {duration: 2000, dampingRatio: 0.7}),
        transform: [
            {scale: withTiming(NOTES[0].scale.value, {duration: 500})},
            {rotate: withSpring(rotateValue1.value, {duration: 2000, dampingRatio: 0.7})}
        ],
        zIndex: 1
    }))
    
    const ANote2 = useAnimatedStyle(() => ({
        top: withSpring(NOTES[1].vertical.value, {duration: 2000, dampingRatio: 0.7}),
        right: withSpring(NOTES[1].horizontal.value, {duration: 2000, dampingRatio: 0.7}),
        transform: [
            {scale: withTiming(NOTES[1].scale.value, {duration: 500})},
            {rotate: withSpring(rotateValue2.value, {duration: 2000, dampingRatio: 0.7})}
        ],
        zIndex: 1
    }))

    const ANote3 = useAnimatedStyle(() => ({
        bottom: withSpring(NOTES[2].vertical.value, {duration: 2000, dampingRatio: 0.7}),
        left: withSpring(NOTES[2].horizontal.value, {duration: 2000, dampingRatio: 0.7}),
        transform: [
            {scale: withTiming(NOTES[2].scale.value, {duration: 500})},
            {rotate: withSpring(rotateValue3.value, {duration: 2000, dampingRatio: 0.7})}
        ],
        zIndex: 1
    }))

    const ANote4 = useAnimatedStyle(() => ({
        bottom: withSpring(NOTES[3].vertical.value, {duration: 2000, dampingRatio: 0.7}),
        right: withSpring(NOTES[3].horizontal.value, {duration: 2000, dampingRatio: 0.7}),
        transform: [
            {scale: withTiming(NOTES[3].scale.value, {duration: 500})},
            {rotate: withSpring(rotateValue4.value, {duration: 2000, dampingRatio: 0.7})}
        ],
        zIndex: 3
    }))

    useEffect(() => {
        if (regState !== 'idle') {
            BUTTONS.opacity.value = 0;
            LOGO.top.value = 0;
        }

        if (regState === 'auth') {
            NOTES[0].vertical.value = 0;
            NOTES[0].horizontal.value = 100;
            NOTES[0].scale.value = 2.2;
            NOTES[0].rotate.value = -44;
            
            NOTES[1].vertical.value = 60;
            NOTES[1].horizontal.value = -110;
            NOTES[1].scale.value = 2.2;
            NOTES[1].rotate.value = 27;
            
            NOTES[2].vertical.value = 30;
            NOTES[2].horizontal.value = -40;
            NOTES[2].scale.value = 1.5;
            NOTES[2].rotate.value = 5;
            
            NOTES[3].vertical.value = 30;
            NOTES[3].horizontal.value = -10;
            NOTES[3].scale.value = 3;
            NOTES[3].rotate.value = -34;
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
            justifyContent: 'space-between',
            zIndex: 5
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
            zIndex: 2
        },
        smallNote: {
            position: 'absolute',
            width: 83,
            height: 133,
        },
        bigNote: {
            position: 'absolute',
            width: 140,
            height: 165,
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
            <Animated.Image style={[s.smallNote, ANote1]} source={require('../assets/SmallNote.png')} blurRadius={7}/>
            <Animated.Image style={[s.bigNote, ANote2]} source={require('../assets/BigNote.png')} blurRadius={7}/>
            <Animated.Image style={[s.bigNote, ANote3]} source={require('../assets/BigNote.png')} blurRadius={8}/>
            <Animated.Image style={[s.smallNote, ANote4]} source={require('../assets/SmallNote.png')} blurRadius={10}/>
        </View>
    );
};

export default RegPage;
