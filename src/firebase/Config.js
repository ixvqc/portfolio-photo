import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCIX7UuWcUBIdj-y-C0YwhqyZNhAo1dMRk",
    authDomain: "juliakontraswiat.firebaseapp.com",
    projectId: "juliakontraswiat",
    storageBucket: "juliakontraswiat.appspot.com",
    messagingSenderId: "1007032515906",
    appId: "1:1007032515906:web:1230bf77eb189c38555cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imagesDb = getStorage(app);