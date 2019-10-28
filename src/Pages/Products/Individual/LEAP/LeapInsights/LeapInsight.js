import React, { Component } from 'react';
import './leapinsight.scss';

export default class LeapInsight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActiveTab: 'spine',
    };
  }

  render() {
    const ToggleWhoWeAre = () => {
      this.setState({ ActiveTab: 'spine' });
    };

    const ToggleOurHeritage = () => {
      this.setState({ ActiveTab: 'lowerBack' });
    };

    const ToggleOurValues = () => {
      this.setState({ ActiveTab: 'posture' });
    };


    let Card1Classes = 'AboutTabs-Card AboutTabs-Card1';
    if (this.state.ActiveTab === 'spine') {
      Card1Classes = 'AboutTabs-Card AboutTabs-Card1 AboutTabs-CardActive';
    }

    let Card2Classes = 'AboutTabs-Card AboutTabs-Card2';
    if (this.state.ActiveTab === 'lowerBack') {
      Card2Classes = 'AboutTabs-Card AboutTabs-Card2 AboutTabs-CardActive';
    }

    let Card3Classes = 'AboutTabs-Card AboutTabs-Card3';
    if (this.state.ActiveTab === 'posture') {
      Card3Classes = 'AboutTabs-Card AboutTabs-Card3 AboutTabs-CardActive';
    }


    let Tab1Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'spine') {
      Tab1Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }

    let Tab2Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'lowerBack') {
      Tab2Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }

    let Tab3Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'posture') {
      Tab3Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }


    return (
      <div className="LeapInsights">
        <div className="AboutTabs-Wrapper">
          <p className="AboutTabs-Title">Offerings</p>
          <div className="LeapInsightsTabs-Tabs">
            <div className="LeapInsightsTabs-Tab AboutTabs-Tab1" onClick={ToggleWhoWeAre}>
              <p className={Tab1Classes}>Wallcoverings</p>
            </div>
            <div className="LeapInsightsTabs-Tab AboutTabs-Tab2" onClick={ToggleOurHeritage}>
              <p className={Tab2Classes}>Lighting</p>
            </div>
            <div className="LeapInsightsTabs-Tab AboutTabs-Tab3" onClick={ToggleOurValues}>
              <p className={Tab3Classes}>Accessories</p>
            </div>
          </div>
          <div className="AboutTabs-CardContainer">
            <div className={Card1Classes}>
              <div className="AboutTabs-TextBox">
                <p className="LeapInsightsTabs-TextBoxTitle">From traditional to contemporary, we’ve scouted unique finds from around the world.</p>
                <p className="LeapInsightsTabs-TextBoxText">When you come home, you want to feel like you are returning to a place of upmost luxury.</p>
                <p className="LeapInsightsTabs-TextBoxTitle">Each cut is custom for you.</p>
                <p className="LeapInsightsTabs-TextBoxText">The continued renewal of this design implies sensitivity, good taste, a well-informed eye and continuous attention to all fashion movements and culture in general. Many meetings in addition to journeys around the world represent a continued source of inspiration.</p>
              </div>
              <div className="AboutTabs-Image LeapInsightsTabs-Image1" />
            </div>
            <div className={Card2Classes}>
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxText">Light fixtures are intricately recreated from detailed patterns made from original lights from our own collection of antique European and American lights. Every light is handmade in the the tradition of years past using the same techniques and methods but with updated tools and equipment.</p>
                <p className="AboutTabs-TextBoxText">All lights are recreated in wood, brass, copper, and/or tin, and are either updated with electrical or gas fittings for today's functional applications. Hand rubbed patina finishes insure an antique look of every light upon delivery, and these finishes will continue to age and oxidize naturally over time for an even more authentic feel.</p>
              </div>
              <div className="AboutTabs-Image LeapInsightsTabs-Image2" />
            </div>
            <div className={Card3Classes}>
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxText">
                Working with in-house cabinetmakers and finishers, team produces unique and stylish pieces often using unusual materials sourced from distant places.
                </p>
                <p className="AboutTabs-TextBoxText">
                While our designs are heavily influenced by both Eastern and Western classical archetypes, they are informed by a modern sensibility to silhouette, material, and color; and possess a versatility which allows them to slip as comfortably into a traditional room as a modern loft or sunroom.
                </p>
              </div>
              <div className="AboutTabs-Image LeapInsightsTabs-Image3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
