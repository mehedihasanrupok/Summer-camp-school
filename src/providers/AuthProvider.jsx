import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider1 = new GoogleAuthProvider();

    const googleLog = () =>{
        return signInWithPopup(auth,provider1);
   } 

    const createUser = (email, password )=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
             console.log(currentUser);
             setLoading(false);
          });
          return () => {
             return unsubscribe();
          }
     },[])

     const authInfo ={
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        googleLog,
        logOut
     }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;