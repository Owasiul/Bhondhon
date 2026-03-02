import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   create and signIn user via email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User Data
  const updateUserData = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  };

  //   signIn User with Google
  const googleSignIn = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // create signOut
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("access-token"); // Clear token on logout
    return signOut(auth);
  };

  // Function to get token from backend
  const getTokenFromBackend = async (user) => {
    if (user?.email) {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.post(`${apiUrl}/jwt`, {
          email: user.email,
        });
        if (response.data.accessToken) {
          localStorage.setItem("access-token", response.data.accessToken);
        }
      } catch (error) {
        console.error("Error getting token from backend:", error);
      }
    }
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      // Get token from backend when user logs in
      await getTokenFromBackend(currentUser);
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);
  if (loading) {
    return;
  }
  const authInfo = {
    createUser,
    user,
    setUser,
    signInUser,
    loading,
    googleSignIn,
    logOut,
    updateUserData,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
