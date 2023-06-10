import React from 'react'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'

const Cards = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <div className="card">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>

                </div>
            </div>

            
            <div className="col-sm">
                <div className="card">
                    <img src={img2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards