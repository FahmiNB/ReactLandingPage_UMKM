import React from 'react';
import '../../App.css';
import CardItem1 from './CardItem1';
import Footer from '../Footer'

export default function Product() {
    return (
        <div className='cards'>
        <h1>Products</h1>
        <h3>Pada siang hari masih cukup lengang, hanya terlihat beberapa saja yang berjualan. Namun pada sore sampai malam biasanya sangat ramai apalagi saat week end atau liburan. Pilihan kulinernya cukup beragam dari makanan khas Purwokerto seperti mendoan dan gorengan atau jajanan pasar lain, Bakso, Bakmi, Nasi Goreng, Bubur Ketan Hitam, Bubur Kacang Hijau, Aneka Jus, berbagai varian Ayam Goreng, Gudeg, Bubur Jagung dan banyak lainnya. Beberapa yang kami coba diantaranya Siomay, Bubur Jagung, Bubur Ketan hitam dan Jus.</h3>
        <br></br>
        <h3>Di lantai atas terdapat beberapa kios diantaranya Bahagia Elektronik, Pusat Kursi Handoko, CV. Vision Indoperkasa, Migeru Refleksi, Handoko R.St Kosmetik, Kacamata Slamet, John Salon, Toko Baju Anak Sumber Laris, Rafael Barbershop, Toko Serayu Fotokopi dan Toko Buku ANS. Rafael Barbershop sendiri saat kami berkunjung masih dengan tarif promo hanya 7 ribu saja. Jika ingin potong rambut atau cukur dengan tempat yang nyaman, datang aja ke sini selagi masih promo.</h3>
          
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem1
                  src='images/img-11.jpg'
                  text='Makanan soto yang lezat &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' 
                  label='Soto' 
                  path='/services'
                />
                <CardItem1
                  src='images/img-21.jpg'
                  text='Ayam kentucky yang kriuk kriuk &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; '
                  label='kentucky'
                  path='/services'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem1
                  src='images/img-22.jpg'
                  text='Berbagai lauk yang lezat'
                  label='Lauk'
                  path='/services'
                />
                <CardItem1
                  src='images/img-23.jpg'
                  text='Makanan dan minuman ringan segar'
                  label='makanan dan minuman'
                  path='/products'
                />
                <CardItem1
                  src='images/img-25.jpg'
                  text='Terdapat roti'
                  label='roti'
                  path='/sign-up'
                />
              </ul>
            </div>
          </div>
        </div>
        
      );
}