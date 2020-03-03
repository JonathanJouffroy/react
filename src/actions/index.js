export const ADD_ONE = "ADD_ONE"
export const ADD_X = "ADD_X"



export const addOne = () =>({
    type: ADD_ONE

})

export const addX = (x) => ({
    type: ADD_X,
    payload: x
})

