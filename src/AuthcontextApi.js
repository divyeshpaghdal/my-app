import React, { useState, createContext, useContext } from 'react'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from './firebase';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify'

const authcontext = createContext()

const AuthProvider = ({ children }) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [photoURL, setphotoURL] = useState("")
    const [user, setuser] = useState("")
    const [updateName, setupdateName] = useState("")
    const navigate = useNavigate();

    //sign-in
    const submitSignIn = async (e) => {
        e.preventDefault()
        if (email && password && updateName && email.includes("@gmail.com") && photoURL) {
            try {
                const data = await createUserWithEmailAndPassword(auth, email, password, updateName,photoURL)
                updateProfile(auth.currentUser, {
                    displayName: updateName,
                    photoURL:photoURL

                })
                let userdata = {
                    email: data?.user?.email,
                    uid: data?.user?.uid,
                    username:updateName,
                    storephotoURL:photoURL,
                    time: Timestamp.now()
                }
                const userRef = collection(db, "user")
                const usersave = await addDoc(userRef, userdata)
            } catch (error) {
                console.log(error)
            }
            setemail("")
            setpassword("")
            alert("pls login")
            navigate("/")
        }
        else {
            toast("Fill Sign Form")
        }
    }

    //login
    const submitLogin = async (e) => {
        e.preventDefault()
        try {
            const data = await signInWithEmailAndPassword(auth, email, password, updateName)
            navigate("/home")
        } catch (error) {
            console.log(error)
            navigate("/")
            window.location.reload(false);
        }
    }

    //logout
    const logOut = async (e) => {
        e.preventDefault()
        try {
            const logoutUser = await signOut(auth)
            console.log("LogOUT", logoutUser)
        } catch (error) {
            console.log(error)
        }
        navigate("/")
        setemail("")
        setpassword("")
    }

    //onchangeuser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <authcontext.Provider value={{ user, updateName, setupdateName, email, setemail, password, setpassword,photoURL, setphotoURL, submitLogin, submitSignIn, logOut }}>
            {children}
        </authcontext.Provider>
    )
}

const useAuth = () => {
    return useContext(authcontext)
}

export { AuthProvider, useAuth }