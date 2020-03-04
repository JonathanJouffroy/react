import io from 'socket.io-client'
const socketServerURL ='http://localhost:8080/'
let socket;

export const connect = () => {
    socket = io(socketServerURL)
    return new Promise((resolve) => {
        socket.on('connect', () => {
            console.log('connected')
            resolve(socket)
        })
    })

}