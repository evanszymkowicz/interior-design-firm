import React from 'react';
import './about.scss';

export default function About() {
  return (<div className='About'>
    <div className='About-Wrapper'>

      <div className='About-Image'></div>

      <div className='About-TextBox'>
        <p className='About-Title'>Our Executives + Board of Directors</p>
        <p className='About-Text'>A commitment to excellence, creativity and innovation. Take a moment to meet some of the leaders who shape our vision.</p>
        <div className='About-Button'>
          <p className='About-ButtonText'>Executive Officers</p>
          <div className='About-ButtonIcon'></div>
        </div>
        <div className='About-Button'>
          <p className='About-ButtonText'>Board of Directors</p>
          <div className='About-ButtonIcon'></div>
        </div>
      </div>

    </div>
  </div>)
}
