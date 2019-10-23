import React from 'react';
import './fullfooter.scss';

export default function FullFooter() {
  return (
    <div className="FullFooter">
      <div className="FullFooter-Wrapper">
        <div className="FullFooter-Links">
          <div className="FullFooter-LinksColumn">
            <p className="FullFooterLinksTitle FullFooter-Title">Corporate Information</p>
            <ul className="FullFooter-List">
              <li className="FullFooter-ListItem">About The Washington Design Center</li>
              <li className="FullFooter-ListItem">Careers</li>
              <li className="FullFooter-ListItem">Diversity + Inclusion</li>
              <li className="FullFooter-ListItem">Community</li>
              <li className="FullFooter-ListItem">Charitable Effort</li>
              <li className="FullFooter-ListItem">Suppliers</li>
              <li className="FullFooter-ListItem">Marketplace</li>
            </ul>
          </div>
          <div className="FullFooter-LinksColumn">
            <p className="FullFooterLinksTitle FullFooter-Title">Customer Care</p>
            <ul className="FullFooter-List">
              <li className="FullFooter-ListItem">Site Feedback</li>
              <li className="FullFooter-ListItem">FAQ's</li>
              <li className="FullFooter-ListItem">User Manuals</li>
              <li className="FullFooter-ListItem">Warranty</li>
              <li className="FullFooter-ListItem">Tech Support</li>
              <li className="FullFooter-ListItem">Notifications</li>
              <li className="FullFooter-ListItem">Recalls</li>
            </ul>
          </div>
          <div className="FullFooter-LinksColumn">
            <p className="FullFooterLinksTitle FullFooter-Title">Legal Notice</p>
            <ul className="FullFooter-List">
              <li className="FullFooter-ListItem">Terms of Use</li>
              <li className="FullFooter-ListItem">Privacy Policy</li>
              <li className="FullFooter-ListItem">Supply Chain</li>
            </ul>
          </div>
        </div>
        <div className="FullFooter-Social">
          <p className="FullFooter-SocialTagsTitle FullFooter-Title">Connect With Us</p>
          <div className="FullFooter-SocialTags">
            <div className="FullFooter-SocialTag FullFooter-SocialTag1" />
            <div className="FullFooter-SocialTag FullFooter-SocialTag2" />
            <div className="FullFooter-SocialTag FullFooter-SocialTag3" />
            <div className="FullFooter-SocialTag FullFooter-SocialTag4" />
          </div>
          <p className="FullFooter-ContactUsTitle FullFooter-Title">Contact Us</p>
          <p className="FulLFooter-ContactUsText">We would love to hear from you! Contact us for sales requests, career information, investor relations, corporate information, or general questions.</p>
        </div>
        <p className="FullFooter-CopyRight">2019 © Evan Szymkowicz.</p>
      </div>
    </div>
  );
}
