// ACTION -> DESCRIPTION OF TASK RETURNS OBJ
export const ADD_PROFILE = 'ADD_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export function addProfile(profile) {
    console.log("Person is: " + profile.name);
    return{
        type: ADD_PROFILE,
        payload: profile
    };
}

export function updateProfile(profile){
    console.log("Person is: " + profile.name);
    return{
        type: UPDATE_PROFILE, 
        payload: profile
    };
}