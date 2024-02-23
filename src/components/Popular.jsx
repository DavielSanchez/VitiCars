import '../style/Popular.css'

function Popular(popular) {

  return (
    
        <div className="box">
            <img src={popular.carImage}/>
            <h3>{popular.carName}</h3>
            <div className="details">
              <span>${popular.carPrice}</span>
              <a href="#" className="btn">Ver Más</a>
              </div>
        </div>
    
  )
}

export default Popular