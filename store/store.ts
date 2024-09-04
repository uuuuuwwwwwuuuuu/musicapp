import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "./colorsAndFonts/reducerColorsAndFonts";
import yandexReducer from "./yandexClient/reducerYandex";

const store = configureStore({
    reducer: {
        colors: colorsReducer,
        yandex: yandexReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;