import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

  const auth = getAuth(app)

    const [user, setUser] = useState(null)

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const userINfo = {
        user,
        createUser,

    }

    return (
       <AuthContext.Provider value={userINfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;