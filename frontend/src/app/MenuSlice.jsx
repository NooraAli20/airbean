import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from './constants'

const namespace = 'Menu';

export const fetchAllMenus = createAsyncThunk(
    'menu/fetchAllMenuItems',
    async () => {
      return fetch(API_URL + '/products').then(res => res.json())
    }
)

const menu = createSlice({
    name: namespace,
    initialState: {
        loading: null,
        data: null,
        errorMessage: null,
        cart: [],
        showCartPages : ['/menu', '/cart']
    },
    reducers: {

        addToCart (state, { payload }) 
        {
            state.cart.push(payload);
        },
        updateItemInCart (state, { payload })
        {
            state.cart.filter(x => x.id === payload.id)[0].amount = payload.amount;
        },
        updateItemAmount(state, { payload })
        {
            state.cart.filter(x => x.id === payload.id)[0].amount = payload.amount;
        }
    },
    extraReducers : {
        [fetchAllMenus.pending](state) {
            state.loading = HTTP_STATUS.PENDING
        },
        [fetchAllMenus.fulfilled](state, { payload }) {
            state.loading = HTTP_STATUS.FULFILLED
            state.data = payload
        },
        [fetchAllMenus.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED
        },
    }
})

export const { addToCart, updateItemInCart, updateItemAmount } = menu.actions;
export default menu.reducer;