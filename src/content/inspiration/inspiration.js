import React from 'react';
import InspirationHero from './Hero/InspirationHero';
import InspirationOpening from './OpeningArticle/InspirationOpening';
import InspirationHook from './Hook/InspirationHook';
import InspirationGrid from './Grid/InspirationGrid';
import InspirationClosing from './Closing Article/InspirationClosing';
import './inspiration.scss';

export default function Inspiration() {
  return (
    <div className='Inspiration'>
      <div className='Inspiration-Wrapper'>
        <div className='Inspiration-TitleBlock'>
          <p className='Inspiration-Title'>Get Inspired</p>
          </div>
          <InspirationHero />
          <InspirationOpening />
          <InspirationHook />
          <InspirationGrid />
          <InspirationClosing />
          </div>
    </div>
  )
}
