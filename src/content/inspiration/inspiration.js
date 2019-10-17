import React from 'react';
import InspirationHero from './hero/hero';
import FirstArticle from './firstArticle/firstArticle';
import InspirationHook from './hook/hook';
import InspirationGrid from './grid/grid';
import LastArticle from './lastArticle/lastArticle';
import './_inspiration.scss';

export default function Inspiration() {
  return (
    <div className="Inspiration">
      <div className="Inspiration-Wrapper">
        <div className="Inspiration-TitleBlock">
          <p className="Inspiration-Title">Get Inspired</p>
        </div>
        <InspirationHero />
        <FirstArticle />
        <InspirationHook />
        <InspirationGrid />
        <LastArticle />
      </div>
    </div>
  );
}
