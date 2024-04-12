import { Link } from 'react-router-dom';
import { useState, useEffect } from  'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../FireBaseConfig/Firebase';
import '../../public/style/Novedad.css'



function Novedades() {

  const [cars, setCars] = useState([])

  const carsCollection = collection(db, "car_Novedades")
  
  const getDocuments = async () => {
    const data = await getDocs(carsCollection)

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
          <div className="container-novedad" key={cars.id}>
            <div className="content col-xl-6 col-md-6 col-sm-12">
                <span className='tag-novedad'>Novedad</span>
                <h3 className="car-name">{carro.carBrand} {carro.carModel}</h3>
                <p className="description">{carro.carDescription}</p>
                <Link className='link'
                  to={{
                    pathname: `/car/${carro.carBrand}-${carro.carModel}`,
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
            <div className="container-image col-xl-6 col-md-6 col-sm-12">
                <img className="image" src={carro.carImagePng} alt=""/>
            </div>
          </div>
        ))}
      </>
  )
}

export default Novedades