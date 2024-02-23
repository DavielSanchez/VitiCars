import { useRef, useEffect, useState } from "react";
import '../style/Nav.css'
import { Auth } from '../../FireBaseConfig/Authetication';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import NavLoggedIn from "./NavLoggedIn";
import NavNotLoggedIn from "./NavNotLoggedIn";
import NavLoggedInUser from "./NavLoggedInUser";

import { FirebaseAuth, userExist } from '../../FireBaseConfig/Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Firestore, getFirestore, collection, addDoc, getDocs, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../FireBaseConfig/Firebase';



function Nav() {

  const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

  const [users, setUsers] = useState();
  const [role, setRole] = useState('user');
  const [userName, setUserName] = useState(`user ${Math.random()}`);

  // const getName = async (uid) => {
  //   const docuRef = doc(db, 'Users', uid)
  //   const data  = await getDoc(docuRef)
  //   const nombre = data.data().name
  //   setName(nombre)
  // }

  async function getRole(uid){
    const docuRef = doc(db, 'Users', uid)
    const docuCifrada = await getDoc(docuRef)
    const docu = docuCifrada.data().role
     return docu
  }

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, userStateChanged)
  },[])

  const userStateChanged = async (user) =>{
    if (user){
      console.log(user)
      
      getRole(user.uid).then((role) => { 
        const userdata = {
          uid: user.uid,
          email: user.reloadUserInfo.email,
          name: user.name,
          role: role
        }
        console.log(userdata)
        if (userdata.role == 'admin') {
          setUsers('logged')
          setRole('admin')
        }else if (userdata.role == 'user'){
          setUsers('logged')
          setRole('user')
        }else if(userdata.role == 'guest'){
          setUsers('logged')
          setRole('guest')
        }else{
          setUsers('not logged')
        }
      })
    } else{
      setUsers('not logged')
    }
  }

  if(users == 'logged' && role == 'admin'){
       return <NavLoggedIn photo={user.photoURL} name={userName} />
     }else if(users == 'logged' && role == 'user'){
      return <NavLoggedInUser photo={user.photoURL} name={userName} />
     }else if(users == 'logged' && role == 'guest'){
      return  <NavLoggedIn/>
     }
     else{
      return  <NavNotLoggedIn/>
     }

}

export default Nav