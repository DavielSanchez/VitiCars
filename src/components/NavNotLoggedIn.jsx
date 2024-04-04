import { useRef } from "react";
import '../../public/style/Nav.css'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { getAuth, signOut } from "firebase/auth";

function NavNotLoggedIn() {

  // const MySwal = withReactContent(Swal)

    const sideBar = useRef();
  const showSidebar = ()=>{
    sideBar.current.style.display = "flex";
  }
  const hideSidebar = ()=>{
    sideBar.current.style.display = "none";
  }

  // const logout = () =>{

  //   MySwal.fire({
  //       title: "Estas seguro?",
  //       text: "Estas a punto de cerrar tu seccion.",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Si, cerrar seccion"
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //           const auth = getAuth();
  //           signOut(auth).then(() => {
  //               window.location.replace("/");
  //         });
  //       }
  //     });

  // }

    return (
        <header>
    
        <a href="/" className="logo">
            <img src="../../public/Viticars.png" alt="" width="200px" height="58px"/>
        </a>
    
    
        <nav className="navbar hideOnMoblie">
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="/">Inicio</a>
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="/carlist">Vehículos y +</a>
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="#vende">Vende</a>
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="#contact">Contáctanos</a>
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="/login">Login</a>

        </nav> 
        
        <a href="#" className="menuButton" onClick={showSidebar} >
          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </a>
    
    
        <nav className="sidebar showSideBar" id='sidebar' ref={sideBar}>
            <a href="#" className="closeButton" onClick={hideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="/">Inicio</a>
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="/carlist">Vehículos y +</a>
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="#vende">Vende</a>
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="#footer">Contáctanos</a>
            <a className={({isActive})=> (isActive ? 'Active' : null)} href="/login">Login</a>
            {/* <a className="dropdown-item" href="#" onClick={logout}><svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>
                Cerrar Seccion</a> */}

        </nav> 
    
        
    </header>
      )
}

export default NavNotLoggedIn