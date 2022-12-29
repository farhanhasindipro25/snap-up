// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7KnZviWrw7jkFnnPJcUbIoW9_93rGbiY",
  authDomain: "taskboarders.firebaseapp.com",
  projectId: "taskboarders",
  storageBucket: "taskboarders.appspot.com",
  messagingSenderId: "11998135628",
  appId: "1:11998135628:web:13cb38fb712183844f7be9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
