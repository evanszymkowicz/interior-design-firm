import React, { Component } from 'react';
import './gestureinsights.scss';

export default class GestureInsights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActiveTab: 'study',
    };
  }

  render() {
    const ToggleWhoWeAre = () => {
      this.setState({ ActiveTab: 'study' });
    };

    const ToggleOurHeritage = () => {
      this.setState({ ActiveTab: 'devices' });
    };

    const ToggleOurValues = () => {
      this.setState({ ActiveTab: 'users' });
    };

    const ToggleOurLocation = () => {
      this.setState({ ActiveTab: 'spaces' });
    };

    console.log(this.state.ActiveTab);


    let Card1Classes = 'AboutTabs-Card AboutTabs-Card1';
    if (this.state.ActiveTab === 'study') {
      Card1Classes = 'AboutTabs-Card AboutTabs-Card1 AboutTabs-CardActive';
    }

    let Card2Classes = 'AboutTabs-Card AboutTabs-Card2';
    if (this.state.ActiveTab === 'devices') {
      Card2Classes = 'AboutTabs-Card AboutTabs-Card2 AboutTabs-CardActive';
    }

    let Card3Classes = 'AboutTabs-Card AboutTabs-Card3';
    if (this.state.ActiveTab === 'users') {
      Card3Classes = 'AboutTabs-Card AboutTabs-Card3 AboutTabs-CardActive';
    }

    let Card4Classes = 'AboutTabs-Card AboutTabs-Card4';
    if (this.state.ActiveTab === 'spaces') {
      Card4Classes = 'AboutTabs-Card AboutTabs-Card4 AboutTabs-CardActive';
    }

    let Tab1Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'study') {
      Tab1Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }

    let Tab2Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'devices') {
      Tab2Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }

    let Tab3Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'users') {
      Tab3Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }

    let Tab4Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'spaces') {
      Tab4Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }

    return (
      <div className="GestureInsights">
        <div className="AboutTabs-Wrapper">
          <p className="AboutTabs-Title">Insights</p>
          <div className="AboutTabs-Tabs">
            <div className="AboutTabs-Tab AboutTabs-Tab1" onClick={ToggleWhoWeAre}>
              <p className={Tab1Classes}>Materials</p>
            </div>
            <div className="AboutTabs-Tab AboutTabs-Tab2" onClick={ToggleOurHeritage}>
              <p className={Tab2Classes}>Products</p>
            </div>
            <div className="AboutTabs-Tab AboutTabs-Tab3" onClick={ToggleOurValues}>
              <p className={Tab3Classes}>Green Policy</p>
            </div>
            <div className="AboutTabs-Tab AboutTabs-Tab4" onClick={ToggleOurLocation}>
              <p className={Tab4Classes}>For You</p>
            </div>
          </div>
          <div className="AboutTabs-CardContainer">
            <div className={Card1Classes}>
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxText">We first choose the finest materials, proceed with skilled workmanship and complete each piece with meticulous detailing. A curved back, a softened line or the gently rolled arm of a sofa creates a sense of drawing room ease that’s timeless.</p>
                <br />
                <p className="AboutTabs-TextBoxText">A. Rudin offers complete custom capabilities, tailoring furniture to your requirements: Specify the dimensions, select an appropriate finish and adapt the design details.</p>
                <br />
                <p className="AboutTabs-TextBoxText">Each A. Rudin piece is exemplary in design and workmanship, skillfully using traditional techniques. Hand-tied springing, hand-tufting, hand-finishing, durable kiln-dried hardwood frames, double-doweled, glued, screwed joints, reinforced corner blocks, and cushions of 25/75 white goose down and feathers channeled in down-proof ticking.</p>
              </div>
              <div className="AboutTabs-Image GestureTabs-Image1" />
            </div>
            <div className={Card2Classes}>
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxTitle">Exceptional Luxury</p>
                <p className="AboutTabs-TextBoxText">From concept to execution, A. Rudin furniture exemplifies a commitment to creativity and craftsmanship. Beauty takes many forms, yet the finest things always share in a quality of quiet grace, of great simplicity and perfected craftsmanship. A. Rudin interprets classic seating to suit personal tastes and today’s interiors.</p>
                <br />
                <p className="AboutTabs-TextBoxText">There is a fine art to what appears to beautifully simple. It requires the rare ability to balance line and proportion, to compose a subtle curve, to refine and perfect each graceful detail.</p>
              </div>
              <div className="AboutTabs-Image GestureTabs-Image2" />
            </div>
            <div className={Card3Classes}>
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxTitle">A Legacy of Enviornmental Responsibility</p>
                <p className="AboutTabs-TextBoxText">Environmental stewardship is an important part of our culture and takes form in a number of tangible ways:</p>
                <br />
                <p className="AboutTabs-TextBoxText"> - A. Rudin receives all of our wood from North American companies that comply with strict standards of sustainable forestry and are certified by the FSC or another third-party certification body.</p>
                <p className="AboutTabs-TextBoxText"> - Because we use no plywood, our furniture products emit minimal Volatile Organic Compounds (VOCs).</p>
                <p className="AboutTabs-TextBoxText"> - Chemicals are not present in any of our upholstery components: wood, dacron, foam,webbing, cotton. All furniture is CAL 117-2013 compliant.</p>
              </div>
              <div className="AboutTabs-Image GestureTabs-Image3" />
            </div>
            <div className={Card4Classes}>
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxTitle">Designed and Constructed For a Personal Touch</p>
                <p className="AboutTabs-TextBoxText">A. Rudin offers complete custom capabilities, tailoring furniture to your requirements: Specify the dimensions, select an appropriate finish and adapt the design details.</p>
                <br />
                <p className="AboutTabs-TextBoxText">A. Rudin craftspeople expertly cut upholstery and skirting fabric so that patterns match perfectly, the fabric along seams and pleats is smoothly finished with exacting care.</p>
              </div>
              <div className="AboutTabs-Image GestureTabs-Image4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
