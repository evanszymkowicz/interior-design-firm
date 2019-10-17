import React from 'react';
import './_suitesHero.scss';

export default function SuitesHero() {
  return (<div className='SuitesHero'>
    <div className='SuitesHero-Wrapper'>

      <div className='SuitesHero-Image'>
        <div className='SuitesHero-WhiteBox'>

          <div className='SuitesHero-WhiteBox-Top'>
            <p className='SuitesHero-WhiteBox-Title'>Design Concept</p>
          </div>

          <div className='SuitesHero-WhiteBox-TextWrap'>

            <p className='SuitesHero-WhiteBox-Text'>The Suites chair (pronounced silk) is a breakthrough in seating design. Its innovative materiality is both mechanism and artistry, and delivers a personal experience by responding to the unique movements of your body.</p>

          </div>
        </div>
      </div>

      <div className='SuitesHero-Mobile-TextBox'>
        <p className='SuitesHero-Mobile-Title'>Design Concept</p>
        <p className='SuitesHero-Mobile-Text'>The Suites chair (pronounced silk) is a breakthrough in seating design. Its innovative materiality is both mechanism and artistry, and delivers a personal experience by responding to the unique movements of your body.</p>
      </div>

    </div>
  </div>)
}
