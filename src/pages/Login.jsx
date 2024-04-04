import '../../public/style/Login.css'
import { useEffect, useRef, useState } from 'react';
// import GoogleIcon from '@mui/icons-material/Google';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FirebaseAuth, userExist } from '../../FireBaseConfig/Firebase';
import { onAuthStateChanged, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../FireBaseConfig/Firebase';

function Login() {

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [Name, setName] = useState();

  // const [newUserEmail, setNewUserEmail] = useState();
  // const [newUserPassword, setNewUserPassword] = useState('');
  // const [newUserConfirmPassword, setNewUserConfirmPassword ] = useState('');
  
  // eslint-disable-next-line no-unused-vars
  const [newUserRole, setNewUserRole ] = useState("guest");

  const login_Container = useRef();

  const signUp = () => {
    login_Container.current.classList.add(("right-panel-active"))
  }
  const signIn = () => {
    login_Container.current.classList.remove("right-panel-active");
  
  }  

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
    }
  }

  // -- Termina bloque para verificar el registro y asi poder redirigir a la siguiente vista -- \\

// -- Empieza bloque para registro de usuarios usando su Email -- \\

const register = async (e) => {

  e.preventDefault();
    const newUserName = e.target.newUserName.value;
    const newUserEmail = e.target.newUserEmail.value;
    const newUserPassword = e.target.newUserPassword.value;


    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, newUserEmail, newUserPassword, newUserName, newUserRole)
    .then((userCredential) => {
    const user = userCredential.user;
    const docuRef = doc(db, "Users", user.reloadUserInfo.localId);
      setDoc(docuRef, {email: newUserEmail, name: newUserName, role:newUserRole})
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
//       console.log()
//       console.log(user)
//       console.log(token + ' '+ user.uid);
//       const docuRef = doc(db, "Users", user.uid);
//       setDoc(docuRef, {email: user.email, name: user.displayName, role:newUserRole})
//     })
//     console.log(res);
//   } catch{}
// }

const handleOnClickEmail = async (e) => {
  e.preventDefault();
  const Email = e.target.loginEmail.value;
  const Password = e.target.loginPassword.value;
  const auth = getAuth();
signInWithEmailAndPassword(auth, Email, Password)
  
}



// -- Termina bloque para la autenticacion con diferentes provedores -- \\




  return (
    <>
    <title>D` VitiCars | Login</title>
    <div className="login_View">
    <div className="login_Container" id="container" ref={login_Container}>
        <div className="form-container sign-up-container showOnly">
            <form onSubmit={register}>
                <h1>Create Account</h1>
                <div className="social-container">
                    {/* <a className="social" onClick={handleOnClickGoogle}><GoogleIcon /></a> */}
                    {/* <a href="#" className="social"><FacebookIcon/></a>
                    <a href="#" className="social"><LinkedInIcon/></a> */}
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" id='newUserName'/>
                <input type="email" placeholder="Email" id='newUserEmail' />
                <input type="password" placeholder="Password" id='newUserPassword' />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnClickEmail}>
                <h1>Sign in</h1>
                {/* <div className="social-container">
                  <a className="social" onClick={handleOnClickGoogle}><GoogleIcon /></a>
                  {/* <a className="social" onClick={handleOnClickEmail}><EmailOutlinedIcon/></a> */}
                    {/* <a href="#" className="social"><LinkedInIcon/></a> */}
                {/* </div>
                <span>or use your account</span> */}
                <input type="email" placeholder="Email" id='loginEmail' />
                <input type="password" placeholder="Password" id='loginPassword'/>
                <a href="/error404">Forgot your password?</a>
                <button type='submit' >Sign In</button>
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
    </div>
    
    
      </>
  )
}

export default Login