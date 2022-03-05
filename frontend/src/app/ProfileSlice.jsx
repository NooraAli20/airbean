import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from './constants'


export const AddNewUserToDB = createAsyncThunk(
    'users/newUser',
    async (data) => {

        return fetch(API_URL + '/users', {
            method:'post',
            body : JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(res => res.json())
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user : {
            username: 'Noora',
            email: 'Noora',
            isGDPR: true
        },
        isLoading: '',
        errorMessage: '',
    },
    reducers: {

    },
    extraReducers: {
        [AddNewUserToDB.pending](state) {
            state.isLoading = HTTP_STATUS.PENDING
        },
        [AddNewUserToDB.fulfilled](state, { payload }){
            
            const { username, email, isGDPR } = payload;
            state.user.username = username;
            state.user.email = email;
            state.user.isGDPR = isGDPR;

            state.isLoading = HTTP_STATUS.FULFILLED;
        },
        [AddNewUserToDB.rejected](state) {
            state.isLoading = HTTP_STATUS.REJECTED
        },
    }
  });
  
  export const { updateField } = userSlice.actions;
  export default userSlice.reducer;