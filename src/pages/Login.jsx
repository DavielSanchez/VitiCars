import '../style/Login.css'
import { useEffect, useRef, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { FirebaseAuth, userExist } from '../../FireBaseConfig/Firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { Firestore, getFirestore, collection, addDoc, getDocs, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../FireBaseConfig/Firebase';

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [Name, setName] = useState();

  const [newUserEmail, setNewUserEmail] = useState();
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserConfirmPassword, setNewUserConfirmPassword ] = useState('');
  const [newUserRole, setNewUserRole ] = useState("guest");

  const login_Container = useRef();

  const signUp = () => {
    login_Container.current.classList.add(("right-panel-active"))
  }
  const signIn = () => {
    login_Container.current.classList.remove("right-panel-active");
  
  }  

  // Aqui  va el codigo para que se autentique con google y demas redes sociales

  // -- Empieza bloque para verificar el registro y asi poder redirigir a la siguiente vista -- \\

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
      // window.location.replace("/admin");
      // console.log(user.displayName)
    } else{
      // show the login container when no one is logged in
    }
  }

  // -- Termina bloque para verificar el registro y asi poder redirigir a la siguiente vista -- \\

// -- Empieza bloque para registro de usuarios usando su Email -- \\

async function register (){


    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, newUserEmail, newUserPassword, Name, newUserRole)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    const docuRef = doc(db, "Users", user.reloadUserInfo.localId);
      setDoc(docuRef, {email: newUserEmail, name: Name, role:newUserRole})
      })
    }

      

      
   
  



// -- Termina bloque para registro de usuarios usando su Email -- \\

 
// -- Empieza bloque para la autenticacion con diferentes provedores -- \\

// const handleOnClickGoogle = async () => {
//   const googleProvider = new GoogleAuthProvider();
//   await signInWithGoogle(googleProvider)
// }
// // debugger;
// const signInWithGoogle  = async (googleProvider) => {
//   try {
//     const res = await signInWithPopup(FirebaseAuth, googleProvider)
//     .then ((result) => {
//       const credential = googleProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       // console.log(user)
//       // console.log(token + ' '+ user.uid);
//       const docuRef = doc(db, "Users", user.uid);
//       setDoc(docuRef, {email: user.email, name: user.displayName, role:newUserRole})
//     })
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// }

const handleOnClickEmail = async () => {
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}



// -- Termina bloque para la autenticacion con diferentes provedores -- \\




  return (
    <>
    {/* <div className="login_View"> */}
    <div className="login_Container col-sm-0 d-none" id="container" ref={login_Container}>
        <div className="form-container sign-up-container showOnly">
            <form action="#">
                <h1>Create Account</h1>
                {/* <div className="social-container">
                    <a className="social" onClick={handleOnClickGoogle}><GoogleIcon /></a>
                    {/* <a href="#" className="social"><FacebookIcon/></a>
                    <a href="#" className="social"><LinkedInIcon/></a> */}
                {/* </div>
                <span>or use your email for registration</span> */}
                <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={e=>setNewUserEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e=>setNewUserPassword(e.target.value)} />
                <button onClick={register()}>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                {/* <div className="social-container">
                  <a className="social" onClick={handleOnClickGoogle}><GoogleIcon /></a>
                  {/* <a className="social" onClick={handleOnClickEmail}><EmailOutlinedIcon/></a> */}
                    {/* <a href="#" className="social"><LinkedInIcon/></a> */}
                {/* </div>
                <span>or use your account</span> */}
                <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                <a href="/error404">Forgot your password?</a>
                <button onClick={handleOnClickEmail}>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn" onClick={signIn}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp" onClick={signUp}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    {/* <div className="form-container sign-in-container mobile-login">
            <form action="#">
                <h1>Sign in</h1>
                {/* <div className="social-container">
                  <a className="social" onClick={handleOnClickGoogle}><GoogleIcon /></a>
                  {/* <a className="social" onClick={handleOnClickEmail}><EmailOutlinedIcon/></a> */}
                    {/* <a href="#" className="social"><LinkedInIcon/></a> */}
                {/* </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                <a href="/error404">Forgot your password?</a>
                <button onClick={handleOnClickEmail}>Sign In</button>
            </form>
        </div>*/}
        {/* </div>  */}

    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <div className="container margin-auto bg-dark">
    <div className="form-container sign-in-container mobile-login">
            <form action="#">
                <h1>Sign in</h1>
                {/* <div className="social-container">
                  <a className="social" onClick={handleOnClickGoogle}><GoogleIcon /></a>
                  {/* <a className="social" onClick={handleOnClickEmail}><EmailOutlinedIcon/></a> */}
                    {/* <a href="#" className="social"><LinkedInIcon/></a> */}
                 {/* </div> */}
                <span>or use your account</span>
                <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                <a href="/error404">Forgot your password?</a>
                <button onClick={handleOnClickEmail}>Sign In</button>
            </form>
        </div>
    </div>
    
      </>
  )
}

export default Login