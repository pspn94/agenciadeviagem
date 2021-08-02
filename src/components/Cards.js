import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira nossos destinos!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-9.jpg'
              text='Explore as Cataratas escondidas da Amazônia'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='Navegue entre as ilhas de Bali em um Cruzeiro'
              label='Luxo'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-3.jpg'
              text='Veleje no Oceano Atlântico por águas desconhecidas'
              label='Mistério'
              path='/services'
            />
            <CardItem
              src='../images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Aventura'
              path='/products'
            />
            <CardItem
              src='../images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
