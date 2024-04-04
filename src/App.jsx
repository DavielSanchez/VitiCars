import '../public/App.css'
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
import AdminPanel from './pages/AdminPanel';
import ErrorPage from './pages/errorPage';



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
        <Route path="/panel_admin" element={<AdminPanel />}/>

        {/* Finish Admin routes */}

        <Route path="/car/:carModel" element={<CarDetail />}/>
        <Route path='/carlist' element={<CarList />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

