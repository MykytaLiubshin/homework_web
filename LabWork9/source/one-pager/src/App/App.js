import React from 'react';
import { Gallery } from '../sources/gallery/Base';
import './App.css';
import '../styles/app.css'
import {getImgData} from '../sources/getData/getData'

export const  App = () => {
  var images = getImgData()
  return (
    <div className="App">
        <Gallery images={ images }/>
    </div>  
  );
}
