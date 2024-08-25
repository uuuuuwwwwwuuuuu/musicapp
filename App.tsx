import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import store from "./store/store";
import * as Font from 'expo-font'
import { useEffect, useState } from "react";

const fonts = () => Font.loadAsync({
    'inria': require('./assets/fonts/InriaBold.ttf'),
    'rubic-l': require('./assets/fonts/rubic-l.ttf'),
    'rubic-r': require('./assets/fonts/rubic-r.ttf'),
    'rubic-m': require('./assets/fonts/rubic-m.ttf'),
    'rubic-s': require('./assets/fonts/rubic-s.ttf'),
    'rubic-b': require('./assets/fonts/rubic-b.ttf'),
})


export default function App() {
    const [isFontsReady, setIsFontsReady] = useState(false);
    useEffect(() => {
        (async () => {
            await fonts();
            setIsFontsReady(true)
        })()
    }, []);

    if (isFontsReady) {
        return (
            <Provider store={store}>
                <StatusBar style="light" />
                <Main />
            </Provider>
        );
    } else {
        return <Text>Хуй тебе а не шрифты</Text>
    }
}
