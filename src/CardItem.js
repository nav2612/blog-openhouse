import { getDownloadURL, ref } from 'firebase/storage';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import { storage } from './firebase-config'; // import the Firebase storage module

function CardItem(props) {
  const [imageUrl, setImageUrl] = React.useState(''); // state to store the image URL

  // function to get the download URL of the image from Firebase storage
  const getImageUrl = async () => {
    const imageRef = ref(storage,props.src);
    const url = await getDownloadURL(imageRef);
    setImageUrl(url);
  };

  React.useEffect(() => {
    getImageUrl(); // get the image URL when the component mounts
  }, [props.src]);

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* use the imageUrl state variable as the src attribute of the image */}
            <img className='cards__item__img' alt='Open House' src={imageUrl} />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
