import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
import axios from "axios";

export const DataProvider = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                axios.post('https://dineease-server-lemon.vercel.app/jwt', {
                    email: currentUser.email
                })
                .then(data => {
                    // console.log(data.data.token);
                    localStorage.setItem('ACCESS-TOKEN', data.data.token);
                    setLoader(false)

                })
            }
            else{
                localStorage.removeItem('ACCESS-TOKEN')
            }
            
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