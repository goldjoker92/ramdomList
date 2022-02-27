import { ADD_USER, EDIT_USER } from '../type';

const initialState = {
    users: []

}

export default function userReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_USER:
            return { ...state, users: payload }

        case EDIT_USER:
            console.log('b', state.users[payload.id])
            state.users[payload.id] = payload.data
            console.log('a', state.users[payload.id])
            return { ...state }

        default:
            return state;
    }


}