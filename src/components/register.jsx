import axios from "axios";
import "./loginregister.css"
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';



function Register() {

    const navigate = useNavigate();
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function save(event) {
        event.preventDefault();
        if (!firstName || !lastName || !email || !password) {
            alert("Lütfen tüm alanları doldurun.");
            return;

        }
        if (email.indexOf("@") === -1) {
            alert("Geçerli bir e-posta adresi giriniz.");
            return;
        }
        try {
            await axios.post("http://localhost:8080/api/v1/user/save", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            });
            alert("Kayıt Başarılı");
        } catch (err) {
            alert(err);
        }
    }

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


            <form action="/api/v1/user/save" method="post" className='container d-flex flex-column mt-4'>
                <div className='container mb-4 d-flex justify-content-between'>
                    <div className='yarıminput'>
                        <p className='mb-1'>Ad</p>
                        <input  type="text" placeholder='Adınız...' name="firstName" id="firstName" required
                        value={firstName}
                        onChange={(event) => {
                        setfirstName(event.target.value);
                    }}/>
                    </div>
                    <div className='yarıminput'>
                        <p className='mb-1'>Soyad</p>
                        <input type="text" placeholder='Soyadınız...' name="lastName" id="lastName" required

                               value={lastName}
                               onChange={(event) => {
                                   setlastName(event.target.value);
                               }}
                        />
                    </div>
                </div>


                <div className='container mb-4'>
                    <p className='mb-1'>E-mail</p>
                    <input type="email" placeholder='birisi@example.com' name="email" id="email" required
                           value={email}
                           onChange={(event) => {
                               setEmail(event.target.value);
                           }}

                    />
                </div>

                <div className='container mb-4'>
                    <p className='mb-1'>Şifre</p>
                    <input type="password" placeholder='********' minLength={8} name="password" id="password" required
                           value={password}
                           onChange={(event) => {
                               setPassword(event.target.value);
                           }}/>

                </div>


                <div className='container mb-4 d-flex justify-content-center'>
                    <button type="submit" className="btn w-100" onClick={save}>Kayıt Ol</button>

                </div>
                    
                <div className='container mb-3 text-center'>
                    <p> Zaten üye misiniz? <a href="" onClick={handleClick}>Giriş Yapın!</a></p>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Register