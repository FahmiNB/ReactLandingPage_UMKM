import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
    <h3>Pasar Kuliner Pratistha Harsa – Pereng merupakan pusat kuliner yang menempati gedung yang dibangun oleh pemerintah daerah Kabupaten Banyumas. Lokasinya dekat dengan alun-alun berjarak sekitar 100 meter ke arah barat, dan kebanyakan pedagangnya adalah pindahan PKL alun-alun.</h3>
      <h1>Tempat dan suasana</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Tempat nyaman untuk Kuliner dan jalan jalan'
            />
            <CardItem
              src='images/img-16.jpg'
              text='Menarik untuk di kunjungi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-17.jpg'
              text='Kawasan juga bersih'
            />
            <CardItem
              src='images/img-15.jpg'
              text='Saat pagi pusat belanja '
            />
            <CardItem
              src='images/img-13.jpg'
              text='Didalamnya juga disertai kuliner'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;