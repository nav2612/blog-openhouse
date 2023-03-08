import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img className='cards__item__img' alt='Open House' src={props.image} />
          </figure>
          <div className='cards__item__info'>
            <h5 className="cards__item__heading">{props.heading}</h5>
            <h6 className='cards__item__text'>{props.text}</h6>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
