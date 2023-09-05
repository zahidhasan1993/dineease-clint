import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";

export const DataProvider = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () =>  unsubscribe();
    },[auth]);

    const emailLogin = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth,googleProvider);
    }
    const updateUser = (name) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: ""
        })
    }
    const signInWithEmail = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }
    const infoData = {
        user,
        loader,
        emailLogin,
        googleLogin,
        updateUser,
        signInWithEmail,
        logOut
    }
    return (
        <DataProvider.Provider value={infoData}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;