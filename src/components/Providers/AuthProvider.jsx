import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth);
  }


  // const googleLogin = () => {

  // }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user state changed', currentUser)
        setUser(currentUser)
    });
    return () => {
        unsubscribe()
    }
  })

  const userinfo = {
    user,
    loading,
    createUser,
    signin,
    logout,
  };

  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
