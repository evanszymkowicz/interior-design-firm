import React from 'react';
import './_corporatePlanning.scss';

export default function CorporatePlanning() {
  return (<div className='CorporatePlanning'>
    <div className='CorporatePlanning-Wrapper'>

      <p className='CorporatePlanning-Title'>Planning Ideas</p>

      <div className='CorporatePlanning-Button'>
        <p className='CorporatePlanning-ButtonText'>All Gesture Planning Ideas</p>
        <div className='CorporatePlanning-ButtonIcon'></div>
      </div>

      <div className='CorporatePlanning-CardWrap'>
        <div className='CorporatePlanning-Card'>
          <div className='CorporatePlanning-CardImage CorporatePlanning-CardImage1'></div>
          <div className='CorporatePlanning-CardTextBox'>
            <p className='CorporatePlanning-CardTitle'>FH2DY3SV</p>
            <p className='CorporatePlanning-CardText'>Agile methodologies improve speed, flexibility and customer focus. This focus space for a super duo supports agile pair-based work</p>
          </div>
        </div>
        <div className='CorporatePlanning-Card'>
          <div className='CorporatePlanning-CardImage CorporatePlanning-CardImage2'></div>
          <div className='CorporatePlanning-CardTextBox'>
            <p className='CorporatePlanning-CardTitle'>UZ7GK9TK</p>
            <p className='CorporatePlanning-CardText'>Inspired by teams using design thinking and agile practices, the Starck Flex Collection gives teams the flexibility and control</p>
          </div>
        </div>
        <div className='CorporatePlanning-Card'>
          <div className='CorporatePlanning-CardImage CorporatePlanning-CardImage3'></div>
          <div className='CorporatePlanning-CardTextBox'>
            <p className='CorporatePlanning-CardTitle'>DZ4VH6PB</p>
            <p className='CorporatePlanning-CardText'>Give people a permanent address. A 120-degree application and seated-height privacy provide space to focus. And, there’s plenty of storage</p>
          </div>
        </div>
        <div className='CorporatePlanning-Card'>
          <div className='CorporatePlanning-CardImage CorporatePlanning-CardImage4'></div>
          <div className='CorporatePlanning-CardTextBox'>
            <p className='CorporatePlanning-CardTitle'>VU4ZD2KT</p>
            <p className='CorporatePlanning-CardText'>A reservable workspace for a small project team includes individual spaces at the bench and a side-by-side lounge area</p>
          </div>
        </div>
      </div>

    </div>
  </div>)
}
