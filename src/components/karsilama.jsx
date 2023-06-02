import React from 'react'
import "./karsilama.css"
import Modelcard from './modelcard'

function karsilama() {
  return (
    <div className='fontsize'>
      {/**karşılama içerik */}

      <section className='card bg'>
    
            <div>
              <img src="/images/modsis-cropped.png" alt="bg" className='w-100 card-img resim'/>
            </div>

            <div className='px-0 py-0 card-img-overlay '>
              
              <div className='black card-img-overlay d-flex flex-column justify-content-center align-items-center'>
                <div className='container card-title d-flex flex-column mt-5'>
                  <div>
                    <h1>Bugün Sipariş Verin.</h1>
                    <hr className='w-25 '/>
                    <h5 >Hepimizin bir hayali var. Beklediğiniz tatil göl kenarında, kumsalda veya dağlarda, her şeyden uzakta... </h5>
                    <h5>Ama kozanızda, kendi özel lüksünüzde.</h5>
                  </div>

                  <div className='pt-5 d-flex justify-content-end'>
                    <a href="#modeller" className='kesfetbtn btn-lg' role='button'>Keşfetmeye Başlayın!</a>
                  </div>
                </div>
              </div>
            </div>
 
      </section>

      {/**ikonlar */}       
      <section className='ikonlar'>
        <div className='container py-5 d-flex flex-wrap justify-content-around'>
          <img src="\images\mod-ikon1.jpg" alt="ikon1" className='ikon' />
          <img src="\images\mod-ikon2.jpg" alt="ikon2" className='ikon'/>
          <img src="\images\mod-ikon3.jpg" alt="ikon3" className='ikon'/>
          <img src="\images\mod-ikon4.jpg" alt="ikon4" className='ikon'/>
          <img src="\images\mod-ikon5.jpg" alt="ikon5" className='ikon'/>
          <img src="\images\mod-ikon6.jpg" alt="ikon6" className='ikon'/>

        </div>
      </section>

      {/**modeller */}
      <section id='modeller' className='modeller py-5'>
        
        <div className='container'>

          <div >
            <h1>MODSİS Modellerimiz</h1>
            <h5>Mükemmel tatil yeriniz için ihtiyaçlarınıza en uygun yerleşim düzeni ile benzersiz MODSİS modelinizi seçin.</h5>
          </div>

          {/**mod slide */}
          <div className='d-flex flex-wrap align-items-center justify-content-center '>

            <Modelcard img="\images\d98a83ef14b415c17779f6b67951d4a0.jpg" title="Mod Slide X Large" alt="msxl"  description= "a" id="1"/>

            <Modelcard img="\images\58ca768ef45ddddae56ae0202ce64d1d.jpg" title="Mod Slide Large" alt="msl"  description= "b" id="2"/>

            <Modelcard img="\images\a291478910cce74e7025f13b5dc07cbb.jpg" title="Mod Slide Large-S" alt="msls"  description= "c" id="3"/>

            <Modelcard img="\images\c8dd94e68aa55a69d162e8a47dc44381.jpg" title="Mod Slide Angle" alt="msangle"  description= "d" id="4"/>

            <Modelcard img="\images\1608284b5ebf582d7ae497dc0b8b4e3c.jpg" title="Mod Slide Tria" alt="mstria"  description= "e" id="5"/>

            <Modelcard img="\images\bbda9d22870ff927885148e6de80d0a2.jpg" title="Mod Slide Medium" alt="msmedium"  description= "f" id="6"/>

          </div>

          <hr className='w-75 mx-auto '/>

          {/* product cards */}
          <div className='d-flex flex-wrap align-items-center justify-content-center'>
            
            <Modelcard img="\images\3b06fb6a0713b50f18dae8bbdfea44da.jpg" title="Mod Double" alt="mdouble"  description= "1" id="7"/>

            <Modelcard img="\images\cebb70fcdc7107e1b12a07fbe8982eb0.jpg" title="Mod Tria" alt="mtria"  description= "2" id="8"/>
            
            <Modelcard img="\images\6bb373ffe549e34833844d210b1039ca.jpg" title="Mod Flat" alt="mflat"  description= "3" id="9"/>
            
            <Modelcard img="\images\77ac60f452f5660c62583981f869d422.jpg" title="Mod Flat Tria" alt="mflattria"  description= "4" id="10"/>

          </div>

        </div>

      </section>


    </div>
  )
}

export default karsilama