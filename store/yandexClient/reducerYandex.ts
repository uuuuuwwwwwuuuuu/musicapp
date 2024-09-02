import { createReducer } from "@reduxjs/toolkit";

interface IState {
    uuid: number,
    token: string
}

const initialState: IState = {
    uuid: 0,
    token: ''

}