import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children}) => {
    const [ user, setUser] = useState(null);

 const createUser =(email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
 };
 const SingIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email,password)

 }
 const logOut =() =>{
    return signOut(auth)
 }
 useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
     console.log('user in the auth state Changed',currentUser);
     setUser(currentUser);
    });
    return ()=>{
        unSubscribe();
    }
 },[])

    const AuthInfo ={
        user,
        createUser,
        SingIn,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children:PropTypes.node
}
export default AuthProvider;