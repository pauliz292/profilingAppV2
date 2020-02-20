import { ProfileData } from "../api/profiles";
import * as dispatch from "../redux/dispatch";

export function addProfile(profile) {
    ProfileData.insert(
        {
            name: profile.name,
            age: profile.age,
            gender: profile.gender
        },
        (err, done) => { 
            done && dispatch.boundAddProfile(profile)
            console.log(err + " id = " + done)
        })
};

export function updateProfile(profile) {
    ProfileData.update(
        {_id: profile._id}, {$set: {
            name: profile.name,
            age: profile.age,
            gender: profile.gender
        }},
        (err, done) => {
            done && dispatch.boundUpdateProfile(profile)
            console.log(err + " id = " + done)
        })
};

export function deleteProfile(profile) {
    ProfileData.remove({_id: profile._id});
}