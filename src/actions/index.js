import * as fromAPI from '../api'

export const ADD_ONE = "ADD_ONE"
export const ADD_X = "ADD_X"
export const GET_USERS = "ALL_USERS"
export const GET_USERS_SAGA="GET_USERS_SAGA"
export const GET_PRODUCTS_SAGA = "GET_PRODUCTS_SAGA"
export const GET_PRODUCTS ="GET_PRODUCTS"
export const GET_ORDERS= "ALL_ORDERS"
export const GET_ORDERS_SAGA ="GET_ORDERS_SAGA"
export const ADD_DATA_SOCKET_SAGA = "ADD_DATA_SOCKET_SAGA"



export const addOne = () =>({
    type: ADD_ONE

})

export const addX = (x) => ({
    type: ADD_X,
    payload: x
})
// Users
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

// Product
export const allProducts = products => ({
    type: GET_PRODUCTS,
    payload: products
})

export const getProducts = () => async dispatch => {
    const products = await fromAPI.getProducts()
    dispatch(allProducts(products))
}

export const getProductsSaga = () => ({
    type: GET_PRODUCTS_SAGA
})

//Orders
export const allOrders = orders => ({
    type: GET_ORDERS,
    payload: orders
})

export const getOrders = () => async dispatch => {
    const orders = await fromAPI.getOrders()
    dispatch(allOrders(orders))
}

export const getOrdersSaga = () => ({
    type: GET_ORDERS_SAGA
})
//Socket
export const addData = (data) => ({
    type: ADD_DATA_SOCKET_SAGA,
    payload: data
})
