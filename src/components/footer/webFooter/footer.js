import React from 'react';
import './footer.scss';

export default function FullFooter() {
  return (<div className='footer'>
    <div className='footer-wrapper'>
      <div className='footer-links'>
        <div className='footer-LinksColumn'>
          <p className='footerLinksTitle footer-Title'>Corporate Information</p>
          <ul className='footer-List'>
            <li className='footer-listitem'>About The Washington Design Center</li>
            <li className='footer-listitem'>Careers</li>
            <li className='footer-listitem'>Diversity + Inclusion</li>
            <li className='footer-listitem'>Community</li>
            <li className='footer-listitem'>The Washington Design Center Foundation</li>
            <li className='footer-listitem'>Suppliers</li>
            <li className='footer-listitem'>Marketplace</li>
          </ul>
        </div>
        <div className='footer-LinksColumn'>
          <p className='footerLinksTitle footer-Title'>Customer Care</p>
          <ul className='footer-List'>
            <li className='footer-listitem'>Site Feedback</li>
            <li className='footer-listitem'>FAQ's</li>
            <li className='footer-listitem'>User Manuals</li>
            <li className='footer-listitem'>Warranty</li>
            <li className='footer-listitem'>Tech Support</li>
            <li className='footer-listitem'>Notifications</li>
            <li className='footer-listitem'>Rocky Recalls</li>
          </ul>
        </div>
        <div className='footer-LinksColumn'>
          <p className='footerLinksTitle footer-Title'>Legal Notice</p>
          <ul className='footer-List'>
            <li className='footer-listitem'>Terms of Use</li>
            <li className='footer-listitem'>Privacy Policy</li>
            <li className='footer-listitem'>Supply Chain</li>
          </ul>
        </div>
      </div>

      <div className='footer-Social'>
        <p className='footer-SocialTagsTitle footer-Title'>Connect With Us</p>
        <div className='footer-SocialTags'>
          <div className='footer-SocialTag footer-SocialTag1'></div>
          <div className='footer-SocialTag footer-SocialTag2'></div>
          <div className='footer-SocialTag footer-SocialTag3'></div>
          <div className='footer-SocialTag footer-SocialTag4'></div>
        </div>
        <p className='footer-ContactUsTitle footer-Title'>Contact Us</p>
        <p className='footer-ContactUsText'>We would love to hear from you! Contact us for sales requests, career information, investor relations, corporate information, or general questions.</p>
      </div>

      <p className='footer-copyright'>2019 © The Washington Design Center. All Rights Reserved.</p>

    </div>
  </div>)
}
