import React from 'react';
import './lastArticle.scss';

export default function LastArticle() {
  return (
    <div className='LastArticle'>
    <div className='LastArticle-Wrapper'>

      <div className='LastArticle-Image'></div>
      <div className='LastArticle-TextBox'>
        <p className='LastArticle-Title'>A Rebirth. And Why It's Important</p>

        <p className='LastArticle-Text'>In this issue of the Steelcase 360 Magazine, we explore the rebirth of the office and how people are rebelling against the sea of sameness that defines many workplaces today.</p>
        <div className='LastArticle-Button'>
            <p className='LastArticle-ButtonText'>Read 360 Magazine</p>
            <div className='LastArticle-ButtonIcon'></div>
        </div>
      </div>
    </div>
  </div>
  )
}
