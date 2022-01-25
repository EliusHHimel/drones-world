import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import initializeAuthentication from '../Firebase/firebase.init';
import { useLocation, useHistory } from 'react-router-dom';

const useFirebase = () => {
    initializeAuthentication();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const location = useLocation();
    const history = useHistory();
    const redirectURI = location.state?.from || '/dashboard'

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleName = event => {
        setName(event.target.value)
    }
    const handleNumber = event => {
        setNumber(event.target.value);
    }
    // Login using email and password
    const loginHandler = event => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                setError('');
                history.push(redirectURI);
            })
            .catch(error => {
                setError(error.message);
            })

    }
    // Sign Up using email and password
    const registrationHandler = event => {
        event.preventDefault();

        if (password.length < 6) {
            setError('Password must contain at least 6 characters.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user)
                setError('');
                updateDisplayName();
                history.push(redirectURI);
                saveUserToDB(user.email, name, 'POST');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const updateDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            phoneNumber: number
        }).then(() => {

        }).catch((error) => {

        });
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { user } = result;
                saveUserToDB(user.email, user.displayName, 'PUT');
                setUser(user);
                history.push(redirectURI);
            })
            .catch(error => {
                setError(error);
            });
    };
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const { user } = result;
                saveUserToDB(user.email, user.displayName, 'PUT');
                setUser(user);
                history.push(redirectURI);
            })
            .catch(error => {
                setError(error);
            });
    };

    // Sign out/log out
    const signOutHandle = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                history.push('/')
            })
            .finally(() => setIsLoading(false))
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false)
        })
        return unsubscribe;
    }, [auth])

    // useEffect(() => {
    //     fetch(`https://peaceful-reaches-96347.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAdmin(data.admin)
    //         })
    // }, [user.email])

    const saveUserToDB = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://peaceful-reaches-96347.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        signInWithGoogle,
        user,
        error,
        isLoading,
        signOutHandle,
        signInUsingGithub,
        handleEmail,
        handlePassword,
        handleName,
        handleNumber,
        loginHandler,
        registrationHandler

    }
};

export default useFirebase;