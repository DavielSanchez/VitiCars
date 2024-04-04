

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Admin_ListTable from '../components/admin_ListTable'
// import AddCar from '../components/AddCar';
import { Auth } from '../../FireBaseConfig/Authetication';
import ExternalAdd from '../components/ExternalAdd';

function AdminPopularesList() {

    Auth()

    const db_collection = 'car_Populares'

  return (
    <>
    <title>D` VitiCars | Admin Populares</title>
    <Nav/>
    <Banner/>
    <div className="admin">
    <h3 className="sub-heading"><strong>Listado de</strong></h3>
    <h3 className="heading"><strong>Vehiculos Populares</strong></h3>
    <Admin_ListTable db_collection = {db_collection}/>
    <div className="addCar">
    {/* <AddCar db_collection = {db_collection}/> */}
    <ExternalAdd db_collection = {db_collection}/>

    </div>      
    </div>
    <Footer id='contact'/>
    </>
  )
}

export default AdminPopularesList