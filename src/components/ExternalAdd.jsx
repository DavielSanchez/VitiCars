import '../../public/style/AddCar.css'
import { useState, useEffect } from  'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, getDocs, doc  } from 'firebase/firestore';
import { db, uploadFilePng, uploadFileJpg } from '../../FireBaseConfig/Firebase';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function ExternalAdd(car) {


    const MySwal = withReactContent(Swal)
    const carsCollection = collection(db, car.db_collection)

    const [carBrand, setCarBrand] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carPrice, setCarPrice] = useState('');
    const [carEngine, setCarEngine] = useState('');
    const [exteriorColor, setExteriorColor] = useState('');
    const [interiorColor, setInteriorColor] = useState('');
    const [carFuel, setCarFuel] = useState('');
    const [carTransmission, setCarTransmission] = useState('');
    const [carTraction, setCarTraction] = useState('');
    const [carType, setCarType] = useState('');
    const [carUsage, setCarUsage] = useState('');
    const [carDoors, setCarDoors] = useState('');
    const [carPassengers, setCarPassengers] = useState('');
    const [carDescription, setCarDescription] = useState('');
    const [carImagePng, setCarImagePng] = useState('');
    const [carImageJpg1, setCarImageJpg1] = useState();
    const [carImageJpg2, setCarImageJpg2] = useState('');
    const [carImageJpg3, setCarImageJpg3] = useState('');
    const [carImageJpg4, setCarImageJpg4] = useState('');

    const guardar = async (carro) => {

        await addDoc(carsCollection,{
            // carId:carId,
            carBrand:carro.carBrand,
            carModel:carro.carModel,
            carYear:carro.carYear,
            carPrice:carro.carPrice,
            carEngine:carro.carEngine,
            exteriorColor:carro.exteriorColor,
            interiorColor:carro.interiorColor,
            carFuel:carro.carFuel,
            carTransmission:carro.carTransmission,
            carTraction:carro.carTraction,
            carType:carro.carType,
            carUsage:carro.carUsage,
            carDoors:carro.carDoors,
            carPassengers:carro.carPassengers,
            carDescription:carro.carDescription,
            carImagePng:carro.carImagePng,
        } )

        
        
        
        MySwal.fire({
            title: "El vehiculo fue agregado satisfactoriamente",
            icon: "success",
            confirmButtonText: "Aceptar",
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace("/admin");
            }
          });
     }



     const cancelarAdd = () => {
         MySwal.fire("La acción fue cancelada", "", "error");
     }

     const [cars, setCars] = useState([])

     const carsOriginCollection = collection(db, "car_List")
    
     const getDocuments = async () => {
       const data = await getDocs(carsOriginCollection)

       setCars(
         data.docs.map((doc)=>({...doc.data(), id: doc.id}))
       )
    }
    

    useEffect(()=>{
      getDocuments()
    }, [])



    const addCar = () => {

    }

    

  return (
    <>
<button type="button" className="btnAdd" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Añadir Vehiculo
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl p p-3">
     <div className="modal-content">
       <div className="modal-body">
       <div className="container-div">
       {cars.map(carro => (

            <div className="grid-item" key={carro.id} onClick={()=>{
                setCarBrand(carro.carBrand);
                setCarModel(carro.carModel);
                setCarYear(carro.carYear);
                setCarPrice(carro.carPrice);
                setCarEngine(carro.carEngine);
                setExteriorColor(carro.exteriorColor);
                setInteriorColor(carro.interiorColor);
                setCarFuel(carro.carFuel);
                setCarTransmission(carro.carTransmission);
                setCarTraction(carro.carTraction);
                setCarType(carro.carType);
                setCarUsage(carro.carUsage);
                setCarDoors(carro.carDoors);
                setCarPassengers(carro.carPassengers);
                setCarDescription(carro.carDescription);
                setCarImagePng(carro.carImagePng);
                setCarImageJpg1(carro.carImageJpg1)
                setCarImageJpg2(carro.image1)
                setCarImageJpg3(carro.carImageJpg3)
                setCarImageJpg4(carro.carImageJpg4)
                guardar(carro)
                }} >
                <div className='img-container'>
                <img src={carro.carImagePng} width='100%'/>
                </div>
                <h2>{carro.carBrand} {carro.carModel}</h2>
                <h3>{carro.carYear}</h3>
            </div>
        ))}
        </div>
       </div>
       <div className="modal-footer">
         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" className="btn btn-primary">Save changes</button>
       </div>
     </div>
   </div>
 </div>
</>
  )
}

export default ExternalAdd
