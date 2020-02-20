import * as action from "./action";
import store from "./store";

export const boundAddProfile = profile => store.dispatch(action.addProfile(profile));
export const boundUpdateProfile = profile => store.dispatch(action.addProfile(profile));