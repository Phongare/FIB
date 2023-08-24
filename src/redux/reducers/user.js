import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {

        }
    },
    reducers: {
        LoginUser: (state, {payload}) => {
            state.user = payload
        },
        LogoutUser: (state) => {
            state.user = {}
        }
    }
})
export const {LoginUser} = userSlice.actions
export default userSlice.reducer