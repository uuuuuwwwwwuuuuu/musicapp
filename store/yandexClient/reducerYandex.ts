import { createReducer } from "@reduxjs/toolkit";
import YM from "../../yandex/YandexMusic";
import initClient from "./actionsYandex";

interface IState {
    YMClient: YM | null
}

const initialState: IState = {
    YMClient: null
}

const yandexReducer = createReducer(initialState, (builder) => {
    builder.addCase(initClient, (state, {payload}) => {
        state.YMClient = new YM(payload.token, payload.uuid)
    })
})

export default yandexReducer