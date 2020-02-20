import { ADD_PROFILE, UPDATE_PROFILE } from "./action";


export function profilesReducer(state = [], action){
    switch (action.type) {
        case ADD_PROFILE:
            console.log(action.payload);
            return Object.assign({}, state, {
                profiles: [
                    ...state,
                    {profile: action.payload}
                ]
            })
        case UPDATE_PROFILE:
            return Object.assign({}, state, {
                profiles: [
                    ...state,
                    {profile: action.payload}
                ]
            })
        default:
            return state;
    }
}