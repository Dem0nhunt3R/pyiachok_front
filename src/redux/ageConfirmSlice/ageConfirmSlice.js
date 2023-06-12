import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAdult: localStorage.getItem('ageConfirm')||false
};

const ageConfirmSlice = createSlice({
    name: 'ageConfirmSlice',
    initialState,
    reducers: {
        setIsAdult: (state, action) => {
            state.isAdult = action.payload;
        }
    }
});

const {reducer: ageConfirmReducer, actions: {setIsAdult}} = ageConfirmSlice;

const ageConfirmActions = {setIsAdult};

export {ageConfirmReducer, ageConfirmActions};