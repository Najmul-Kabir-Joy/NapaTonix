import React, { useState } from 'react';
import firebaseInit from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2'

firebaseInit()
const useFirebase = () => {
    const [users, setUser] = useState({});
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
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
        return signInWithPopup(auth, googleProvider)

    };

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const createUser = (email, pass, name) => {
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
    };


    const emailSignIn = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(res => {
                setUser(res.user)
                successAlert()
            })
            .catch(err => {
                setError(err.message)
                failAlert()
            })
    };

    const logOut = (e) => {
        signOut(auth)
            .then(setUser({}))
            .catch(err => setError(err.message))
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
        }
    });

    return {
        users,
        googleSignIn,
        createUser,
        emailSignIn,
        setUser,
        logOut,
        setUserName,
        successAlert,
        error
    }
};

export default useFirebase;