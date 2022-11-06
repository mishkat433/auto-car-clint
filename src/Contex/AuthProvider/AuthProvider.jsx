import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth"
import { toast } from 'react-toastify';

export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [findAdmin, setFindAdmin] = useState("");

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleSiginIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const loginUserManualy = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const emailUpdate = (email) => {
        updateEmail(auth.currentUser, email)
            .then((result) => {
                toast("Email update successful")
            }).catch((error) => {
                console.log(error.message);
            });
    }


    const logout = () => {
        localStorage.removeItem('car-token');
        signOut(auth).then(result => { }).catch(err => console.log(err.message))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoginUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])


    useEffect(() => {
        fetch(`https://auto-car-server.vercel.app/admin?email=${loginUser?.email}`)
            .then(res => res.json())
            .then(data => {
                setFindAdmin(data[0]?.email)
            })
    }, [loginUser])


    const authInfo = {
        loginUser, setLoginUser, loading, setLoading,
        googleSiginIn,
        logout,
        loginUserManualy,
        createUser,
        profileUpdate,
        facebookSignIn,
        findAdmin,
        emailUpdate
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;