import React, { createContext, useContext, useEffect, useState } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        user: null,
        isLoading: false,
    });

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            setAuthState((p) => ({ ...p, user: user }));
        })

        return () => {
            unsubscribe();
        }
    }, []);

    const signIn = async (email , password) => {
        console.log(email, password);
        try {
            await auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('login success' + authState);
            })
        } catch (err) {
            console.log((err));
            Alert.alert('ลงชื่อเข้าใช้ไม่สำเร็จ', 'error:' + err)
        }
        
    }

    const signup = async (email, password, fullname) => {
        try {
            await auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                        firestore().collection('UserData')
                        .doc(firebase.auth().currentUser.uid)
                        .set({
                            email,
                            password,
                            fullname,
                        })
                })
            Alert.alert('ลงทะเบียนสำเร็จ')
        } catch (err) {
            console.log((err));
            Alert.alert('ลงทะเบียนไม่สำเร็จ', 'error:' + err)
        }
    };

    const signOut = async () => {
        try {
            await auth().signOut().then(() => {console.log('Logout');})
        } catch (err) {
            console.log((err));
        }

    }
    const contextValue = {
        signup,
        user : authState.user,
        signOut,
        signIn,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};