// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs  } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAorVEgDBT9jWnOFEqlIY3SgLQ7t0U5X2w",
  authDomain: "blog-a3e68.firebaseapp.com",
  projectId: "blog-a3e68",
  storageBucket: "blog-a3e68.appspot.com",
  messagingSenderId: "101209897840",
  appId: "1:101209897840:web:d9dd577834cdb878926db5",
  measurementId: "G-G7J35ZHEZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getPosts(){
  const postsCol = collection(db, 'blog-posts')
  const postSnapshot = await getDocs(postsCol)
  const postList = postSnapshot.docs.map(docs => docs.data())
  return postList
}