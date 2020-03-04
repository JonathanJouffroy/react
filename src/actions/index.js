import * as fromAPI from '../api'

export const ADD_ONE = "ADD_ONE"
export const ADD_X = "ADD_X"
export const GET_USERS = "ALL_USERS"
export const GET_USERS_SAGA="GET_USERS_SAGA"
export const GET_PRODUCTS ="GET_PRODUCTS"
export const ADD_DATA_SOCKET_SAGA = "ADD_DATA_SOCKET_SAGA"



export const addOne = () =>({
    type: ADD_ONE

})

export const addX = (x) => ({
    type: ADD_X,
    payload: x
})

export const allUsers = users => ({
    type: GET_USERS,
    payload: users
})

export const getUsers = () => async dispatch => {
    const users = await fromAPI.getUsers()
    dispatch(allUsers(users))
}

export const getUsersSaga = () => ({
    type: GET_USERS_SAGA
})

export const allProducts = products => ({
    type: GET_PRODUCTS,
    payload: products
})

export const getProducts = () => async dispatch => {
    const products = await fromAPI.getProducts()
    dispatch(allProducts(products))
}

export const addData = (data) => ({
    type: ADD_DATA_SOCKET_SAGA,
    payload: data
})
