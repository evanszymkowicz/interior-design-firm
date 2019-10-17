import React from 'react';
import './_GroupHero.scss';

export default function GroupHero() {
  return (
    <div className='GroupHero'>
      <div className='GroupHero-Wrapper'>
        <div className='GroupHero-Image'>
          <div className='GroupHero-WhiteBox'>
            <div className='GroupHero-WhiteBox-Top'>
              <p className='GroupHero-WhiteBox-Title'>Design Resources</p>
            </div>
            <p className='GroupHero-WhiteBox-Text'>A perfect fit with an exceptional range of adjustments, the Group office chair delivers full support for various body shapes and sizes.</p>
            <div className='GroupHero-Button'>
              View Resources
            </div>
          </div>
        </div>
        <div className='GroupHero-Mobile-TextBox'>
          <p className='GroupHero-Mobile-Title'>Design Resources</p>
          <p className='GroupHero-Mobile-Text'>Gesture is the first chair designed to support our interactions with today's technologies.</p>
          <div className='GroupHero-Button'>
            View Resources
          </div>
        </div>
      </div>
  </div>
  )
}
