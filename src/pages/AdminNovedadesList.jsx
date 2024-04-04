// import { useEffect } from 'react'
// import { FirebaseAuth } from '../../FireBase';
// import { onAuthStateChanged } from 'firebase/auth';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Admin_ListTable from '../components/admin_ListTable'
import { Auth } from '../../FireBaseConfig/Authetication';
import ExternalAdd from '../components/ExternalAdd';

function AdminNovedadesList() {

  const db_collection = 'car_Novedades'

    Auth()

  return (
    <>
    <title>D` VitiCars | Admin Novedades</title>
    <Nav/>
    <Banner/>
    <div className="admin">
    <h3 className="sub-heading"><strong>Listado de</strong></h3>
    <h3 className="heading"><strong>Novedades</strong></h3>
    <Admin_ListTable db_collection = {db_collection}/>
    <div className="addCar">
    <ExternalAdd db_collection = {db_collection}/>
    </div>
      </div>
    <Footer id='contact'/>
    </>
  )
}

export default AdminNovedadesList