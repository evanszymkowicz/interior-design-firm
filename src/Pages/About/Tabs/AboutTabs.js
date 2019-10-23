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

        <p className="AboutTabs-Title">About The Washington Design Center</p>

        <div className="AboutTabs-Tabs">
          <div className="AboutTabs-Tab AboutTabs-Tab1" onClick={ToggleWhoWeAre}>
            <p className={Tab1Classes}>Who We Are</p>
          </div>
          <div className="AboutTabs-Tab AboutTabs-Tab2" onClick={ToggleOurHeritage}>
            <p className={Tab2Classes}>Our Heritage</p>
          </div>
          <div className="AboutTabs-Tab AboutTabs-Tab3" onClick={ToggleOurValues}>
            <p className={Tab3Classes}>Our Values</p>
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
              <p className="AboutTabs-TextBoxText">Lorem ipsum dolor sit amet, enim maluisset mei at. Malis quidam usu ei. Posse vocibus mel no, an affert everti constituam sit. Cu imperdiet omittantur sed, his at utroque mentitum repudiare. Sumo errem veniam ne vix vidit epicuri sadipscing ea his.</p>
              <br />
              <p className="AboutTabs-TextBoxText">Eam at eirmod epicurei constituam. Usu te possim graecis forensibus, his at utroque mentitum repudiare. Sumo errem veniam ne vix, sea eros expetenda accusamus at.</p>
              <br />
              <p className="AboutTabs-TextBoxText">Cum no legere legimus accumsan. Eam et natum detracto eligendi, salutatus has, mea eirmod oblique deseruisse in.</p>
            </div>
            <div className="AboutTabs-Image AboutTabs-Image2" />
          </div>
          <div className={Card3Classes}>
            <div className="AboutTabs-TextBox">
              <p className="AboutTabs-TextBoxTitle">Our Values</p>
              <p className="AboutTabs-TextBoxText">
More than 100 years ago, our founders made a commitment to do business differently. Our seven core values ground us and push us to do more and be better every day.
              </p>
              <br />
              <p className="AboutTabs-TextBoxText">
                            At Starck we:
              </p>
              <br />
              <ul className="AboutTabs-HistoryList">
                <li className="AboutTabs-HistoryListItem">
                                    Act with integrity
                </li>
                <li className="AboutTabs-HistoryListItem">
                                    Tell the truth
                </li>
                <li className="AboutTabs-HistoryListItem">
                                    Keep commitments
                </li>
                <li className="AboutTabs-HistoryListItem">
                Treat people with dignity and respect
                </li>
                <li className="AboutTabs-HistoryListItem">
                Promote positive relationships
                </li>
                <li className="AboutTabs-HistoryListItem">
                Protect the environment
                </li>
                <li className="AboutTabs-HistoryListItem">
                Excel
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
