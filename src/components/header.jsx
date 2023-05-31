import React from 'react'
import "./header.css"
import { useNavigate } from 'react-router-dom'


function Header() {

  const navigate = useNavigate();

  function handleClick(){
    navigate("/login")
  }
  
  return (
    <div className='zindex'>
        <div className='blackfade'>
          <div className='container d-flex justify-content-between py-4'>

          {/*logo */}
            <div>
            <a href="https://www.modsis.com.tr/tr/index"> <img src='/images/logo.png' alt="logo" className='img- logo'/></a>

            </div>


          {/**navbar */} {/**hamburher menü lazım */}
          <div className='overflow-hidden d-flex flex-wrap w-50 justify-content-between align-items-center'>
            <div class="dropdown show ">
              <a class=" btn dropdown-toggle btn-outline-none" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa-solid fa-phone mr-2"></i>İletişim</a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#"><small>+90 554 930 21 11</small> </a>
                <a class="dropdown-item" href="#"><small>info@modsis.com.tr</small></a>
              </div>
            </div>

              <div>
                <a class='btn' href="https://www.modsis.com.tr/tr/index" role="button"><i class="fa-solid fa-house mr-2"></i>Ana Sayfa</a>
              </div>

              <div>
                <a class='btn' href="#modeller" role="button"><i class="fa-solid fa-caravan mr-2"></i>Modeller</a>
              </div>

              <div>
                {/**burada kaldın */}
                <button class='btn' onClick={handleClick} role="button"><i class="fa-solid fa-user mr-2" ></i>Giriş Yap</button>
              </div>

            </div>
          </div>
        
        </div>
    </div>
  )
}

export default Header