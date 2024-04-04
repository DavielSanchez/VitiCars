
import '../../public/style/admin_ListTable.css'
import { useState, useEffect } from  'react';
import { collection, deleteDoc, getDocs, doc} from 'firebase/firestore';
import { db } from '../../FireBaseConfig/Firebase';
import { Link } from 'react-router-dom';

import EditCar from './EditCar';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




function Admin_ListTable(car) {

    const MySwal = withReactContent(Swal)

    const Borrar =  (car) => {
        MySwal.fire({
            title: "¿Realmente quieres eliminar este vehiculo de la base de datos?",
            showDenyButton: true,
            denyButtonText: `Eliminar`,
            confirmButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire("La acción fue cancelada", "", "error");
            } else if (result.isDenied) {
             deleteCar(car)
            Swal.fire("El vehiculo fue eliminado satisfactoriamente", "", "success");
            }
        });
    }


  const [cars, setCars] = useState([])

  const carsCollection = collection(db, car.db_collection );
  
  const getDocuments = async () => {
    const data = await getDocs(carsCollection)

    setCars(
      data.docs.map((doc)=>({...doc.data(), id: doc.id}))
    )
  }
  
  
  useEffect(()=>{
    getDocuments()
  }, [])

  const deleteCar = async (id) => {
    const carDoc = doc(db, car.db_collection, id);
    await deleteDoc(carDoc);
    
    console.log(id)
    getDocuments();
  };
    

  return (

    <>
    <div className="table-container">
        <table className="table table-striped custom-table">
            <thead>
                <tr>
                    <th scope="col"><h3>Nombre del carro</h3></th>
                    <th scope="col"><h3>Año del carro</h3></th>
                    <th scope="col"><h3>Precio del carro</h3></th>
                    <th scope="col"><h3>color del carro</h3></th>
                    <th scope="col"><h3>Acciones</h3></th>
                </tr>
            </thead>
            <tbody>
                {cars.map(carro => (
    <tr scope="row" key={carro.id}>
    <td>
        <p>{carro.carBrand} {carro.carModel}</p>
    </td>
    <td className="pl-0">
        <div className="d-flex align-items-center">

            <p>{carro.carYear}</p>
        </div>
    </td>
    <td>
        <p>USD$ {new Intl.NumberFormat().format(carro.carPrice)}</p>
    </td>
    <td>
      <p>{carro.exteriorColor}</p>
    </td>
    <td>
    <Link className='btn btn-success' title='Ver'
      to={{
        pathname: `/car/${carro.Id}`,        
      }}
      state={{carId: `${carro.carId}`, carBrand:`${carro.carBrand}`, carModel:`${carro.carModel}`, carYear:`${carro.carYear}`, carPrice:`${carro.carPrice}`, carEngine:`${carro.carEngine}`, exteriorColor:`${carro.exteriorColor}`, interiorColor:`${carro.interiorColor}`, carFuel:`${carro.carFuel}`, carTransmission:`${carro.carTransmission}`, carTraction:`${carro.carTraction}`, carType:`${carro.carType}`, carUsage:`${carro.carUsage}`, carDoors:`${carro.carDoors}`, carPassengers:`${carro.carPassengers}` , carDescription: `${carro.carDescription}`, carImagePng:`${carro.carImagePng}`, image1:`${carro.image1}`, image2: `${carro.image2}`, image3:`${carro.image3}`}}
    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
  </svg></Link>

      <EditCar carId={carro.carId} carBrand={carro.carBrand} carModel={carro.carModel} carYear={carro.carYear} 
      carPrice={carro.carPrice} carEngine={carro.carEngine} exteriorColor={carro.exteriorColor} 
      interiorColor={carro.interiorColor} carFuel={carro.carFuel} carTransmission={carro.carTransmission} 
      carTraction={carro.carTraction} carType={carro.carType} carUsage={carro.carUsage} carDoors={carro.carDoors} carPassengers={carro.carPassengers} carDescription={carro.carDescription}/>

        <button className="btn btn-danger" title="Eliminar"  onClick={()=> {Borrar(carro.id)}}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg></button>
    </td>

</tr>
        ))}
            </tbody>
        </table>
        </div>
    </>
  )
}

export default Admin_ListTable
