import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase.config";

export const DataProvider = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const auth = getAuth(app);


    const infoData = {
        user,
        loader
    }
    return (
        <DataProvider.Provider value={infoData}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;