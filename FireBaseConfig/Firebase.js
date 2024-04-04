// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { v4 } from 'uuid';


const firebaseConfig = {
    apiKey: "AIzaSyDTa4DPeYiZd9oxciO53gWvaNktwQe0A8M",
    authDomain: "viticars-a3d12.firebaseapp.com",
    projectId: "viticars-a3d12",
    storageBucket: "viticars-a3d12.appspot.com",
    messagingSenderId: "510002801138",
    appId: "1:510002801138:web:7d5494807a74fdcdefa36b",
    measurementId: "G-SYEF1YYXCF"
};

export const FirebaseApp = initializeApp(firebaseConfig);

/////////////Conecciones para la autenticacion////////////////
export const FirebaseAuth = getAuth(FirebaseApp);

export async function userExist(uid) {
    const docRef = doc(db, 'users', uid);
    const res = await getDoc(docRef)
    console.log(res)
    return res.exists()
}


export async function registerNewUser(user) {
    try {
        const collectionRef = collection(db, 'users')
        const docRef = doc(collectionRef, user.uid)
        await setDoc(docRef, user);
    } catch (err) {
        console.log(err)
    }
}
/////////////////////////////////////////////////////////////

/////////////Conecciones para la base de datos////////////////

export const db = getFirestore(FirebaseApp);




/////////////////////////////////////////////////////////////
//////////Storage para guardar imagenes en FireBase//////////

export const storage = getStorage(FirebaseApp);

export const uploadFilePng = (file) => {
    const storageRef = ref(storage, `carImagesPng/${v4()}`);
    uploadBytes(storageRef, file)
    const url = getDownloadURL(storageRef)
    return url;
}
export const uploadFileJpg = (file) => {
    const storageRef = ref(storage, `carImagesJpg/${v4()}`)
    uploadBytes(storageRef, file)
    const url = getDownloadURL(storageRef)
    return url;
}

/////////////////////////////////////////////////////////////
//////////Funcion para recuperar todos los usuarios/////////