import React from 'react';
import './_mobileFooter.scss';

export default function MobileFooter ({
  ToggleFooterTab1,
  ToggleFooterTab2,
  ToggleFooterTab3,
  ToggleFooterTab4,
  FooterTab1Status,
  FooterTab2Status,
  FooterTab3Status,
  FooterTab4Status
}) {

  let FooterLinks1Classes = 'MobileFooter-Tabs';
  if (FooterTab1Status === true) {
    FooterLinks1Classes = 'MobileFooter-Tabs MobileFooterLinks-Open'
  }

  let FooterLinks2Classes = 'MobileFooter-Tabs';
  if (FooterTab2Status === true) {
    FooterLinks2Classes = 'MobileFooter-Tabs MobileFooterLinks-Open'
  }

  let FooterLinks3Classes = 'MobileFooter-Tabs';
  if (FooterTab3Status === true) {
    FooterLinks3Classes = 'MobileFooter-Tabs MobileFooterLinks-Open'
  }

  let FooterLinks4Classes = 'MobileFooter-Tabs';
  if (FooterTab4Status === true) {
    FooterLinks4Classes = 'MobileFooter-Tabs MobileFooterLinks-Open'
  }

  return (<div className='MobileFooter'>

    <div className='MobileFooter-Wrapper'>

      <div className='MobileFooter-Tab MobileFooter-Tab1' onClick={ToggleFooterTab1}>
        <p className='MobileFooter-AdditionSymbol'>+</p>
        <p className='MobileFooter-TabTitle'>Corporate Information</p>
      </div>
      <div className={FooterLinks1Classes}>
        <ul className='MobileFooter-TabsList'>
          <li className='MobileFooter-TabsListItem'>Careers</li>
          <li className='MobileFooter-TabsListItem'>Accessibility</li>
          <li className='MobileFooter-TabsListItem'>Community Relations</li>
          <li className='MobileFooter-TabsListItem'>Charitable Giving</li>
          <li className='MobileFooter-TabsListItem'>Supplies</li>
          <li className='MobileFooter-TabsListItem'>Supplier Information</li>
          <li className='MobileFooter-TabsListItem'>Store</li>
        </ul>
      </div>

      <div className='MobileFooter-Tab MobileFooter-Tab1' onClick={ToggleFooterTab2}>
        <p className='MobileFooter-AdditionSymbol'>+</p>
        <p className='MobileFooter-TabTitle'>Customer Support</p>
      </div>
      <div className={FooterLinks2Classes}>
        <ul className='MobileFooter-TabsList'>
          <li className='MobileFooter-TabsListItem'>Site Feedback</li>
          <li className='MobileFooter-TabsListItem'>FAQ's</li>
          <li className='MobileFooter-TabsListItem'>User Manuals</li>
          <li className='MobileFooter-TabsListItem'>Warranty</li>
          <li className='MobileFooter-TabsListItem'>Tech Support</li>
          <li className='MobileFooter-TabsListItem'>Notifications</li>
          <li className='MobileFooter-TabsListItem'>Recall Notices</li>
        </ul>
      </div>

      <div className='MobileFooter-Tab MobileFooter-Tab1' onClick={ToggleFooterTab3}>
        <p className='MobileFooter-AdditionSymbol'>+</p>
        <p className='MobileFooter-TabTitle'>Legal Notice</p>
      </div>
      <div className={FooterLinks3Classes}>
        <ul className='MobileFooter-TabsList'>
          <li className='MobileFooter-TabsListItem'>Terms of Use</li>
          <li className='MobileFooter-TabsListItem'>Privacy Policy</li>
          <li className='MobileFooter-TabsListItem'>Supply Chain</li>
        </ul>
      </div>

      <div className='MobileFooter-Tab MobileFooter-Tab1' onClick={ToggleFooterTab4}>
        <p className='MobileFooter-AdditionSymbol'>+</p>
        <p className='MobileFooter-TabTitle'>Connect With Us</p>
      </div>
      <div className={FooterLinks4Classes}>
        <ul className='MobileFooter-TabsList'>
          <li className='MobileFooter-TabsListItem'>FaceBook</li>
          <li className='MobileFooter-TabsListItem'>Instagram</li>
          <li className='MobileFooter-TabsListItem'>Pintrest</li>
          <li className='MobileFooter-TabsListItem'>LinkedIn</li>
        </ul>
      </div>

      <div className='MobileFooter-Tab MobileFooter-Tab1'>
        <p className='MobileFooter-AdditionSymbol'>+</p>
        <p className='MobileFooter-TabTitle'>Contact Us</p>
      </div>

    </div>

  </div>)
}
