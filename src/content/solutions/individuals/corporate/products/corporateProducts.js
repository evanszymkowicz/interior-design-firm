import React from 'react';
import './_corporateProducts.scss';

export default function CorporateProducts() {
  return (<div className='CorporateProducts'>
    <div className='CorporateProducts-Wrapper'>

      <p className='CorporateProducts-Title'>Product Range</p>

      <div className='CorporateProducts-ImageWrap'>

        <div className='CorporateProducts-Image CorporateProducts-Image1'>
          <p className='CorporateProducts-ImageText'>Gesture</p>
        </div>
        <div className='CorporateProducts-Image CorporateProducts-Image2'>
          <p className='CorporateProducts-ImageText'>HeadRest</p>
        </div>
        <div className='CorporateProducts-Image CorporateProducts-Image3'>
          <p className='CorporateProducts-ImageText'>Stool</p>
        </div>
        <div className='CorporateProducts-Image CorporateProducts-Image4'>
          <p className='CorporateProducts-ImageText'>Wrapped Neck</p>
        </div>

      </div>

    </div>
  </div>)
}
