import '../../public/style/CarList.css'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Car from '../components/Car'



function CarList() {


  return (
    <>
    <title>D` VitiCars | Cars List</title>
    <Nav/>
    <Banner/>
    <div className="anuncios">
    <h3 className="sub-heading"><strong>Todos Nuestros</strong></h3>
      <h3 className="heading"><strong>Vehiculos</strong></h3>
    <div className="box-container">
    <Car/>
    </div>
    </div>
    <Footer id='contact'/>
    </>
  )
}

export default CarList