import React from 'react';
import PropTypes from 'prop-types';
import {Popup} from './Popup';

export const Gallery = ({listOfPhotos}) =>{
    console.log(listOfPhotos)
    return(
        <div id="gallery">
           {listOfPhotos.slice(0,50).map(photo=>{
            return(
                <div key={photo.id} className='image-holder'>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                </div>    
            )
           })

           }
           <Popup/>
        </div>
    )
}

Gallery.propTypes = {
    listOfPhotos: PropTypes.arrayOf(PropTypes.object).isRequired
}