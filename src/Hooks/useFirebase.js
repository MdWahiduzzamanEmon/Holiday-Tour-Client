import { useState, useEffect } from "react";
import firebaseInitialize from '../Firebase/firebase.init';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

firebaseInitialize();
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
  const [user, setUser] = useState({})
  const [isLoading,setIsLoading]=useState(true)
// login
    const googleLogin = () => {
      setIsLoading(true)
        return signInWithPopup(auth, provider)
         
    }
//state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user)
          } else {
            setUser({})
          }
          setIsLoading(false);
        });
        return unsubscribe;
    },[])

    //logout
  const logOut = () => {
    console.log('click');
      setIsLoading(true)
        signOut(auth)
          .then(() => {
            setUser({})
          }).finally(()=>{
            setIsLoading(false);
          })
    }
    return {
      googleLogin,
        logOut,
        user,
      setUser,
      setIsLoading,
      isLoading
    };
};

export default useFirebase;