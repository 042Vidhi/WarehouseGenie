// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxquRwcA-HrOjQ1PydI4Rl2D1llRtgzDk",
  authDomain: "warehousegenie-df125.firebaseapp.com",
  projectId: "warehousegenie-df125",
  storageBucket: "warehousegenie-df125.appspot.com",
  messagingSenderId: "1097028816097",
  appId: "1:1097028816097:web:25bcf43fb586c188ff3ba0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase Authentication
export const auth = getAuth(app);