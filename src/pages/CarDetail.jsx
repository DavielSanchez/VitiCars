import '../../public/style/CarDetail.css'
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import CarDetailTable from '../components/CarDetailTable'

function CarDetail() {

  // const { carId, carName } = props.location.aboutProps;
  const location = useLocation();
  const {
    // carId, 
    carBrand, 
    carModel,
    carYear,
    carPrice,
    carEngine,
    exteriorColor,
    interiorColor,
    carFuel,
    carTransmission,
    carTraction,
    carType,
    carUsage,
    carDoors,
    carPassengers,
    // carDescription, 
    image1,
    image2,
    image3} = location.state;

    window.onload = function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

 
  return (
    <>
        <title>D` VitiCars | {carBrand} {carModel}</title>
        <Nav/>
        <div className="title">
        <h1 className="titulo2"><b>{carBrand}  {carModel}</b></h1>
        <div className="underline"></div>
        <Carousel image1={image1}  image2={image2}  image3={image3} />
        </div>
        <div className="marcas" id="marcas">
            <h3 className="sub-heading"> Datos Sobre El Carro </h3>
            <h1 className="heading"> Cuotas desde: RD$ 40,000 / mes </h1>
        </div>
        <section>
          <CarDetailTable carBrand={carBrand} carModel={carModel} carYear={carYear} carPrice={carPrice} carEngine={carEngine} exteriorColor={exteriorColor} interiorColor={interiorColor} carFuel={carFuel} carTransmission={carTransmission} carTraction={carTraction} carType={carType} carUsage={carUsage} carDoors={carDoors} carPassengers={carPassengers}/>
        </section>
        
        <footer className='footer' id='footer'>
      <Footer id='contact'/>
      </footer>
    </>
  )
}

export default CarDetail