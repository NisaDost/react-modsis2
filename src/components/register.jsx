import React from 'react'
import "./loginregister.css"
import { useNavigate } from 'react-router-dom'


function Login() {

    const navigate = useNavigate();

    function handleClick(){
      navigate("/login")}

  return (
    <div className='backg d-flex flex-column align-items-center justify-content-center'>

        <div className='card cardfeatures'>

            <div>
                <ul className=' nav nav-tabs d-flex flex-row text-center align-items-center justify-content-center'>
                        <li className='nav-item px-0 col '>
                            <a href="" className='nav-link'><h4 className='mb-0 p-2'onClick={handleClick}><b>Giriş Yap</b></h4></a>
                        </li>
                        <div className='px-4'><small>veya</small></div>
                        <li className='nav-item px-0 col'>
                            <a href="" className='nav-link'><h4 className='mb-0 p-2' ><b>Kayıt Ol</b></h4></a>
                        </li>
                </ul>
            </div>


            <form action="" className='container d-flex flex-column mt-4'>
                <div className='container mb-4 d-flex justify-content-between'>
                    <div className='yarıminput'>
                        <p className='mb-1'>Ad</p>
                        <input  type="name" placeholder='Adınız...' name="" id="" required/>
                    </div>
                    <div className='yarıminput'>
                        <p className='mb-1'>Soyad</p>
                        <input type="name" placeholder='Soyadınız...' name="" id="" required/>
                    </div>
                </div>


                <div className='container mb-4'>
                    <p className='mb-1'>E-mail</p>
                    <input type="email" placeholder='birisi@example.com' name="" id="" required/>
                </div>

                <div className='container mb-4'>
                    <p className='mb-1'>Şifre</p>
                    <input type="password" placeholder='********' minLength={8} name="" id="" required/>

                </div>


                <div className='container mb-4 d-flex justify-content-center'>
                <button className='btn w-100'><b>Giriş Yap</b></button>
                </div>
                    
                <div className='container mb-3 text-center'>
                    <p> Zaten üye misiniz? <a href="" onClick={handleClick}>Giriş Yapın!</a></p>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login