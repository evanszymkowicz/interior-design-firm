import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'Constants/Scroll/Scroll';
import './app.css';

// my Components
import MobileOverlay from './Constants/Overlay/MobileOverlay/MobileOverlay';
import PurchaseBar from './Constants/OnlineShopping/OnlineShopping';
import Nav from './Components/Navigation/Navigation/Nav';
import MobileNav from './Components/Navigation/MobileNavigation/MobileNav';
import NavDrawer from './Components/MobileDrawers/NavDrawer/NavDrawer';
import UserDrawer from './Components/MobileDrawers/UserDrawer/UserDrawer';
import FullFooter from './Components/Footer/WebFooter/Footer';
import MobileFooter from './Components/Footer/MobileFooter/MobileFooter';

import About from './Pages/About/About';
import CaseStudies from './Pages/CaseStudies/CaseStudies';
import ContactUs from './Pages/Contact/Contact';
import LandingPage from './Pages/LandingPage/LandingPage';
import SolutionsPage from './Pages/Solutions/Main/Solutions';
import Corporate from './Pages/Solutions/Individuals/Corporate/Corporate';
import Group from './Pages/Solutions/Individuals/GroupOffices/Group';
import Home from './Pages/Solutions/Individuals/HomeOffice/Home';
import Suites from './Pages/Solutions/Individuals/WholeSuites/Suites';
import Showrooms from './Pages/Showrooms/Showrooms';
import Registration from './Pages/Register/Register';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavDrawerIsOpen: false,
      UserDrawerIsOpen: false,
      FooterTab1: false,
      FooterTab2: false,
      FooterTab3: false,
      FooterTab4: false,
    };
  }

  render() {
    const ToggleNavDrawer = () => {
      this.setState((prevState) => ({
        NavDrawerIsOpen: !prevState.NavDrawerIsOpen,
      }));
    };

    const CloseNavDrawer = () => {
      this.setState({ NavDrawerIsOpen: false });
    };

    const ToggleUserDrawer = () => {
      this.setState((prevState) => ({
        UserDrawerIsOpen: !prevState.UserDrawerIsOpen,
      }));
    };
    // CloseUserDrawer
    const CloseUserDrawer = () => {
      this.setState({ UserDrawerIsOpen: false });
    };

    // MobileFooterTabs--------
    // FooterTab1
    const ToggleFooterTab1 = () => {
      this.setState((prevState) => ({
        FooterTab1: !prevState.FooterTab1,
      }));
    };
    const CloseFooterTab1 = () => {
      this.setState({ FooterTab1: false });
    };
    // FooterTab2
    const ToggleFooterTab2 = () => {
      this.setState((prevState) => ({
        FooterTab2: !prevState.FooterTab2,
      }));
    };
    const CloseFooterTab2 = () => {
      this.setState({ FooterTab2: false });
    };
    // FooterTab3
    const ToggleFooterTab3 = () => {
      this.setState((prevState) => ({
        FooterTab3: !prevState.FooterTab3,
      }));
    };
    const CloseFooterTab3 = () => {
      this.setState({ FooterTab3: false });
    };
    // FooterTab4
    const ToggleFooterTab4 = () => {
      this.setState((prevState) => ({
        FooterTab4: !prevState.FooterTab4,
      }));
    };
    const CloseFooterTab4 = () => {
      this.setState({ FooterTab4: false });
    };

    // MobileOverlay
    let MOverlay;
    if (this.state.NavDrawerIsOpen === true || this.state.UserDrawerIsOpen === true) {
      MOverlay = <MobileOverlay CloseNavDrawer={CloseNavDrawer} CloseUserDrawer={CloseUserDrawer} />;
    }

    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Nav />
            <MobileNav
              ToggleNavDrawer={ToggleNavDrawer}
              ToggleUserDrawer={ToggleUserDrawer}
              NavDrawerStatus={this.state.NavDrawerIsOpen}
              UserDrawerStatus={this.state.UserDrawerIsOpen}
            />
            <NavDrawer
              NavDrawerIsOpen={this.state.NavDrawerIsOpen}
              CloseNavDrawer={CloseNavDrawer}
              CloseFooterTab1={CloseFooterTab1}
              CloseFooterTab2={CloseFooterTab2}
              CloseFooterTab3={CloseFooterTab3}
              CloseFooterTab4={CloseFooterTab4}
            />
            <UserDrawer
              UserDrawerIsOpen={this.state.UserDrawerIsOpen}
              CloseUserDrawer={CloseUserDrawer}
            />
            <div className="App-Wrapper">
              <Switch>
                <Route path="/" exact="exact" component={LandingPage} />
                <Route path="/solutions" component={SolutionsPage} />
                <Route path="/casestudies" component={CaseStudies} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={ContactUs} />
                {/* <Route path="/onlineshopping" component={OnlineShopping} /> */}
                <Route path="/find-a-showroom" component={Showrooms} />
                <Route path="/registration" component={Registration} />
                <Route path="/solutions/corporate" component={Corporate} />
                <Route path="/solutions/group" component={Group} />
                <Route path="/solutions/homeoffice" component={Home} />
                <Route path="/solutions/wholesuites" component={Suites} />
              </Switch>
            </div>
            <FullFooter />
            <MobileFooter
              ToggleFooterTab1={ToggleFooterTab1}
              ToggleFooterTab2={ToggleFooterTab2}
              ToggleFooterTab3={ToggleFooterTab3}
              ToggleFooterTab4={ToggleFooterTab4}
              FooterTab1Status={this.state.FooterTab1}
              FooterTab2Status={this.state.FooterTab2}
              FooterTab3Status={this.state.FooterTab3}
              FooterTab4Status={this.state.FooterTab4}
              NavDrawerStatus={this.state.NavDrawerIsOpen}
              UserDrawerStatus={this.state.UserDrawerIsOpen}
              CloseNavDrawer={CloseNavDrawer}
              CloseUserDrawer={CloseUserDrawer}
            />
            {' '}
            {MOverlay}
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}
