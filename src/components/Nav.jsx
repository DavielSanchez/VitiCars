import { useEffect, useState } from "react";
import '../../public/style/Nav.css'
// import { Auth } from '../../FireBaseConfig/Authetication';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import NavLoggedIn from "./NavLoggedIn";
import NavNotLoggedIn from "./NavNotLoggedIn";
import NavLoggedInUser from "./NavLoggedInUser";
import NavLoggedInAdmin from "./NavLoggedInAdmin";

import { FirebaseAuth } from '../../FireBaseConfig/Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../FireBaseConfig/Firebase';



function Nav() {

  const auth = getAuth();
  const user = auth.currentUser;

  const [users, setUsers] = useState();
  const [role, setRole] = useState('guest');
  // eslint-disable-next-line no-unused-vars
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
    console.log(docuCifrada);
    console.log(user)
    const docu = docuCifrada.data().role
    return docu
  }

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, userStateChanged)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const userStateChanged = async (user) =>{
    if (user){
      // console.log(user)
      
      getRole(user.uid).then((role) => { 
        const userdata = {
          uid: user.uid,
          email: user.reloadUserInfo.email,
          name: user.name,
          role: role
        }
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
       return <NavLoggedInAdmin photo={user.photoURL} name={userName} />
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