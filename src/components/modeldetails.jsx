import React from 'react'
import "./modeldetails.css"
import Header from './header'
import Footer from './footer'


function modeldetails(props) {
  return (
    <div>
      <Header/>
      {/**card area */}
      <section className=''>
        <div className='card border-0'>
          <div className=''>
            <img src="\images\msxl\x-large-1285.jpg" alt="" className='card-img '/>
          </div>
        <div className='container card-img-overlay '>
          <div className='card-img-overlay d-flex flex-column justify-content-center align-items-end'>
            <h5 className='turuncu'>MOD SLIDE</h5>
            <h1 className='title'> X LARGE</h1>
            <div><a href="#details" className='btn kesfetbtn'>Detaylı Bilgi</a></div>
          </div>
        </div>
        
        </div>
      </section>

      {/**details area */}
      <section id='details' className='details py-5' >
        <div className='mycontainer d-flex flex-wrap flex-row justify-content-between'>
          
          {/**özellikler w-50 kaldırılmalı*/}
          <div className='w-50'>
            <h4 className='font-weight-bold'>Mod Slide X Large Tiny House</h4>
            <hr /> 
            <h5>Genel Özellikler</h5>
            <ul className='px-3'>
              <li>02-O3 Standartlarında Üretilmiş Galvanize Edilmiş Çelik Sase</li>
              <li>Tüm Yüzeylerde Mineral Yün Izolasyon</li>
              <li>Tüm Yüzeylerde Tyvek Nefes Alan Su Yalıtım Kaplaması</li>
              <li>Kısmi Kompozit Dış Cephe Kaplaması</li>
              <li>Kısmi Masif Iroko Dış Cephe Ahşap Kaplama</li>
              <li>Masif Termowood Iroko / Çam</li>
              <li>Kompozit/Kenet/Panel Çatı Kaplaması ve İzolasyonu</li>
              <li>Silikon Cam Cephe / Cam Tavan</li>
              <li>Tiny house zemin İzolasyonu ve Parke Kaplaması</li>
              <li>Mutfak Dolapları ve Evyesi</li>
              <li>Akrilik/Masif Mutfak Tezgahı</li>
              <li>Mutfak ve Banyo Tesisat Alt Yapısı ve Montajı</li>
              <li>Banyo Dolabı</li>
              <li>Monoblok Lavabo</li>
              <li>Duş Sistemleri / Akrilik Tekne / Batarya / Akordiyon Duş Camı</li>
              <li>Termosifon ve Baglantısı</li>
              <li>Gömme Rezervuar ve Asma Klozet</li>
              <li>Halogen Free Kablo ile Döşenmiş Elektrik Alt Yapısı</li>
              <li>Duvar Kağıdı ile Kaplı Tavan ve Duvar Yüzeyleri</li>
              <li><b>Tiny house</b>, Plaka ve Ruhsatlama İşlemleri Bulunmaktadır</li>
            </ul>

            <div>
              <a href="#opsiyonel" className='btn btn-lg mt-3 kesfetbtn'><i class="mr-2 fa-solid fa-cart-shopping"></i>Sepete Ekle</a>
            </div>
          </div>

          {/**resimler w-50 kaldırılmalı!!! */}
          <div className='w-50 d-flex flex-wrap flex-column'>

            {/**dış resimler */}
            <div className='mb-3'>
              <h5 className='bb mb-3'>Dış Görünüm</h5>
              <div className="d-flex flex-wrap justify-content-start " >
                <img src="\images\msxl\02c339dd655c13dce354cea931231a6b.jpg" className='resimler'/>  
                <img src="\images\msxl\7042d575c8a2f569759be5f5b733cf45.jpg" className='resimler'/>
                <img src="\images\msxl\b61fd5eedb299b6a048f18cc21f00556.jpg" className='resimler'/>
                <img src="\images\msxl\5caa6f81b86684aaab5a0409b6ce4bd9.jpg" className='resimler'/>
                <img src="\images\msxl\cc31d72e1a3010a6b4cbb8a51418d3ee.jpg" className='resimler' />
              </div>
            </div>

            {/**iç resimler */}
            <div className='mb-3' >
              <h5 className='bb mb-3'>İç Görünüm</h5>
              <div className='d-flex flex-wrap justify-content-start'>
                <img src="\images\msxl\feecc3306fe087fdc8f988b3c81c353c.jpg" className='resimler' />
                <img src="\images\msxl\eca7971cf3e59571424474cc554ab080.jpg" className='resimler' />
                <img src="\images\msxl\cbcd0e5815118bc0d1657ee7e3d6458f.jpg" className='resimler' />
                <img src="\images\msxl\c59378008a8b582939cfa26627450748.jpg" className='resimler' />
                <img src="\images\msxl\b8f1002bf274fd62af849c724920c827.jpg" className='resimler' />
                <img src="\images\msxl\b04b340a29fd8a19fc25d1cba8bc6caf.jpg" className='resimler' />
                <img src="\images\msxl\1979c55d60266f5119e4019627435a46.jpg" className='resimler' />
                <img src="\images\msxl\79c647f2e696c832346b781d893ac71c.jpg" className='resimler' />
                <img src="\images\msxl\63fdd2ea300af0662bfee91ced1e02ec.jpg" className='resimler' />
                <img src="\images\msxl\61bc4ac87f34b730b3c9311d5f04fe89.jpg" className='resimler' />
                <img src="\images\msxl\7e1eeff7f3bb81d4dbd5aeff19fa11f6.jpg" className='resimler' />
                <img src="\images\msxl\1f8d639a77358ea14bbba0d54cc3918e.jpg" className='resimler' />
                <img src="\images\msxl\1dc52506a9745a5731bb922e140713a0.jpg" className='resimler' />
                <img src="\images\msxl\0a424fe732eb545653750749113ea683.jpg" className='resimler' />
              </div>
              

            </div>

            {/**plan resmi */}
            <div >
              <h5 className='bb mb-3' >Genel Plan</h5>
              <div>
                <img src="\images\msxl\639cece273dceaba5b8253c0c9e43cc0.jpg" className='resimler' />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/**motto */}
      <section>
        <div>
          <img src="\images\motto.jpg" className='w-100' />
        </div>
      </section>

      {/**opsiyonel özellikler */}

      <section id='opsiyonel'>
      <div className='mt-4 mb-4 mycontainer d-flex flex-row flex wrap justify-content-between'>

      {/**konfor paketi */}
        <div className='container d-flex flex-column justify-content-between opsiyonel '>
          <div >
            <h4 className='px-3'>Konfor Paketi</h4>
            <ul className='small'>
              <li>12000 BTU Split Klima</li>
              <li>Elektrikli Termosifon</li>
              <li>Temiz ve Pis Su Depoları(Şamandıra ve Hidrofor Entegreli)</li>
              <li>Tüm Kapı ve Pencerelerde Sineklikler</li>
              <li>Veranda (Sisteme Entegre Açılır / 10 m2)</li> 
            </ul>
          </div>

          <div className='btn'>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="konforpkt"/>
              <label class="form-check-label" for="konforpkt">
                <i class="mr-2 p-0 fa-solid fa-cart-shopping"></i>Sepete Ekle
              </label>
            </div>
          </div>
        </div>

      {/**beyaz eşya paketi */}
        <div className='container d-flex flex-column justify-content-between opsiyonel '>
          <div>
            <h4 className='px-3'>Beyaz Eşya Paketi</h4>
            <ul className='small'>
              <li>Tezgah Altı Buzdolabı</li>
              <li>2’li Ankastre Ocak</li>
              <li>Ankastre Aspiratör</li>
              <li>Bulaşık Makinesı</li>
              <li>Ankastre Mikrodalga Fırın</li>
              <li>LCD Ekran Smart TV</li>
            </ul>

          </div>
          <div className='btn'>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="beyazesyapkt"/>
              <label class="form-check-label" for="beyazesyapkt">
                <i class="mr-2 p-0 fa-solid fa-cart-shopping"></i>Sepete Ekle
              </label>
            </div>
          </div>
        </div>
        
      {/**mobilya paketi */}
        <div className='container d-flex flex-column justify-content-between opsiyonel '>
          <div>
            <h4 className='px-3'>Mobilya Paketi</h4>
            <ul className='small' >
              <li>Duvarlarda Fon Kumaş Kaplama</li>
              <li>Oturma Grubu (2’li Koltuk, Sehpa, Berjer)</li>
              <li>Açılır Kapanır Yatak - Yemek Masası Modülüve Oturma Sistemi</li>
              <li>Tüm Pencerelerde Kısmi Jaluzili, Keten Fonlu Tül Perdeler</li>
              <li>Elektrikli Şömine ve Ünitesi</li>
            </ul>
          </div>

          <div className='btn'>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="mobilyapkt"/>
              <label class="form-check-label" for="mobilyapkt">
                <i class="mr-2 p-0 fa-solid fa-cart-shopping"></i>Sepete Ekle
              </label>
            </div>
          </div>       
        </div>
        
      {/**teknoloji paketi */}
        <div className='container d-flex flex-column justify-content-between opsiyonel '>
          <div>
            <h4 className='px-3'>Teknoloji Paketi</h4>
            <ul className='small'>
              <li>Akıllı Ev ile Full Otomasyon Sistemi</li>
              <li>Uzaktan Kumanda ile Açılır-Kapanır Elektrikli Ev Sistemi</li>
              <li>Uydu Sistemi</li>
            </ul>
          </div>

          <div className='btn'>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="teknolojipkt"/>
              <label class="form-check-label" for="teknolojipkt">
                <i class="mr-2 p-0 fa-solid fa-cart-shopping"></i>Sepete Ekle
              </label>
            </div>
          </div>
        </div>

      </div>
      </section>

      <Footer/>
    </div>
    
  )
}

export default modeldetails