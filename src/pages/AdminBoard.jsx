// import { useEffect } from 'react'
// import { FirebaseAuth } from '../../FireBase';
// import { onAuthStateChanged } from 'firebase/auth';

import '../../public/style/AdminBoard.css'
import { Auth } from '../../FireBaseConfig/Authetication';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';



function AdminBoard() {

    Auth()

  return (
    <>
    <title>D` VitiCars | Admin</title>
    <Nav/>
    <Banner/>
    <div className="admin">
    <h3 className="sub-heading"><strong>Menú de</strong></h3>
    <h3 className="heading"><strong>Administración</strong></h3>
    <div className="boxes">
    <div className="box">
        <a href="/admin_car_list">
            <img src="https://i.imgur.com/j6nOumv.png"/>
            <h3>Listado de</h3>
            <div className="details">
              <span>Vehiculos</span>
              </div>
              </a></div>
              <div className="box">
              <a href="/admin_populares">
            <img src="https://i.imgur.com/XV7Yam9.png"/>
            <h3>Listado de</h3>
            <div className="details">
              <span>Populares</span>
              </div>
              </a></div>
              <div className="box">
              <a href="admin_novedades">
            <img src="https://i.imgur.com/41YhKes.png"/>
            <h3>Listado de</h3>
            <div className="details">
              <span>Novedades</span>
              </div>
              </a></div>
    </div>
    </div>
    

    <Footer id='contact'/>
    </>

  )
}

export default AdminBoard