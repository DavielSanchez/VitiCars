import { useRef } from "react";
import '../style/Nav.css'

function NavNotLoggedIn() {
    const sideBar = useRef();
  const showSidebar = ()=>{
    sideBar.current.style.display = "flex";
  }
  const hideSidebar = ()=>{
    sideBar.current.style.display = "none";
  }

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

        </nav> 
    
        
    </header>
      )
}

export default NavNotLoggedIn