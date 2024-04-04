

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Admin_ListTable from '../components/admin_ListTable'
import AddCar from '../components/AddCar';
import '../../public/style/AdminCarList.css'
import { Auth } from '../../FireBaseConfig/Authetication';
function AdminCarList() {

  const db_collection = 'car_List'

    Auth()

    

  return (
    <>
    <title>D` VitiCars | Admin Cars</title>
    <Nav/>
    <Banner/>
    <div className="admin">
    <h3 className="sub-heading"><strong>Listado de</strong></h3>
    <h3 className="heading"><strong>Vehiculos</strong></h3>
    <Admin_ListTable db_collection = {db_collection}/>
    <br />
    <div className="addCar">
    <AddCar db_collection = {db_collection}/>
    </div>
      </div>
    <Footer id='contact'/>
    </>
  )
}

export default AdminCarList