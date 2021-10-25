import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
        
    }
    
    const logOut = ()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } 
          })
    },[])
    return {
        user,
        logOut,
        signInWithGoogle,
        error,
        setError
    }
}

export default useFirebase