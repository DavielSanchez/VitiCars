import '../../public/style/Novedad.css'
function Novedad(car) {
  return (
    <div className="container-novedad">
                <div className="content">
                    <span className='tag-novedad'>Novedad</span>
                    <h3 className="car-name">{car.carName}</h3>
                    <p className="description">{car.carDescription}</p>
                    <a href="/cardetail" className="btn">Ver Más</a>
                </div>
                <div className="container-image">
                    <img className="image" src={car.carImage} alt=""/>
                </div>
            </div>
  )
}

export default Novedad