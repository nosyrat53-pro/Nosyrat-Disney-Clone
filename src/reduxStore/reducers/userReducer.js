import { auth } from "../../firebase";


export var initial = {
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    photo: localStorage.getItem('photo'),
}

auth.onAuthStateChanged( async (user) => {

    if(user){

        localStorage.setItem('name',user.displayName);
        localStorage.setItem('email',user.email);
        localStorage.setItem('photo',user.photoURL);

        initial = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }
    }
});


export default function userReducer( initialState = initial , action ){

    if(action.type == 'LOGIN'){
        return {
            ...action.data
        };
    }

    if(action.type == 'SIGNOUT'){
        localStorage.setItem('name',undefined);
        localStorage.setItem('email',undefined);
        localStorage.setItem('photo',undefined);

        return {
            name: undefined,
            email: undefined,
            photo: undefined
        }
    }
    return initialState;
};