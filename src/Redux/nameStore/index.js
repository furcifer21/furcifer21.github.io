import {TODO_TYPE} from './contains';
import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    productCategories: [],
    status: 'loading',
    error: {},
    allProducts: []
};
    
const todosReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(TODO_TYPE.GET_PRODUCTS_CATEGORIES.START, (state, action) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_PRODUCTS_CATEGORIES.SUCCESS, (state, action) => {
        return {...state, productCategories: action.payload, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_PRODUCTS_CATEGORIES.ERROR, (state, action) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_ALL_PRODUCTS.START, (state, action) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_ALL_PRODUCTS.SUCCESS, (state, action) => {
console.log(action);
        return {...state, allProducts: action.payload, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_ALL_PRODUCTS.ERROR, (state, action) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_ID.START, (state, action) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_ID.SUCCESS, (state, action) => {  



        return {...state,token: action.payload, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_ID.ERROR, (state, action) => {    
        return {...state, status: 'error', error: action.payload}
    })
    
})

export default todosReducer;