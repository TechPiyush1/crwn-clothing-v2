// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getauth, 
    signInWithRedirect, 
   
    signInWithPopup,
    GoogleAuthProvider,
    getAuth
 } from 'firebase/auth';
 import {
   getFirestore,
   doc,
   getDoc,
   setDoc,
 }
 from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARVd5v4Xa9OQT2fs-Yu-iL7XcDolkKGYk",
  authDomain: "sidehustle-abe8a.firebaseapp.com",
  projectId: "sidehustle-abe8a",
  storageBucket: "sidehustle-abe8a.appspot.com",
  messagingSenderId: "488534591768",
  appId: "1:488534591768:web:720c077a2cc619c493b66d"
};

// Initialize Firebase
const firebaseApp= initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account",
});

export const auth=getAuth();
export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);

export const db =getFirestore();

export const createUserDocumentFromAuth=async(userAuth)=>{
const userDocRef =doc(db,'users',userAuth.uid);


console.log(userDocRef);



const userSnapshot =await getDoc(userDocRef);
console.log(userSnapshot);
console.log(userSnapshot.exists());

if(!userSnapshot.exists()){
  const  {displayName, email}=userAuth;
  const createdAt=new Date();


try{
  await setDoc(userDocRef, {
    displayName,
    email,
    createdAt
  });
} catch(error){
  console.log('error creating the user',error.message);
}
}

return userDocRef

}
