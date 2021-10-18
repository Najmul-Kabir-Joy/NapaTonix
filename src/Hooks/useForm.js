import React, { useState } from 'react';
import useFirebase from './useFirebase';

const useForm = () => {
    const { createUser, emailSignIn } = useFirebase();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPass = (e) => {
        setPass(e.target.value);
    }
    const getName = (e) => {
        setName(e.target.value);
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        createUser(email, pass, name);
    }
    const emailLogin = (e) => {
        e.preventDefault();
        emailSignIn(email, pass);
    }
    const clearInputs = () => {
        if (email.length > 0) {
            document.getElementById('email').value = '';
            document.getElementById('pass').value = '';
            document.getElementById('name').value = '';
        }
    }
    return {
        getEmail,
        getPass,
        getName,
        handleRegistration,
        emailLogin,
        clearInputs
    }
};

export default useForm;