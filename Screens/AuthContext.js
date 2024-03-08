import React, { createContext, useContext, useEffect, useState } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigation = useNavigation();
    const [authState, setAuthState] = useState({
        user: null,
        isLoading: false,
    });

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            setAuthState((p) => ({ ...p, user: user }));
            console.log(user);
        })

        return () => {
            unsubscribe();
        }
    }, []);

    console.log('islodingAuth', authState.isLoading);
    const signIn = async (email, password) => {
        console.log(email, password);
        try {
            await auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('login success');
                })
        } catch (err) {
            console.log((err));
            Alert.alert('ลงชื่อเข้าใช้ไม่สำเร็จ', 'อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง')
        }

    }

    const signup = async (email, password, fullname) => {
        try {
            setAuthState((p) => ({ ...p, isLoading: true }));
            await auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    firestore().collection('UserData')
                        .doc(firebase.auth().currentUser.uid)
                        .set({
                            email,
                            password,
                            fullname,
                        })
                    signOut();
                })
            Alert.alert('ลงทะเบียนสำเร็จ', '', [
                { text: 'OK', onPress: () => { navigation.navigate('Login') } }
            ]);
        } catch (err) {
            console.log((err));
            setAuthState((p) => ({ ...p, isLoading: false }))
            Alert.alert('ลงทะเบียนไม่สำเร็จ', 'Error' + err, [
                { text: 'OK', onPress: () => { } }
            ]);
        }
    };

    const signOut = async () => {
        try {
            await auth().signOut().then(() => { console.log('Logout') })
        } catch (err) {
            console.log((err));
        }

    }
    const contextValue = {
        signup,
        user: authState.user,
        isLoading: authState.isLoading,
        signOut,
        signIn,
        setAuthState,
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