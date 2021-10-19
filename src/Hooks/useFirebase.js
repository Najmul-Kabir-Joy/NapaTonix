import React, { useEffect, useState } from 'react';
import firebaseInit from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, FacebookAuthProvider, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2'

firebaseInit()
const useFirebase = () => {
    const [users, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoding, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const successAlert = () => {
        Swal.fire({
            title: 'SUCCESSFULL',
            text: 'Thank you for joing with us.',
            icon: 'success'
        });
    }
    const failAlert = () => {
        Swal.fire({
            title: 'FAILED',
            text: 'Please try again later.',
            icon: 'error'
        });
    }
    const auth = getAuth();
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    };

    const facebookSignIn = () => {
        setIsLoading(true);
        return (signInWithPopup(auth, facebookProvider))
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const createUser = (email, pass, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, pass)
            .then(userCredential => {
                setUser(userCredential.user)
                console.log(userCredential.user)
                setUserName(name);
                successAlert()
            })
            .catch(err => {
                setError(err.message)
                failAlert();
            })
            .finally(() => setIsLoading(false))
    };


    const emailSignIn = (email, pass) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, pass)
            .then(res => {
                setUser(res.user)
                successAlert()
            })
            .catch(err => {
                setError(err.message)
                failAlert()
            })
            .finally(() => setIsLoading(false))
    };


    const logOut = (e) => {
        setIsLoading(true);
        signOut(auth)
            .then(setUser({}))
            .catch(err => setError(err.message))
            .finally(() => { setIsLoading(false) })
    }

    //observer for user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    console.log(error);

    return {
        users,
        googleSignIn,
        createUser,
        emailSignIn,
        setUser,
        logOut,
        setUserName,
        setError,
        successAlert,
        failAlert,
        facebookSignIn,
        setIsLoading,
        isLoding,
        error
    }
};

export default useFirebase;