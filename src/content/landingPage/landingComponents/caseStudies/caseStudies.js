import React from 'react';
import './_caseStudies.scss';

export default function CaseStudies() {
  return (<div className='CaseStudies'>
    <div className='CaseStudies-Content'>
      <p className='CaseStudies-Title'>Our Research</p>
      <div className='CaseStudies-CardWrapper'>
        <div className='CaseStudies-Card1'>
          <div className='CaseStudies-Image1'></div>
          <div className='CaseStudies-TextBox'>
            <p className='CaseStudies-CardTitle'>Planing For Performance</p>
            <p className='CaseStudies-CardText'>Today so much of our work happens away from the primary workstation. The casual atmosphere draws us in, but often these spaces do not support our work.</p>
            <div className='CaseStudies-CardButton'>
              <p className='CaseStudies-CardButtonText'>
                View Article
              </p>
              <div className='CaseStudies-CardButtonIcon'>
                <div className='CaseStudies-CardButtonIcon-Image'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='CaseStudies-Card2'>
          <div className='CaseStudies-Image2'></div>
          <div className='CaseStudies-TextBox'>
            <p className='CaseStudies-CardTitle'>New Work. New Rules</p>
            <p className='CaseStudies-CardText'>The best workplaces need to be designed to support the collective needs of the team while also nurturing the needs of individuals. So, forget what your coach told you. There is an "I" in "team".</p>
            <div className='CaseStudies-CardButton'>
              <p className='CaseStudies-CardButtonText'>
                Learn More
              </p>
              <div className='CaseStudies-CardButtonIcon'>
                <div className='CaseStudies-CardButtonIcon-Image'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
