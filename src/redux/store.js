import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ageConfirmReducer} from "./ageConfirmSlice/ageConfirmSlice";

const rootReducer = combineReducers({ageConfirmReducer});

export const setupStore = () => configureStore({reducer: rootReducer});