import { eventChannel } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import * as fromActions from '../actions';
import * as fromSocket from '../socket';

const createSocketChannel = socket => eventChannel((emit) => {
    const handler = (data) => {
        emit(data);
    };
    socket.on('data', handler);
    return () => {
        socket.off('data',handler);
    };
});

const listenServer = function* () {
    const socket = yield call(fromSocket.connect);
    const socketChannel = yield call(createSocketChannel, socket);
    while(true)
    {
        const payload = yield take(socketChannel);
        yield put(fromActions.addData(payload));
    }
};

export default listenServer