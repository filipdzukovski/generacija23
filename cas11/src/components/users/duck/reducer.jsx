import {GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAIL} from './constants';

const initialState = {
    users:[],
    error:undefined,
    //isLoading:false
}

export default function reducer(state=initialState,action){

    switch(action.type){

        case GET_USERS_REQUEST:
            return{
                ...state,
                //isLoading:true
            }
        case GET_USERS_SUCCESS:
            return{
                ...state,
                users:action.payload,
                //isLoading:false
            }
        case GET_USERS_FAIL:
            return{
                ...state,
                error:action.payload,
                //isLoading:false
            }


        default: return state;
    }
}