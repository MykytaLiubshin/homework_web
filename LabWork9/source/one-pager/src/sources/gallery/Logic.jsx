import React from 'react';

const error_link = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpCAnDlCKJOipsJFict-dQPhun3yAF-e8CKzs3GhUfLs2Bby5u&usqp=CAU"
export const GalleryElement = ( image ) =>
{
    var stat = 0;
    return(
            <img src={image} className="gallery_element" id={image} onErrorCapture={
                () => {
                    document.getElementById(`${image}`).src = error_link;
                }
                } 
                onClick={
                    () => {
                        if(stat == 0){document.getElementById(`${image}`).className = "fullscreen";stat=1;}
                        else if(stat==1){document.getElementById(`${image}`).className ="gallery_element";stat=0;}
                    }
                }
                />
        );
}
export const GalleryFull = (images) => 
{
    console.log(images["images"]['images'].map(el => el['img']))
    return(
        <div>
        {images["images"]['images'].map( el => GalleryElement(el['img']) )}
        </div>
        )
}
