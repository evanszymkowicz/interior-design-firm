import React from 'react';
import './abouttabs.scss';

export default function AboutTabs({
  ToggleWhoWeAre, ToggleOurHeritage, ToggleOurValues, ToggleOurLocation, ActiveTabStatus,
}) {
  let Card1Classes = 'AboutTabs-Card AboutTabs-Card1';
  if (ActiveTabStatus === 'who') {
    Card1Classes = 'AboutTabs-Card AboutTabs-Card1 AboutTabs-CardActive';
  }

  let Card2Classes = 'AboutTabs-Card AboutTabs-Card2';
  if (ActiveTabStatus === 'heritage') {
    Card2Classes = 'AboutTabs-Card AboutTabs-Card2 AboutTabs-CardActive';
  }

  let Card3Classes = 'AboutTabs-Card AboutTabs-Card3';
  if (ActiveTabStatus === 'values') {
    Card3Classes = 'AboutTabs-Card AboutTabs-Card3 AboutTabs-CardActive';
  }

  let Card4Classes = 'AboutTabs-Card AboutTabs-Card4';
  if (ActiveTabStatus === 'location') {
    Card4Classes = 'AboutTabs-Card AboutTabs-Card4 AboutTabs-CardActive';
  }

  let Tab1Classes = 'AboutTabs-TabText';
  if (ActiveTabStatus === 'who') {
    Tab1Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
  }

  let Tab2Classes = 'AboutTabs-TabText';
  if (ActiveTabStatus === 'heritage') {
    Tab2Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
  }

  let Tab3Classes = 'AboutTabs-TabText';
  if (ActiveTabStatus === 'values') {
    Tab3Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
  }

  let Tab4Classes = 'AboutTabs-TabText';
  if (ActiveTabStatus === 'location') {
    Tab4Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
  }


  return (
    <div className="AboutTabs">
      <div className="AboutTabs-Wrapper">

        <p className="AboutTabs-Title">About Us</p>

        <div className="AboutTabs-Tabs">
          <div className="AboutTabs-Tab AboutTabs-Tab1" onClick={ToggleWhoWeAre}>
            <p className={Tab1Classes}>Who We Are</p>
          </div>
          <div className="AboutTabs-Tab AboutTabs-Tab2" onClick={ToggleOurHeritage}>
            <p className={Tab2Classes}>Our Heritage</p>
          </div>
          <div className="AboutTabs-Tab AboutTabs-Tab3" onClick={ToggleOurValues}>
            <p className={Tab3Classes}>Our Partners</p>
          </div>
          <div className="AboutTabs-Tab AboutTabs-Tab4" onClick={ToggleOurLocation}>
            <p className={Tab4Classes}>Showrooms</p>
          </div>
        </div>
        <div className="AboutTabs-CardContainer">
          <div className={Card1Classes}>
            <div className="AboutTabs-TextBox">
              <p className="AboutTabs-TextBoxTitle">Who We Are</p>
              <p className="AboutTabs-TextBoxText">The Washington Design Center consists of three floors of to-the-trade interior design showrooms. </p>
              <br />
              <p className="AboutTabs-TextBoxText">These showrooms sell to architects and interior designers for their projects. The showrooms are open to the public, but purchases must be made by a member of the trade.</p>
              <br />
              <p className="AboutTabs-TextBoxText">To make a purchase, they must contact a design professional to purchase from the home furnishing showrooms.</p>
            </div>
            <div className="AboutTabs-Image AboutTabs-Image1" />
          </div>
          <div className={Card2Classes}>
            <div className="AboutTabs-TextBox">
              <p className="AboutTabs-TextBoxTitle">History</p>
              <p className="AboutTabs-TextBoxText">The design center occupies a 1919 building originally intended for cold storage. It stands two blocks from the Capitol and two blocks from the National Mall. The center opened in 1983, and the style climate in the capital has changed in those 20 years.</p>
              <br />
              <p className="AboutTabs-TextBoxText">The showroom refined the company's approach to arranging fabrics by color, a concept that has since been used at other locations nationwide.</p>
              <br />
              <p className="AboutTabs-TextBoxText">We were in a conservative visual arena, bound by the historic look that enhances our city, but those boundaries have fallen. We now have clients from all over the world.</p>
            </div>
            <div className="AboutTabs-Image AboutTabs-Image2" />
          </div>
          <div className={Card3Classes}>
            <div className="AboutTabs-TextBox">
              <p className="AboutTabs-TextBoxTitle">Our Vendors</p>
              <p className="AboutTabs-TextBoxText">
                “It’s a new beginning—I think it’s a wonderful shot in the arm,” said Ann Lambeth, co-owner of J. Lambeth & Co. and a member of the steering committee. With the new CityCenterDC going up a few blocks away, and the thriving 14th Street design district just a stroll in the other direction, she said, “We’re the apex of that L. This really is the new design district. It’s the happening part of town.”
              </p>
              <br />
              <p className="AboutTabs-TextBoxText">
              Our Partners Represent:
              </p>
              <br />
              <ul className="AboutTabs-HistoryList">
                <li className="AboutTabs-HistoryListItem">
                Decorative
                </li>
                <li className="AboutTabs-HistoryListItem">
                Fabrics
                </li>
                <li className="AboutTabs-HistoryListItem">
                Paints
                </li>
                <li className="AboutTabs-HistoryListItem">
                Workspace
                </li>
                <li className="AboutTabs-HistoryListItem">
                Wall Treatments
                </li>
                <li className="AboutTabs-HistoryListItem">
                Design
                </li>
                <li className="AboutTabs-HistoryListItem">
                Materials
                </li>
              </ul>
            </div>
            <div className="AboutTabs-Image AboutTabs-Image3" />
          </div>
          <div className={Card4Classes}>
            <div className="AboutTabs-TextBox">
              <p className="AboutTabs-TextBoxTitle">Our Location</p>
              <p className="AboutTabs-TextBoxText">Our home is conveniently located in the heart of the downtown Washington, DC business district at the corner of 14th Street and L Street NW.</p>
              <br />
              <p className="AboutTabs-TextBoxText">The Design Center steering committee settled on 116,438 square feet of space on three floors in the sophisticated and elegant Franklin Court. The Gold LEED building was designed by the world renowned architectural firm Kohn Pederson Fox, and features a multi-level lobby, sweeping staircase, dramatic water elements, and a two-story glass atrium with granite and marble finishes.</p>
              <br />
              <p className="AboutTabs-TextBoxText">The Design Center showrooms cater to interior designers, architects, and space planners for custom design for their clients.</p>
            </div>
            <div className="AboutTabs-Image AboutTabs-Image4" />
          </div>
        </div>
      </div>
    </div>
  );
}
