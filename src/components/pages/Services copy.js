import React from 'react'
import '../../App.css'
import CardItem1 from './CardItem1';
import CardItem2 from './CardItem2';
import { Link } from 'react-router-dom';
import image from './img-19.jpg'


export default function Services(){
    return (
        <div className='cards'>
          <h1>Detail</h1>
          <h3>Jika ingin mencoba aneka makanan disini silahkan datang aja ke lokasi, dari Alun-Alun Purwokerto ke barat, sebelah barat penjara ada Pratistha Harsa Blok A yang menjadi pusat UMKM, nah Pusat Kuliner Pratistha Harsa Pereng ada di Blok B yang berada di belakangnya, masuk melalui jalan di sebelah baratnya.</h3>
          <div className='cards__container'>
            <div className='cards__wrapper'>
            <Link
              class='social-icon-link facebook'
              to='//www.google.co.id/maps/place/Pusat+Kuliner+%26+UKM+Pratistha+Harsa/@-7.4246826,109.2283524,832m/data=!3m1!1e3!4m14!1m8!3m7!1s0x2e655e6460fc6f31:0xe3fdae0baf73d06b!2sPusat+Kuliner+%26+UKM+Pratistha+Harsa!8m2!3d-7.4248028!4d109.2283275!14m1!1BCgIgAQ!3m4!1s0x2e655e6460fc6f31:0xe3fdae0baf73d06b!8m2!3d-7.4248028!4d109.2283275?hl=id'
              target='_blank'
            >
              <center><h3 style={{color: 'blue'}}>LINK MAP</h3></center>
            </Link>
            <ul className='cards__items'>
                <CardItem1
                  src='images/img-27.jpg'
                  label='Map' 
                  path='/'
                />
              </ul>
              
              <ul className='cards__items'>
                <CardItem1
                  src='images/img-28.jpg'
                  text='Menu makakan 1 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' 
                  label='Menu 1' 
                />
                <CardItem1
                  src='images/img-29.jpg'
                  text='Menu makanan 2 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; '
                  label='Menu 2'
                />
                <CardItem1
                  src='images/img-30.jpg'
                  text='Menu Minuman 3 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; '
                  label='Menu 3'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem1
                  src='images/img-31.jpg'
                  text='Menu Minuman 3'
                  label='Menu 4'
                />
                <CardItem1
                  src= 'images/img-35.jpg'
                  text='Menu Makanan 4'
                  label='Menu 5'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem1
                  src='images/img-33.jpg'
                  text='Menu Makanan 5'
                  label='Menu 6'
                />
                <CardItem1
                  src= 'images/img-34.jpg'
                  text='Menu makanan 5'
                  label='Menu 7'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem1
                  src='images/img-32.jpg'
                  text='Berbagai menu makanan dan minuman lainnya'
                  label='Menu 8'
                />
              </ul>
            </div>
          </div>
        <div  >
          <p style={{float: 'left'}}><span style={{float:"vertical-align:top"}}>text</span></p>
        </div>
        <div  style={{float: 'left'}} >
          <img src={image}  height={100} width={100}/>
        </div>

        </div>
        
      );
}