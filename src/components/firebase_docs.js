import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC_B8_Qh-6QFkCJGIvxtimEitpqDSIxSe0",
    authDomain: "webpack-test-firebase.firebaseapp.com",
    projectId: "webpack-test-firebase",
    storageBucket: "webpack-test-firebase.appspot.com",
    messagingSenderId: "59335444510",
    appId: "1:59335444510:web:30392c4ed95b577340c60f"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'projects');

// get collection data
var projects_arr = [];

const myProjects = () => {
    return new Promise((resolve, reject) => {
        getDocs(colRef)
        .then((snapshot) => {

            snapshot.docs.forEach((doc) => {
                projects_arr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })

            return resolve(projects_arr)
        })
        .catch(err => {
            return reject(err)
        })
    });
}

export default myProjects;
