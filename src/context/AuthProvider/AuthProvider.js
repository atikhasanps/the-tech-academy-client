import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            console.log('state onchange', currentUser);
            setUser(currentUser)
        });

        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={user, providerLogin, createUser, signIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;