import React from 'react'
import "./loginregister.css"
import { useNavigate } from 'react-router-dom'


function Login() {

    const navigate = useNavigate();

    function handleClick(){
      navigate("/register")}


  return (
    <div className='backg d-flex flex-column align-items-center justify-content-center'>

        <div className='card cardfeatures'>

            <div>
                <ul className=' nav nav-tabs d-flex flex-row text-center align-items-center justify-content-center'>
                        <li className='nav-item px-0 col '>
                            <a href="" className='nav-link'><h4 className='mb-0 p-2'><b>Giriş Yap</b></h4></a>
                        </li>
                        <div className='px-4'><small>veya</small></div>
                        <li className='nav-item px-0 col'>
                            <a href="" className='nav-link'><h4 className='mb-0 p-2' onClick={handleClick}><b>Kayıt Ol</b></h4></a>
                        </li>
                </ul>
            </div>

            <div className='text-center mt-4'>
                <p>Sipariş verebilmek için giriş yapmanız gerekiyor.</p>
            </div>

            <form action="" className='container d-flex flex-column mt-2'>
                <div className='container mb-4'>
                    <p className='mb-1'>E-mail</p>
                    <input className='pxy-3' type="email" placeholder='birisi@example.com' name="" id="" required/>
                </div>

                <div className='container mb-4'>
                    <p className='mb-1'>Şifre</p>
                    <input className='pxy-3' type="password" placeholder='********' minLength={8} name="" id="" required/>

                    {/**şifremi unuttum işlevsiz */}
                    <a href=""><small>Şifremi Unuttum</small></a>
                </div>


                <div className='container mb-4 d-flex justify-content-center'>
                <button className='btn w-100'><b>Giriş Yap</b></button>
                </div>
                    
                <div className='container mb-3 text-center'>
                    <p> Hesabınız yok mu? Hemen <a href="" onClick={handleClick}>kaydolun!</a></p>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login