import React from 'react'
import "./modelcard.css"


function modelcard(props) {

  return (
    <span className='m-3 size'>

        <div class="card d-flex align-items-center justify-content-center">
            
            <div>
                <img src={props.img} class="card-img" alt={props.alt}/>
            </div>
                

            <div class="card-img-overlay">

                <div className='cardfade card-img-overlay'>

                    <div className='container card-img-overlay d-flex flex-column justify-content-between'>
                        <div>
                            <h3 class="card-title">{props.title}</h3>
                            <p class="card-text"><small>{props.description}</small></p>
                        </div>
                        
                        <a href="" className='btn' role='button'>Detaylar</a>
                    </div>

                </div>

            </div>
        </div>



    </span>
  )
}

export default modelcard