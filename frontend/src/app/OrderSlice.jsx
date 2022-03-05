import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from './constants'

export const fetchByUser = createAsyncThunk(
    'order/fetchAllOrdersByUserId',
    async (id) => {
      return fetch(API_URL + '/orders?user.username=' + id).then(res => res.json())
    }
);

export const addOrderToDatabase = createAsyncThunk(
    'orders/newOrder',
    async (data) => {

        return fetch(API_URL + '/orders', {
            method:'post',
            body : JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(res => res.json())
    }
);


export const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        order : {
            user : [],
            orderNumber : '#GHJHDHFGJGHFHGF',
            orderDate : '',
            orderDetails : []
        },
        ordersByUser: [],
        isLoading: '',
        isLoadingUserOrders : false,
        errorMessage: '',
    },
    reducers: {

    },
    extraReducers: {
        [addOrderToDatabase.pending](state) {
            state.loading = HTTP_STATUS.PENDING
        },
        [addOrderToDatabase.fulfilled](state, { payload }) {
            
            state.loading = HTTP_STATUS.FULFILLED
            state.order.user = payload.user;
            state.order.orderNumber = payload.orderNumber;
            state.order.orderDate = payload.todayString;
            state.order.orderDetails = payload.orderDetails;

        },
        [addOrderToDatabase.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED
        },
        [fetchByUser.pending](state) {
            state.isLoadingUserOrders = HTTP_STATUS.PENDING
        },
        [fetchByUser.fulfilled](state, { payload }) {
            state.isLoadingUserOrders = HTTP_STATUS.FULFILLED;
            state.ordersByUser = payload;
        },
        [fetchByUser.rejected](state) {
            state.isLoadingUserOrders = HTTP_STATUS.REJECTED
        },
    },
    
  });
  
  export default orderSlice.reducer;