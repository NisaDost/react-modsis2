import "./loginregister.css"
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from "axios";



function Login() {



        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();


        async function login(event) {
            event.preventDefault();
            try {
                await axios.post("http://localhost:8080/api/v1/user/login", {
                    email: email,
                    password: password,
                }).then((res) =>
                {
                    console.log(res.data);

                    if (res.data.message == "Email not exits")
                    {
                        alert("Email not exits");
                    }
                    else if(res.data.message == "Login Success")
                    {

                        navigate('/');
                    }
                    else
                    {
                        alert("Incorrect Email and Password not match");
                    }
                }, fail => {
                    console.error(fail); // Error!
                });
            }


            catch (err) {
                alert(err);
            }

        }



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

            <form action="/api/v1/user/login" method="post" className='container d-flex flex-column mt-2'>
                <div className='container mb-4'>
                    <p className='mb-1'>E-mail</p>
                    <input className='pxy-3' type="email" placeholder='birisi@example.com' name="email" id="email" required
                           value={email}
                           onChange={(event) => {
                               setEmail(event.target.value);
                           }}

                    />
                </div>

                <div className='container mb-4'>
                    <p className='mb-1'>Şifre</p>
                    <input className='pxy-3' type="password" placeholder='********' minLength={8} name="password" id="password" required value={password}
                           onChange={(event) => {
                               setPassword(event.target.value);
                           }}/>

                    {/**şifremi unuttum işlevsiz */}
                    <a href=""><small>Şifremi Unuttum</small></a>
                </div>


                <div className='container mb-4 d-flex justify-content-center'>
                    <button type="submit" className="btn w-100" onClick={login}>Giriş Yap</button>
                </div>
                    
                <div className='container mb-3 text-center'>
                        <p> Hesabınız yok mu? Hemen <a href="/register" onClick={handleClick}>kaydolun!</a></p>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login