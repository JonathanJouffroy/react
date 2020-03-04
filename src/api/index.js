export const getStudents = async () => {
    const url = 'http://localhost:8080/v1/users'

    try
    {
        const response = await fetch(url, {
            method: 'GET',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            }
        })
        return await response.json();
    }  
    catch (err)
    {
        return console.error(err)
    }
}