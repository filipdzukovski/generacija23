import React,{useContext} from 'react';
import {GalleryContext} from './../utils/GalleryContext';
// import PropTypes from 'prop-types';

export const Popup = (
    // {izbranaSlika,zatvoriSlika}
    ) =>{
        const {selectedPhoto,setSelectedPhoto} = useContext(GalleryContext)
    return(
        <div id = "popup">
            <button className='close-popup' 
            onClick={()=>{setSelectedPhoto("")}}>&times;</button>
            <div className='popup-container'>
                <img src ={selectedPhoto} alt={"Image"}/>
            </div>
        </div>
    )
}

// Popup.propTypes={
//     izbranaSlika:PropTypes.string,
//     zatvoriSlika:PropTypes.func
// }