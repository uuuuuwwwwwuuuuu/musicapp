import { createAction } from "@reduxjs/toolkit";

const initClient = createAction('@@yandex/INIT_CLIENT', (token, uuid) => ({
    payload: {token, uuid}
}))

export default initClient