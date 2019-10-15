import React from 'react';
import './suitesImages.scss';

export default function SuitesImageGrid() {
  return (
    <div className='SuitesImageGrid'>
      <div className='SuitesImageGrid-Wrapper'>
        <div className='SuitesImageGrid-Row'>
          <div className='SuitesImageGrid-Row1-Image SuitesImageGrid-Image1 SuitesGridImage'></div>
          <div className='SuitesImageGrid-Row1-Image SuitesImageGrid-Image2 SuitesGridImage'></div>
          <div className='SuitesImageGrid-Row1-Image SuitesImageGrid-Image3 SuitesGridImage'></div>
        </div>
        <div className='SuitesImageGrid-Row'>
          <div className='SuitesImageGrid-Row2-Image SuitesImageGrid-Image4 SuitesGridImage'></div>
          <div className='SuitesImageGrid-Row2-Image SuitesImageGrid-Image5 SuitesGridImage'></div>
        </div>
      </div>
  </div>
  )
}
