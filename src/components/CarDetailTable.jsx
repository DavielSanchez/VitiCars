import '../../public/style/CarDetailTable.css'

function CarDetailTable(car) {

    const uso = () => {
        if (car.carUsage == 0){
            return <td>{new Intl.NumberFormat().format(car.carUsage)} Millas (Nuevo)</td>;
        }else{
            return <td>{new Intl.NumberFormat().format(car.carUsage)} Millas (Usado)</td>;
    }}

  return (
    <div id="cont-marcas">
        <div className="wrapper">
            <table id="customers">
                <tr>
                    <th>Caracteristicas </th>
                    <th>Info.</th>

                </tr>
                <tr>
                    <td>Precio:</td>
                    <td>USD$ {new Intl.NumberFormat().format(car.carPrice)}</td>
                </tr>
                <tr>
                    <td>Motor:</td>
                    <td> {car.carEngine} </td>
                </tr>
                <tr>
                    <td>Exterior:</td>
                    <td>{car.exteriorColor}</td>
                </tr>
                <tr>
                    <td>Interior:</td>
                    <td>{car.interiorColor}</td>
                </tr>
                <tr>
                    <td>Combustible:</td>
                    <td>{car.carFuel}</td>
                </tr>
                <tr>
                    <td>Transmisión:</td>
                    <td>{car.carTransmission}</td>
                </tr>
                <tr>
                    <td>Tracción:</td>
                    <td>{car.carTraction}</td>
                </tr>
                <tr>
                    <td>Tipo:</td>
                    <td>{car.carType}</td>
                </tr>
                <tr>
                    <td>Uso:</td>
                    {/* <td>{car.carUsage} Millas</td> */}
                    {uso()}
                    
                </tr>
                <tr>
                    <td>Puertas:</td>
                    <td>{car.carDoors} Puertas</td>
                </tr>
                <tr>
                    <td> Pasajeros: </td>
                    <td>{car.carPassengers} Pasajeros</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default CarDetailTable