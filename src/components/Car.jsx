import { useState, useEffect } from  'react';
import '../../public/style/Car.css'
import { Link } from 'react-router-dom';
import { collection, getDocs,  } from 'firebase/firestore';
import { db } from '../../FireBaseConfig/Firebase';
function Car() {


    const [cars, setCars] = useState([])

    const carsCollection = collection(db, "car_List")
    
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
          <div className="container-novedad" key={carro.Id}>
          <div className="box">
            <img className='img-fluid' src={carro.carImagePng}/>
            <h3>{carro.carBrand} {carro.carModel} {carro.carYear}</h3>
            <div className="details">
              {/* <span>${carro.carPrice}</span> */}
              <span>USD$ {new Intl.NumberFormat().format(carro.carPrice)}</span>
    <Link className='link'
      to={{
        pathname: `/car/${carro.Id}`,        
      }}
      state={{carId: `${carro.carId}`, carBrand:`${carro.carBrand}`, carModel:`${carro.carModel}`, carYear:`${carro.carYear}`, carPrice:`${carro.carPrice}`, carEngine:`${carro.carEngine}`, exteriorColor:`${carro.exteriorColor}`, interiorColor:`${carro.interiorColor}`, carFuel:`${carro.carFuel}`, carTransmission:`${carro.carTransmission}`, carTraction:`${carro.carTraction}`, carType:`${carro.carType}`, carUsage:`${carro.carUsage}`, carDoors:`${carro.carDoors}`, carPassengers:`${carro.carPassengers}` , carDescription: `${carro.carDescription}`, carImagePng:`${carro.carImagePng}`, image1:`${carro.image1}`, image2: `${carro.image2}`, image3:`${carro.image3}`}}
    >Ver más</Link>
              </div>
        </div>
        </div>
        ))}
        </>

    
    
  )
}

export default Car