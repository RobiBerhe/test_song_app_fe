import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core'
import songReducer from "../features/song/songSlice";
import rootSaga from "./rootSaga";
// import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
    reducer:{
        song:songReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
    }).concat(sagaMiddleware),
// devTools: __DEV__,
});
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
