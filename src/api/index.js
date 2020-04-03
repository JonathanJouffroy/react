export const getUsers = async () => {
    const url ='https://nodea-ppjs.herokuapp.com/v1/users'
    try{
        const response = await fetch(url, {
            method: 'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()

    }catch(err){
        return console.error(err)
    }
}


export const getProducts = async () => {
    const url ='https://nodea-ppjs.herokuapp.com/v1/products'
    try{
        const response = await fetch(url, {
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch(err){
        return console.error(err)
    }
}


export const getOrders = async () => {
    const url='https://nodea-ppjs.herokuapp.com/v1/orders'
    try{
        const response = await fetch(url, {
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        })
        return await response.json()
    } catch(err){
        return console.error(err)
    }
}