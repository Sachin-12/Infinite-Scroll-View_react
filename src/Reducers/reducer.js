import { LOAD_PEOPLE, LOAD_DATA } from '../Constants/constants';

const initialState = {
    userInfo : []
}

function rootReducer(state= initialState,action){
    if (action.type === LOAD_PEOPLE){
        return Object.assign(
            {},
            state,
            {userInfo:state.userInfo.concat(action.payload)}
        )
    }
    if(action.type === LOAD_DATA){
        return state
    }
    return state;
}

export default rootReducer;