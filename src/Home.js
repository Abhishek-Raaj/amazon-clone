import React from 'react'
import './home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
           <div className="home_container">
               <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"  alt="image"/>
           </div>
          <div className="home_row">
              <Product id={123} title="The Lean Startup" price={29.99} imageurl="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
              <Product  id={124} title="Lifelong PowerPro 500 Watt 3 Jar Mixer Grinder and 1100 Watt Dry Iron and Mixer Grinders - Grey" price={159.99} imageurl="https://m.media-amazon.com/images/I/71G3OBnz8pL._AC_UY327_FMwebp_QL65_.jpg" rating={3}/>
          </div>
          <div className="home_row">
          <Product id={125} title="Sketchfab Bluetooth Fitness Plastic Smart Health Band/Smart Fitness Band with Call Whatsapp Alert Stop Watch Pedometer for Men and Women (Black)" price={10.99} imageurl="https://m.media-amazon.com/images/I/41A--IwFgrL._AC_UY327_FMwebp_QL65_.jpg" rating={4}/>
          <Product  id={126} title="Zebronics Zeb-County Bluetooth Speaker with Built-in FM Radio, Aux Input and Call Function (Black)" price={20.99} imageurl="https://m.media-amazon.com/images/I/81v-h4I5CCL._AC_UY327_FMwebp_QL65_.jpg" rating={4}/>
          <Product id={127} title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers " price={989.99} imageurl="https://m.media-amazon.com/images/I/61IhTtJUXJL._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
          </div>
          <div className="home_row">
          <Product  id={128} title="Panasonic 100 cm (40 inches) Full HD Android Smart LED TV TH-40HS450DX (Black) (2020 Model)" price={546.99} imageurl="https://m.media-amazon.com/images/I/91auveGcURL._AC_UY327_FMwebp_QL65_.jpg" rating={4}/>
          </div>
        </div>
    )
}

export default Home
