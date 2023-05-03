import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from 'firebase/auth';
import React, { useEffect, useState, useContext } from 'react';
import {auth} from "../Firebase"
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider  = ({children}) => {

    const [currentuser,setcurrentuser] = useState()
    const [loading,setloading] = useState(true)

    function signup(email,password){
        return createUserWithEmailAndPassword(getAuth(), email, password)
        // const auth = getAuth();
        // createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email,password){
        return signInWithEmailAndPassword(getAuth(), email, password)
        // const auth = getAuth();
        // createUserWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(getAuth());
    }
    function Resetpassword(email){
        return sendPasswordResetEmail(getAuth(),email);
    }
    function UpdateEmail(email){
        return updateEmail(auth.currentUser,email);
    }
    function updatePass(password){
        return updatePassword(auth.currentUser,password);
    }

    useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((user)=>{
    setcurrentuser(user)
    setloading(false)
   })
   return unsubscribe
    }, [])
    

    const value ={
        currentuser,
        signup,
        login,
        logout,
        Resetpassword,
        UpdateEmail,
        updatePass
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

