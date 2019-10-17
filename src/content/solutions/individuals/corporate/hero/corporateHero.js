import React from 'react';
import './_corporateHero.scss';

export default function corporateHero() {
  return (<div className='corporateHero'>
    <div className='corporateHero-Wrapper'>

      <div className='corporateHero-Image'>
        <div className='corporateHero-WhiteBox'>

          <div className='corporateHero-WhiteBox-Top'>
            <p className='corporateHero-WhiteBox-Title'>Design Resources</p>
          </div>

          <p className='corporateHero-WhiteBox-Text'>Gesture is the first chair designed to support our interactions with today's technologies.</p>

          <div className='corporateHero-Button'>
            View Resources
          </div>

        </div>
      </div>

      <div className='corporateHero-Mobile-TextBox'>
        <p className='corporateHero-Mobile-Title'>Design Resources</p>
        <p className='corporateHero-Mobile-Text'>Gesture is the first chair designed to support our interactions with today's technologies.</p>

        <div className='corporateHero-Button'>
          View Resources
        </div>
      </div>

    </div>
  </div>)
}
