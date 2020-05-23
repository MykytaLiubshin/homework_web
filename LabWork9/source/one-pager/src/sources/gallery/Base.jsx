import React from 'react';
import { GalleryFull } from './Logic';

export const Gallery = (images) => 
{
    return(
        <div className="container" id="container" onLoad={() => <div className="loader" /> }>
    <GalleryFull images={images}/>
    </div>
    )
}