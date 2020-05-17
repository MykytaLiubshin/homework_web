import React from 'react';
import { GalleryFull } from './Logic';

export const Gallery = (images) => 
{
    return(
        <div className="container" id="container" onload={() => document.getElementById("container") }>
    <GalleryFull images={images}/>
    </div>
    )
}