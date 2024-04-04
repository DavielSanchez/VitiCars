import '../../public/style/errorPage.css'
function errorPage() {
  return (
    
    <div className="bg-purple">
        <title>D` VitiCars | 404 - Not Found</title>

    <div className="stars">
        <div className="central-body">
            <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px"/>
            <a href="/" className="btn-go-home" target="_blank">Volver al inicio</a>
        </div>
        <div className="objects">
            <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
            <div className="earth-moon">
                <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
            </div>
            <div className="box_astronaut">
                <img className="object_astronaut" src="https://i.imgur.com/6SbQueT.png" width="140px"/>
            </div>
        </div>
        <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>

        </div>

    </div>
    </div>

  )
}

export default errorPage