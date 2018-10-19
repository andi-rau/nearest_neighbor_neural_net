import {createStore, applyMiddleWare} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(preloadedState={}){

    console.log('BLgdgshgj');
    

    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleWare(
            thunkMiddleware
        )
    );
}