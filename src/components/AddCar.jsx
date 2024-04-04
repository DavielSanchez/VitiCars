import '../../public/style/AddCar.css'
import { useState } from  'react';
import { collection, addDoc,  } from 'firebase/firestore';
import { db/* , uploadFilePng, uploadFileJpg */ } from '../../FireBaseConfig/Firebase';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function AddCar(car) {


    const MySwal = withReactContent(Swal)
    const carsCollection = collection(db, car.db_collection)

    // const [carId, setCarId] = useState('');
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
    const [carImageJpg1, setCarImageJpg1] = useState('');
    const [carImageJpg2, setCarImageJpg2] = useState('');
    const [carImageJpg3, setCarImageJpg3] = useState('');
    const [carImageJpg4, setCarImageJpg4] = useState('');

    // const [carImagePng, setCarImagePng] = useState('');
    // const [carImageJpg, setCarImageJpg] = useState('');
    // const [imagePng, setImagePng] = useState('');
    // const [imageJpg, setImageJpg] = useState('');


 

    const guardar = async (car) => {
        car.preventDefault()

        await addDoc(carsCollection,{
            // carId:carId,
            carBrand:carBrand,
            carModel:carModel,
            carYear:carYear,
            carPrice:carPrice,
            carEngine:carEngine,
            exteriorColor:exteriorColor,
            interiorColor:interiorColor,
            carFuel:carFuel,
            carTransmission:carTransmission,
            carTraction:carTraction,
            carType:carType,
            carUsage:carUsage,
            carDoors:carDoors,
            carPassengers:carPassengers,
            carDescription:carDescription,
            carImagePng:carImagePng,
            carImageJpg1:carImageJpg1,
            carImageJpg2:carImageJpg2,
            carImageJpg3:carImageJpg3,
            carImageJpg4:carImageJpg4
        } )
        
        MySwal.fire({
            title: "El vehiculo fue agregado satisfactoriamente",
            // text: "Debes recargar la pagina para ver los cambios",
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

    

  return (
    <>
<button type="button" className="btnAdd" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Añadir Vehiculo
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg p p-3">
    <form action="" onSubmit={guardar}>
    <div className="modal-content">
      <div className="">
        <h1 className="ms-4 mt-4 mb-5" id="staticBackdropLabel">Añadiendo un nuevo vehiculo...</h1>
      </div>
      <div className="modal-body">
        <div className="mb-3">
            <label htmlFor="carBrand" className="form-label">Marca del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carBrand" onChange={(e)=> setCarBrand(e.target.value)} placeholder="Ej: Honda" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carModel" className="form-label">Modelo del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carModel" onChange={(e)=> setCarModel(e.target.value)} placeholder="Ej: Civic" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carYear" className="form-label">Año del Vehiculo</label>
            <input type="number" className="form-control form-control-lg" id="carYear" onChange={(e)=> setCarYear(e.target.value)} placeholder="Ej: 2019" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carPrice" className="form-label">Precio del Vehiculo</label>
            <input type="number" className="form-control form-control-lg" id="carPrice" onChange={(e)=> setCarPrice(e.target.value)} placeholder="Ej: 23000" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carEngine" className="form-label">Motor del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carEngine" onChange={(e)=> setCarEngine(e.target.value)} placeholder="Ej: 2.0, 4 cilindros" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="exteriorColor" className="form-label">Color Exterior</label>
            <input type="text" className="form-control form-control-lg" id="exteriorColor" onChange={(e)=> setExteriorColor(e.target.value)} placeholder="Ej: Rojo" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="interiorColor" className="form-label">Color Interior</label>
            <input type="text" className="form-control form-control-lg" id="interiorColor" onChange={(e)=> setInteriorColor(e.target.value)} placeholder="Ej: Negro" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carFuel" className="form-label">Combustible</label>
            <input type="text" className="form-control form-control-lg" id="carFuel" onChange={(e)=> setCarFuel(e.target.value)} placeholder="Ej: Gasolina" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carTransmission" className="form-label">Transmision del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carTransmission" onChange={(e)=> setCarTransmission(e.target.value)} placeholder="Ej: Automática" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carTraction" className="form-label">Traccion del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carTraction" onChange={(e)=> setCarTraction(e.target.value)} placeholder="Ej: 4WD" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carType" className="form-label">Tipo de Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carType" onChange={(e)=> setCarType(e.target.value)} placeholder="Ej: Sedan" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carUsage" className="form-label">Uso (Millas)</label>
            <input type="number" className="form-control form-control-lg" id="carUsage" onChange={(e)=> setCarUsage(e.target.value)} placeholder="Ej: 90000" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carDoors" className="form-label">Puertas</label>
            <input type="number" className="form-control form-control-lg" id="carDoors" onChange={(e)=> setCarDoors(e.target.value)} placeholder="Ej: 4" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carPassengers" className="form-label">Pasajeros</label>
            <input type="number" className="form-control form-control-lg" id="carPassengers" onChange={(e)=> setCarPassengers(e.target.value)} placeholder="Ej: 5" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carDescription" className="form-label">Descripcion del vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carDescription" onChange={(e)=> setCarDescription(e.target.value)} placeholder="Ej: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad impedit odit magni inventore? Minus alias quod officia quidem consequatur qui laudantium esse reprehenderit dolores, quaerat sequi iste assumenda fugiat ut." required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carDescription" className="form-label">Link de la Imagen .PNG</label>
            <input type="text" className="form-control form-control-lg" id="carDescription" onChange={(e)=> setCarImagePng(e.target.value)} placeholder="Ej: https://i.imgur.com/UoH7Qhu.png" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carDescription" className="form-label">Link de imagen 1</label>
            <input type="text" className="form-control form-control-lg" id="carDescription" onChange={(e)=> setCarImageJpg1(e.target.value)} placeholder="Ej: https://i.imgur.com/cUAU3CR.jpg" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carDescription" className="form-label">Link de imagen 2</label>
            <input type="text" className="form-control form-control-lg" id="carDescription" onChange={(e)=> setCarImageJpg2(e.target.value)} placeholder="Ej: https://i.imgur.com/cUAU3CR.jpg" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carDescription" className="form-label">Link de imagen 3</label>
            <input type="text" className="form-control form-control-lg" id="carDescription" onChange={(e)=> setCarImageJpg3(e.target.value)} placeholder="Ej: https://i.imgur.com/cUAU3CR.jpg" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="carDescription" className="form-label">Link de imagen 4</label>
            <input type="text" className="form-control form-control-lg" id="carDescription" onChange={(e)=> setCarImageJpg4(e.target.value)} placeholder="Ej: https://i.imgur.com/cUAU3CR.jpg" required/>
        </div>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={cancelarAdd}>Cancel</button>
        <input type="submit" value="Save changes" className="btn btn-success" data-bs-dismiss="modal"></input>
      </div>
    </div>
    </form>
  </div>
</div>
</>
  )
}

export default AddCar