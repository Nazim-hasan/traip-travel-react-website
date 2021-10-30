import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";
firebaseInitialize();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
    },[])
    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
    }
    const signInUsingGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    return {
        signInUsingGoogle,
        user,
        logOut,
        isLoading
        }

}
export default useFirebase;