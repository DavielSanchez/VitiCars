import { Link } from 'react-router-dom';
import { useState, useEffect } from  'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../FireBaseConfig/Firebase';

// import Novedad from '../components/Novedad'
import '../style/Novedad.css'

// import Camaro from '../assets/home-img-2.png'
// import Honda from '../assets/home-img-1.png'
// import Maseratti from  '../assets/home-img-3.png'
// import HondaImg1 from '../assets/Honda1.jpg'
// import HondaImg2 from '../assets/Honda2.jpg'
// import HondaImg3 from '../assets/Honda3.jpg'
// import CamaroImg1 from '../assets/chevrolet1.jpg'
// import CamaroImg2 from '../assets/chevrolet2.jpg'
// import CamaroImg3 from '../assets/chevrolet3.jpg'
// import MaserattiImg1 from '../assets/maserati1.jpg'
// import MaserattiImg2 from '../assets/maserati2.jpg'
// import MaserattiImg3 from '../assets/maserati3.jpg'


function Novedades() {

//   let carros = [{
//     carId: 1,
//     carBrand: 'Honda',
//     carModel: 'Ridgeline',
//     carYear: 2019,
//     carPrice: '36,800',
//     Engine: '4 Cilindros',
//     exteriorColor: 'Gris',
//     interiorColor: 'Beige',
//     Fuel: 'Gasolina',
//     Transmission: 'Automática',
//     Traction: '4WD',
//     Type: ['Camioneta'],
//     Usage: '71.380',
//     Doors: 4,
//     Passengers: 5,
//     carDescription:"La Honda Ridgeline renovada tiene un diseño frontal más imponente, mientras que en el interior, encontrará comodidades sumamente lujosas.",    
//     carImage: Honda,
//     Img1: HondaImg1,
//     Img2: HondaImg2,
//     Img3: HondaImg3
// },
// {
//     carId: 2,
//     carBrand: 'Chrevrolet',
//     carModel: 'Camaro',
//     carYear: 2020,
//     carPrice: '55,900',
//     Engine: '5.0, 4 Cilindros',
//     exteriorColor: 'Gris',
//     interiorColor: 'Negro',
//     Fuel: 'Gasolina',
//     Transmission: 'Automática',
//     Traction: 'Trasera',
//     Type: ['Coupé', ' Deportivo', ' Muscle Car', ' Pony Car'],
//     Usage: '0',
//     Doors: 2,
//     Passengers: 4,
//     carDescription:"El Camaro, un automóvil estadounidense icónico, continua desafiando los límites del desempeño y con un estilo aerodinámico y un interior refinado pensado en ti.",
//     carImage:  Camaro,
//     Img1: CamaroImg1,
//     Img2: CamaroImg2,
//     Img3: CamaroImg3
// },
// {
//     carId: 3,
//     carBrand: 'Maserati',
//     carModel: 'Ghibli',
//     carYear: 2022,
//     carPrice: '83,900',
//     Engine: '3.0, V6',
//     exteriorColor: 'Azul',
//     interiorColor: 'Negro',
//     Fuel: 'Gasolina',
//     Transmission: 'Automática',
//     Traction: '4x4',
//     Type: ['Sedan', ' Deportivo'],
//     Usage: '0',
//     Doors: 4,
//     Passengers: 5,
//     carDescription:"Desafía lo ordinario, experimente algo verdaderamente único en un mundo de opciones estandarizadas.",
//     carImage:  Maseratti,
//     Img1: MaserattiImg1,
//     Img2: MaserattiImg2,
//     Img3: MaserattiImg3
// }
//   ]





  const [cars, setCars] = useState([])

  const carsCollection = collection(db, "car_Novedades")
  
  const getDocuments = async () => {
    const data = await getDocs(carsCollection)
    // console.log(data.docs[0]._document.data.value.mapValue.fields)
    console.log(cars)

    setCars(
      data.docs.map((doc)=>({...doc.data(), id: doc.id}))
    )
  }
  

  useEffect(()=>{
    getDocuments()
  }, [])


  return (
    <>
            {cars.map(carro => (
          <div className="container-novedad" key={cars.carId}>
            <div className="content">
                <span className='tag-novedad'>Novedad</span>
                <h3 className="car-name">{carro.carBrand} {carro.carModel}</h3>
                <p className="description">{carro.carDescription}</p>
                <Link className='link'
                  to={{
                    pathname: `/car/${carro.carId}`,
                    }}
                  state={{Id: `${carro.Id}`, 
                          carBrand:`${carro.carBrand}`, 
                          carModel:`${carro.carModel}`, 
                          carYear:`${carro.carYear}`, 
                          carPrice:`${carro.carPrice}`, 
                          carEngine:`${carro.carEngine}`, 
                          exteriorColor:`${carro.exteriorColor}`, 
                          interiorColor:`${carro.interiorColor}`, 
                          carFuel:`${carro.carFuel}`, 
                          carTransmission:`${carro.carTransmission}`, 
                          carTraction:`${carro.carTraction}`, 
                          carType:`${carro.carType}`, 
                          carUsage:`${carro.carUsage}`, 
                          carDoors:`${carro.carDoors}`, 
                          carPassengers:`${carro.carPassengers}` , 
                          carDescription: `${carro.carDescription}`, 
                          carImagePng:`${carro.carImagePng}`, 
                          image1:`${carro.image1}`, 
                          image2: `${carro.image2}`, 
                          image3:`${carro.image}`
                        }}>
                  Ver más
                </Link>
            </div>
            <div className="container-image">
                <img className="image" src={carro.carImagePng} alt=""/>
            </div>
          </div>
        ))}
      </>
  )
}

export default Novedades