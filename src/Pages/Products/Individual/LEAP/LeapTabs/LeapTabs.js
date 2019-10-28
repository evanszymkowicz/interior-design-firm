import React, { Component } from 'react';
import './leaptabs.scss';

export default class LeapTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActiveTab: 'movement',
    };
  }

  render() {
    const ToggleWhoWeAre = () => {
      this.setState({ ActiveTab: 'movement' });
    };

    const ToggleOurHeritage = () => {
      this.setState({ ActiveTab: 'orientation' });
    };

    const ToggleOurValues = () => {
      this.setState({ ActiveTab: 'fit' });
    };

    const ToggleOurLocation = () => {
      this.setState({ ActiveTab: 'workLounge' });
    };

    console.log(this.state.ActiveTab);


    let Card1Classes = 'AboutTabs-Card AboutTabs-Card1';
    if (this.state.ActiveTab === 'movement') {
      Card1Classes = 'AboutTabs-Card AboutTabs-Card1 AboutTabs-CardActive';
    }

    let Card2Classes = 'AboutTabs-Card AboutTabs-Card2';
    if (this.state.ActiveTab === 'orientation') {
      Card2Classes = 'AboutTabs-Card AboutTabs-Card2 AboutTabs-CardActive';
    }

    let Card3Classes = 'AboutTabs-Card AboutTabs-Card3';
    if (this.state.ActiveTab === 'fit') {
      Card3Classes = 'AboutTabs-Card AboutTabs-Card3 AboutTabs-CardActive';
    }

    let Card4Classes = 'AboutTabs-Card AboutTabs-Card4';
    if (this.state.ActiveTab === 'workLounge') {
      Card4Classes = 'AboutTabs-Card AboutTabs-Card4 AboutTabs-CardActive';
    }

    let Tab1Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'movement') {
      Tab1Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }

    let Tab2Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'orientation') {
      Tab2Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }

    let Tab3Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'fit') {
      Tab3Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }

    let Tab4Classes = 'AboutTabs-TabText';
    if (this.state.ActiveTab === 'workLounge') {
      Tab4Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
    }


    return (
      <div className="LeapTabs">

        <div className="AboutTabs-Wrapper">

          <p className="AboutTabs-Title">Products</p>

          <div className="AboutTabs-Tabs">
            <div className="AboutTabs-Tab AboutTabs-Tab1" onClick={ToggleWhoWeAre}>
              <p className={Tab1Classes}>Gemelli</p>
            </div>
            <div className="AboutTabs-Tab AboutTabs-Tab2" onClick={ToggleOurHeritage}>
              <p className={Tab2Classes}>Harrison Van Horn</p>
            </div>
            <div className="AboutTabs-Tab AboutTabs-Tab3" onClick={ToggleOurValues}>
              <p className={Tab3Classes}>Lane Venture</p>
            </div>
            <div className="AboutTabs-Tab AboutTabs-Tab4" onClick={ToggleOurLocation}>
              <p className={Tab4Classes}>Niermann Weeks</p>
            </div>
          </div>

          <div className="AboutTabs-CardContainer">
            <div className={Card1Classes}>
              <div className="AboutTabs-Image LeapTabs-Image1" />
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxText">The Gemelli Collection for Carty & Carty, Inc. was born of a family history steeped in the tradition of fine antiques and collecting. Anne and Edward Carty introduced their debut reproduction collection of fine and rare 189th and early 19th Century tables, chairs, chests, cabinets and other handcrafted furniture in 2004 after a lifetime of being exposed to and savoring fine antiques.</p>
              </div>
            </div>
            <div className={Card2Classes}>
              <div className="AboutTabs-Image LeapTabs-Image2" />
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxText">Using lacquered grass cloth, exotic reeds, and rare bamboo to provide the incomparable “look” that is Harrison-Van Horn, our product line includes cabinets, tables, desks, armoires, television cabinets, game tables, and consoles. Our reputation for creating one-of-a kind, originals for the most particular of designers is also well known. The ability to make “almost” anything that is thought up and sketched has created our niche in the High-End world of custom-made furniture.</p>
              </div>
            </div>
            <div className={Card3Classes}>
              <div className="AboutTabs-Image LeapTabs-Image3" />
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxText">We offer the ability to engineer the most difficult of projects with scaled shop drawing, bringing a vision to reality.</p>
              </div>
            </div>
            <div className={Card4Classes}>
              <div className="AboutTabs-Image LeapTabs-Image4" />
              <div className="AboutTabs-TextBox">
                <p className="AboutTabs-TextBoxText">Theese designs borrow elements from the past and reinterpret them to fit current lifestyles, aesthetically relating to both traditional and contemporary interiors.</p>
                <br />
                <p className="AboutTabs-TextBoxText">All products are handmade and finished in their Maryland studios, and almost half of their business is custom-designed to meet the special needs of professional architect and designer clients. Niermann Weeks features more than 600 standard designs with 500 finishes, available through to-the-trade designer showrooms in the United States and Canada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
