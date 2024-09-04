import { View, Text, StyleSheet, TouchableWithoutFeedback, TextInput } from "react-native";

import React, {ChangeEvent, useEffect, useState } from "react";
import { useAppSelector } from "../hook";
import Logo from "../components/logo";
import { Dimensions } from 'react-native';

import Animated ,{
    useAnimatedStyle,
    withTiming,
    Easing,
    withSpring,
    useSharedValue,
    useDerivedValue,
    runOnJS
} from 'react-native-reanimated'

const RegPage = () => {
    const {colors, fonts} = useAppSelector(state => state.colors);
    const [regState, setRegState] = useState<'idle' | 'auth' | 'reg'>('idle');
    const [buttons, setButtons] = useState<React.ReactElement | null>(null);
    const [isAnimationEnd, setIsAnimationEnd] = useState(false);
    const [isAPIKey, setIsAPIKey] = useState(false);

    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    const BUTTONS = {
        opacity: useSharedValue(1)
    }
    
    const AButtons = useAnimatedStyle(() => ({
        opacity: withTiming(BUTTONS.opacity.value, {duration: 250, easing: Easing.ease}, (isFinish) => {
            if (isFinish) {
                runOnJS(setIsAnimationEnd)(true)
                BUTTONS.opacity.value = 1
            }
        })
    }));

    useEffect(() => {
        if (isAnimationEnd) {
            if (regState === 'idle') {
                setButtons(
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
                )
            } else {
                setButtons(
                    <Animated.View style={[s.buttonsWrapper, AButtons]}>
                        <TouchableWithoutFeedback onPress={() => setRegState('idle')}>
                            <View style={s.regBtn}>
                                    <Text style={s.textB}>Назад</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </Animated.View>
                )
            }
        }
        setIsAnimationEnd(false)
    }, [regState, isAnimationEnd])

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
        } else {
            BUTTONS.opacity.value = 0;
            LOGO.top.value = windowHeight / 2 - 100;
        }

        if (regState === 'idle') {

            NOTES[0].vertical.value = 50;
            NOTES[0].horizontal.value = 45;
            NOTES[0].scale.value = 1.1;
            NOTES[0].rotate.value = -17;
            
            NOTES[1].vertical.value = 45;
            NOTES[1].horizontal.value = 0;
            NOTES[1].scale.value = 1.7;
            NOTES[1].rotate.value = 5;
            
            NOTES[2].vertical.value = 360;
            NOTES[2].horizontal.value = 0;
            NOTES[2].scale.value = 1.1;
            NOTES[2].rotate.value = -47;
            
            NOTES[3].vertical.value = 260;
            NOTES[3].horizontal.value = 110;
            NOTES[3].scale.value = 2;
            NOTES[3].rotate.value = 37;
        }

        if (regState === 'auth') {
            NOTES[0].vertical.value = 0;
            NOTES[0].horizontal.value = 50;
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

        if (regState === 'reg') {
            NOTES[0].vertical.value = 20;
            NOTES[0].horizontal.value = 50;
            NOTES[0].scale.value = 2.5;
            NOTES[0].rotate.value = 30;
            
            NOTES[1].vertical.value = 60;
            NOTES[1].horizontal.value = 0;
            NOTES[1].scale.value = 1.75;
            NOTES[1].rotate.value = -23;
            
            NOTES[2].vertical.value = 100;
            NOTES[2].horizontal.value = -40;
            NOTES[2].scale.value = 2;
            NOTES[2].rotate.value = 40;
            
            NOTES[3].vertical.value = 40;
            NOTES[3].horizontal.value = 40;
            NOTES[3].scale.value = 2;
            NOTES[3].rotate.value = -15;
        }
    }, [regState]);

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
            height: regState === 'idle' ? 130 : 55,
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
        },
        contentWrapper: {
            width: 360,
            height: 510,
            backgroundColor: colors.bgSecondColor,
            zIndex: 5,
            position: 'absolute',
            top: windowHeight / 2 - 305,
            borderRadius: 10,
            paddingVertical: 40,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        bigText: {
            fontFamily: fonts.rubicS,
            fontSize: 24,
            color: colors.contentMain,
            textAlign: 'center'
        },
        infoText: {
            fontSize: 14,
            fontFamily: fonts.rubicR,
            color: colors.contentDisable,
            textAlign: 'center'
        },
        inputsWrapper: {
            width: '100%',
            justifyContent: 'space-between'
        },
        input: {
            backgroundColor: colors.bgInputColor,
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 5,
            color: colors.contentMain,
            fontSize: 16,
            fontFamily: fonts.rubicM
        }
    });

    const CONTENT_BOXES = {
        left: useSharedValue(-520),
        right: useSharedValue(-520)
    }

    const AAuthBox = useAnimatedStyle(() => ({
        left: withSpring(CONTENT_BOXES.left.value, {duration: 2000, dampingRatio: 0.7})
    }));

    const ARegBox = useAnimatedStyle(() => ({
        right: withSpring(CONTENT_BOXES.right.value, {duration: 2000, dampingRatio: 0.7})
    }))

    useEffect(() => {
        if (regState === 'idle') {
            CONTENT_BOXES.left.value = -520;
            CONTENT_BOXES.right.value = -520;

        } else if (regState === 'auth') {
            CONTENT_BOXES.left.value = windowWidth / 2 - 180;
            CONTENT_BOXES.right.value = -520;
        } else {
            CONTENT_BOXES.left.value = -520;
            CONTENT_BOXES.right.value = windowWidth / 2 - 180;
        }
    }, [regState]);

    const [authInputValues, setAuthInputValues] = useState({username: '', password: ''});
    const [regInputValues, setRegInputValues] = useState({username: '', password: '', email: ''});
    const [yandexData, setYandexData] = useState({token: '', uuid: 0});

    return (
        <View style={s.wrapper}>
            <Animated.View style={[s.logo, ALogo]}>
                <Logo />
            </Animated.View>
            <Animated.View style={[s.contentWrapper, AAuthBox]}>
                <Text style={s.bigText}>Войти в <Text style={{color: colors.accent}}>Brooklyn</Text></Text>
                <View style={[s.inputsWrapper, {height: 122}]}>
                    <TextInput 
                        placeholder="Имя пользователя"
                        placeholderTextColor={colors.contentDisable} 
                        style={s.input}
                        onChangeText={username => setAuthInputValues(ps => ({...ps, username}))}
                        defaultValue={authInputValues.username}></TextInput>
                    <TextInput 
                        placeholder="Пароль"
                        placeholderTextColor={colors.contentDisable} 
                        style={s.input}
                        onChangeText={password => setAuthInputValues(ps => ({...ps, password}))}
                        defaultValue={authInputValues.password}></TextInput>
                </View>
                <View>
                    <Text style={s.infoText}>{"Для входа в систему используется ваша учётная запись в Brooklyn\nЕсли у вас нет аккаунта вы можете зарегистрироваться "}
                    <Text onPress={() => setRegState('reg')} style={{color: colors.accent}}>здесь</Text></Text>
                </View>
                <View style={{width: 250, height: 55, justifyContent: 'space-between'}}>
                    <TouchableWithoutFeedback>
                        <View style={s.signInBtn}>
                            <Text style={s.textB}>Войти</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Animated.View>
            <Animated.View style={[s.contentWrapper, ARegBox]}>
                <Text style={s.bigText}>{'Зарегистрироваться\nв '}<Text style={{color: colors.accent}}>Brooklyn</Text></Text>
                <View style={[s.inputsWrapper, {height: 195}]}>
                    <TextInput 
                        placeholder="Имя пользователя"
                        placeholderTextColor={colors.contentDisable} 
                        style={s.input}
                        onChangeText={username => setRegInputValues(ps => ({...ps, username}))}
                        defaultValue={regInputValues.username}></TextInput>
                    <TextInput 
                        placeholder="Пароль"
                        placeholderTextColor={colors.contentDisable} 
                        style={s.input}
                        onChangeText={password => setRegInputValues(ps => ({...ps, password}))}
                        defaultValue={regInputValues.password}></TextInput>
                    <TextInput 
                        placeholder="Электронная почта"
                        placeholderTextColor={colors.contentDisable} 
                        style={s.input}
                        onChangeText={email => setRegInputValues(ps => ({...ps, email}))}
                        defaultValue={regInputValues.email}></TextInput>
                </View>
                <View>
                    <Text style={s.infoText}><Text style={{color: colors.error}}>{"Не указывайте свои настоящие данные!!!\n"}</Text> У приложения нет защиты от кибервзлома Есть аккаунт?  <Text onPress={() => setRegState('auth')} style={{color: colors.accent}}>Войдите здесь!</Text></Text>
                </View>
                <View style={{width: 250, height: 55, justifyContent: 'space-between'}}>
                    <TouchableWithoutFeedback>
                        <View style={s.signInBtn}>
                            <Text style={s.textB}>Зарегистрироваться</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Animated.View>

            {buttons}
            
            <Animated.Image style={[s.smallNote, ANote1]} source={require('../assets/SmallNote.png')} blurRadius={7}/>
            <Animated.Image style={[s.bigNote, ANote2]} source={require('../assets/BigNote.png')} blurRadius={7}/>
            <Animated.Image style={[s.bigNote, ANote3]} source={require('../assets/BigNote.png')} blurRadius={8}/>
            <Animated.Image style={[s.smallNote, ANote4]} source={require('../assets/SmallNote.png')} blurRadius={10}/>
        </View>
    );
};

export default RegPage;
