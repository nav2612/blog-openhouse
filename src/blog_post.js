import React from 'react';

function Blogs(props)
{
    return(
        <>
        <img className='cards__item__img' alt='Open House' src={props.image} />
        <div className='cards__item__info'>
            <h5 className="cards__item__heading">{props.heading}</h5>
            <h6 className='cards__item__text'>{props.text}</h6>
          </div></>
);
}

export default Blogs;