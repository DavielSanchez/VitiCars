import '../../public/style/Home.css'
import '../../public/style/AdminPanel.css'
import { Auth } from '../../FireBaseConfig/Authetication';

import Nav from '../components/Nav'
import AdminUserTable from '../components/AdminUserTable';
import AdminUserAdd from '../components/AdminUserAdd';


function AdminPanel() {
    Auth()

  return (
    <>
    <title>D` VitiCars | Admin Panel</title>
    <Nav/>
    <div className='titulo_page'>
    <h3 className="sub-heading"><strong>Panel</strong></h3>
      <h3 className="heading"><strong>Administrativo</strong></h3>
      <div className='divider d-flex justify-content-center mb-4'><hr/></div>
    </div>
    <div className="user_board">
      <div className="row text-center mx-4">
        <h1 className='heading'>Administrador de usuarios</h1>
        <div className="user_table text-center border border-black">
          <AdminUserTable />
        </div>
        <div className="add d-flex justify-content-center">
        <AdminUserAdd />
        </div>
        </div>
      </div>
      </>
  )
}

export default AdminPanel

