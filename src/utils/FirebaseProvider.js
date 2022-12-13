import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { app } from "./firebase";
import axios from "axios";

const FirebaseContext = createContext();

function FirebaseProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [updateId, setUpdateId] = useState();
  const [imagesList, setImagesList] = useState(null);
  const [imagesCollection, setImagesCollection] = useState([]);
  const auth = getAuth();
  const url = process.env.REACT_APP_API;

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function getSingleProduct(id) {
    return axios.get(`${url}/products/${id}`);
  }

  function getAllProducts() {
    return axios.get(`${url}/products`);
  }

  function updateProduct(id, updatedData) {
    return axios.patch(`${url}/products/${id}`, updatedData);
  }

  function deleteProduct(id) {
    return axios.delete(`${url}/products/${id}`);
  }

  function createProduct(data) {
    return axios.post(`${url}/products`, data);
  }

  async function logout() {
    return signOut(auth);
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
    deleteProduct,
    logout,
    getAllProducts,
    createProduct,
    setImagesList,
    imagesList,
    register,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    localStorage.setItem("isAuthenticated", false);
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

  return { ...auth };
}

export { useProvider, FirebaseProvider };
