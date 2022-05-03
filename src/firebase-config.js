import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore'; 
import 'firebase/compat/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyCrPHA3v0OZc1uPXT-w_gvcA63b-9NhhbM",
    authDomain: "linkedin-clone-58e98.firebaseapp.com",
    projectId: "linkedin-clone-58e98",
    storageBucket: "linkedin-clone-58e98.appspot.com",
    messagingSenderId: "1023445671324",
    appId: "1:1023445671324:web:72182e02ca5fb8d8a3bc59"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider(); 
const storage = firebase.storage(); 

export { auth, provider, storage }; 
export default db; 