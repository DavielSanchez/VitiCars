import '../../public/style/Populares.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from  'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../FireBaseConfig/Firebase'

function Populares() {




const [cars, setCars] = useState([])

const carsCollection = collection(db, "car_Populares")

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
          <div className="box" key={carro.carId}>
            <img className='img-fluid' src={carro.carImagePng}/>
            <h3>{carro.carBrand} {carro.carModel} {carro.carYear}</h3>
            <div className="details">
              <span>USD$ {new Intl.NumberFormat().format(carro.carPrice)}</span>
              <Link className='link'
      to={{
        pathname: `/car/${carro.carBrand}-${carro.carModel}`
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
                  Ver más</Link>
              </div>
              </div>
        ))}
    </>
  )
}

export default Populares