/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { createContext } from "react";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const user = null;

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
 
    return signInWithEmailAndPassword(auth, email, password);
  };
  const profileUpdate = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const logInWithGoogle = (providerGoogle) => {
   
    return signInWithPopup(auth, providerGoogle);
  };


  const authInfo = {
    user,
    createUser,
    signIn,
    profileUpdate,
    logInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
