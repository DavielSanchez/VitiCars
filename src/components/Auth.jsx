import { useEffect } from 'react';
import { FirebaseAuth, userExist } from '../../FireBase';
import { onAuthStateChanged } from 'firebase/auth';

function Auth() {

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, userStateChanged)
      },[])
    
      const userStateChanged = async (user) =>{
        if (user){
          // User is logged in
          const isRegistered = await userExist(user.uid);
          if (isRegistered){
            window.location.replace("/admin");
          }
          else{
            window.location.replace("/admin");
    
          }
        } else{
          // show the login container when no one is logged in
          window.location.replace("/login")
        }
      }

  return (
    <></>
  )
}

export default Auth