import React from 'react'

function modeldetails(props) {
  return (
    <div>

        <section>
            <div>
                <div>
                    <img src={props.content} />
                </div>

                <div className='card'>
                    <div className='cardfade'>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default modeldetails