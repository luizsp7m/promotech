import { createContext, useEffect, useState } from 'react';

import { firebase, auth } from '../services/firebase';

import Router from 'next/router'

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoadingUser(true);

      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }

      setLoadingUser(false);
    })

    return () => {
      unsubscribe();
    }
  }, []);

  async function signInWithGoogle() {
    setLoadingUser(true);

    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }

    setLoadingUser(false);
  }

  async function signOut() {
    firebase.auth().signOut();
    Router.reload(window.location.pathname);
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, loadingUser, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}