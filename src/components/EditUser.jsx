import '../../public/style/AddCar.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function EditUser(carro) {


    const MySwal = withReactContent(Swal)

    const cancelarAdd = () => {
        MySwal.fire("La acción fue cancelada", "", "error");
    }

    const idmodal = `#${carro.carModel}`;
    const idmodal2 = `${carro.carModel}`;

  return (
    <>
<button className="btn btn-warning me-1" data-bs-toggle="modal" data-bs-target={idmodal} title="Modificar"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="White" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg></button>

<div className="modal fade" id={idmodal2} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg p p-3">
    <form action="">
    <div className="modal-content">
      <div className="">
        <h1 className="ms-4 mt-4 mb-5" id="staticBackdropLabel">Editando un vehiculo...</h1>
      </div>
      <div className="modal-body">
        <div className="mb-3">
            <label htmlFor="carBrand" className="form-label">Marca del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carBrand" placeholder={carro.carBrand} />
        </div>
        <div className="mb-3">
            <label htmlFor="carModel" className="form-label">Modelo del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carModel" placeholder={carro.carModel} />
        </div>
        <div className="mb-3">
            <label htmlFor="carYear" className="form-label">Año del Vehiculo</label>
            <input type="number" className="form-control form-control-lg" id="carYear" placeholder={carro.carYear} />
        </div>
        <div className="mb-3">
            <label htmlFor="carPrice" className="form-label">Precio del Vehiculo</label>
            <input type="number" className="form-control form-control-lg" id="carPrice" placeholder={carro.carPrice} />
        </div>
        <div className="mb-3">
            <label htmlFor="carEngine" className="form-label">Precio del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carEngine" placeholder={carro.carEngine} />
        </div>
        <div className="mb-3">
            <label htmlFor="exteriorColor" className="form-label">Color Exterior</label>
            <input type="text" className="form-control form-control-lg" id="exteriorColor" placeholder={carro.exteriorColor} />
        </div>
        <div className="mb-3">
            <label htmlFor="interiorColor" className="form-label">Color Interior</label>
            <input type="text" className="form-control form-control-lg" id="interiorColor" placeholder={carro.interiorColor} />
        </div>
        <div className="mb-3">
            <label htmlFor="carFuel" className="form-label">Combustible</label>
            <input type="text" className="form-control form-control-lg" id="carFuel" placeholder={carro.carFuel} />
        </div>
        <div className="mb-3">
            <label htmlFor="carTransmission" className="form-label">Transmision del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carTransmission" placeholder={carro.carTransmission} />
        </div>
        <div className="mb-3">
            <label htmlFor="carTraction" className="form-label">Traccion del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carTraction" placeholder={carro.carTraction} />
        </div>
        <div className="mb-3">
            <label htmlFor="carType" className="form-label">Tipo de Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carType" placeholder={carro.carType} />
        </div>
        <div className="mb-3">
            <label htmlFor="carUsage" className="form-label">Uso (Millas)</label>
            <input type="number" className="form-control form-control-lg" id="carUsage" placeholder={carro.carUsage} />
        </div>
        <div className="mb-3">
            <label htmlFor="carDoors" className="form-label">Puertas</label>
            <input type="number" className="form-control form-control-lg" id="carDoors" placeholder={carro.carDoors} />
        </div>
        <div className="mb-3">
            <label htmlFor="carPassengers" className="form-label">Pasajeros</label>
            <input type="number" className="form-control form-control-lg" id="carPassengers" placeholder={carro.carPassengers} />
        </div>
        <div className="mb-3">
            <label htmlFor="carDescription" className="form-label">Descrpcion del Vehiculo</label>
            <input type="text" className="form-control form-control-lg" id="carDescription" placeholder={carro.carDescription} />
        </div>

      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={cancelarAdd}>Cancel</button>
        <button type="submit" className="btn btn-success" data-bs-dismiss>Save changes</button>
      </div>
    </div>
    </form>
  </div>
</div>
</>
  )
}

export default EditUser