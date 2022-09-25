import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { app } from "./firebase";
import {
  getSingleProduct as singleProduct,
  updateProduct as updateProd,
} from "../api";

const FirebaseContext = createContext();

function FirebaseProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [updateId, setUpdateId] = useState();
  const [imagesCollection, setImagesCollection] = useState([]);
  const auth = getAuth();

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function getSingleProduct(id) {
    const data = await singleProduct(id);
    return data;
  }

  async function updateProduct(id, data) {
    await updateProd(id, data);
  }

  const value = {
    login,
    user,
    error,
    imagesCollection,
    setImagesCollection,
    getSingleProduct,
    updateId,
    setUpdateId,
    updateProduct,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}

function useProvider() {
  const auth = useContext(FirebaseContext);
  return { ...auth, isAuthenticated: auth.user != null };
}

export { useProvider, FirebaseProvider };
