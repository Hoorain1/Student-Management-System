import React from 'react'
import image from '../../assets/bk.jpg'
import image1 from '../../assets/bg.jpg'
import img7 from '../../assets/img7.jpg'


const home = () => {
  return (
    <div>
     <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active"><button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
            <img src={image} className="d-block w-100" alt="bk" />
          </div>
          <div className="carousel-item">
            <img src={image1} className="d-block w-100" alt="bg" />
            </div>
            <div className="carousel-item">
            < img src={img7} className="d-block w-100" alt="img7" />

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
 
    </div>
   

    
  )
}

export default home
