import React, {ReactFragment} from 'react';
import { add_image } from "./Adder";
const error_link = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpCAnDlCKJOipsJFict-dQPhun3yAF-e8CKzs3GhUfLs2Bby5u&usqp=CAU"

const delete_object = (index, hash) => {
    document.getElementById(index+hash).className="deleted"
}
export const GalleryElement = ( image, index ) =>
{
    const hash = 0x666 * 0x677
    var stat = 0;
    return(
        <div className="container flex" id={index+hash}>
            <img src={image} className="gallery_element rel" id={index} onErrorCapture={
                () => {
                    document.getElementById(`${index}`).src = error_link;
                }
                } 
                onClick={
                    () => {
                        if(stat == 0){document.getElementById(`${index}`).className = "fullscreen";stat=1;}
                        else if(stat==1){document.getElementById(`${index}`).className ="gallery_element";stat=0;}
                    }
                }
                />
                <button className="btn rel" onClick={
                    () => delete_object(index, hash)
                }> Delete </button>
                </div>
        );
}
const get_gallery = ( images ) => 
{
    return <div id="gallery_full">
    {images["images"]['images'].map( (el, index) => GalleryElement(el['img'], index) )}
    </div>
}
export const GalleryFull = (images) => 
{
    var len  = images['images']['images'].length;
    return(
        <>
        <button className="btn-rnd" onClick={ () => {
            var img = document.createElement('GalleryElement')
            console.log(GalleryElement("",100))
            document.getElementById("gallery_full").appendChild(img)
        }}></button>
        { get_gallery( images ) }
        </>
        )
}

const button = (index) => <button >Delete</button>
