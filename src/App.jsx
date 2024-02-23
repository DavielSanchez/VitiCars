import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import CarList from './pages/CarList';
import Login from './pages/Login';
import Logout from './pages/Logout'
import AdminBoard from './pages/AdminBoard';
import AdminCarList from './pages/AdminCarList'
import AdminPopulares from './pages/AdminPopularesList'
import AdminNovedades from './pages/AdminNovedadesList'
import ErrorPage from './pages/errorPage';

// import Camaro from '../src/assets/home-img-2.png'
// import Honda from '../src/assets/home-img-1.png'
// import Maseratti from  '../src/assets/home-img-3.png'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/login" element={<Login />}/>

        {/* Starts Admin routes */}
        <Route path="/logout" element={<Logout />}/>
        <Route path="/admin" element={<AdminBoard />}/>
        <Route path="/admin_car_list" element={<AdminCarList />}/>
        <Route path="/admin_populares" element={<AdminPopulares />}/>
        <Route path="/admin_novedades" element={<AdminNovedades />}/>

        {/* Finish Admin routes */}

        <Route path="/car/:id" element={<CarDetail />}/>
        <Route path='/carlist' element={<CarList />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App











{/* <Route path="vehiculos" element={<Vehiculos />} />
          <Route path="administracion" element={<Administracion />} />
          <Route path="directorio" element={<Directorio />} />
          <Route path="vende" element={<Vende />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="contacto" element={<Administracion />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
