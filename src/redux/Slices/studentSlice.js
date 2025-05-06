import { createSlice } from "@reduxjs/toolkit";
import { getStudentsThunk } from "../Thunks/getStudentsThunk";
import { addStudentThunk } from "../Thunks/addStudentThunk";
import { getStudentArchieveThunk } from "../Thunks/getStudentArchieveThunk";

const INITIAL_STATE={
    students : [],
    open : false,
    flagClose : false
}
export const studentSlice = createSlice({

    name:'students',
    initialState:INITIAL_STATE,
    reducers:{
        setFlagStudentSlice:(state,action)=>{
            state.flagClose=action.payload
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(getStudentsThunk.fulfilled,(state,action)=>{
            state.students=action.payload;
        });

        builder.addCase(addStudentThunk.fulfilled,(state,action)=>{
            state.students=action.payload;
        });

        builder.addCase(getStudentArchieveThunk.fulfilled,(state,action)=>{
            state.students=action.payload;
        });
    }
})
export const {setFlagStudentSlice} = studentSlice.actions