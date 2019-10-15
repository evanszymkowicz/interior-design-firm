import React, {Component} from "react";
import "./app.scss";

// react router
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// my components
import Nav from "../components/nav/Nav";
import MobileNav from "../components/nav/mobileNav/mobileNav";
import NavDrawer from "../components/mobileDrawers/navDrawer/navDrawer";
import UserDrawer from "../components/mobileDrawers/userDrawer/userDrawer";
import FullFooter from "../components/Footer/webFooter/footer";
import MobileFooter from "../components/Footer/mobileFooter/mobileFooter";

// content
import About from "../content/about/about";
import CaseStudies from "../content/caseStudies";
import ContactUs from "../content/contact";
import Inspiration from "../content/inspiration";

// features
import Buying from "../features/buying/buying";
import Scroll from "../features/scroll/scroll";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      NavDrawerIsOpen: false,
      UserDrawerIsOpen: false,
      FooterTab1: false,
      FooterTab2: false,
      FooterTab3: false,
      FooterTab4: false
    }
  }

  render() {
    const ToggleNavDrawer = () => {
      this.setState((prevState) => {
        return {
          NavDrawerIsOpen: !prevState.NavDrawerIsOpen
        }
      });
    }

    const CloseNavDrawer = () => {
      this.setState({NavDrawerIsOpen: false});
    }

    const ToggleUserDrawer = () => {
      this.setState((prevState) => {
        return {
          UserDrawerIsOpen: !prevState.UserDrawerIsOpen
        }
      });
    }
    //CloseUserDrawer
    const CloseUserDrawer = () => {
      this.setState({UserDrawerIsOpen: false});
    }

    //MobileFooterTabs--------
    //FooterTab1
    const ToggleFooterTab1 = () => {
      this.setState((prevState) => {
        return {
          FooterTab1: !prevState.FooterTab1
        }
      });
    }
    const CloseFooterTab1 = () => {
      this.setState({FooterTab1: false});
    }
    //FooterTab2
    const ToggleFooterTab2 = () => {
      this.setState((prevState) => {
        return {
          FooterTab2: !prevState.FooterTab2
        }
      });
    }
    const CloseFooterTab2 = () => {
      this.setState({FooterTab2: false});
    }
    //FooterTab3
    const ToggleFooterTab3 = () => {
      this.setState((prevState) => {
        return {
          FooterTab3: !prevState.FooterTab3
        }
      });
    }
    const CloseFooterTab3 = () => {
      this.setState({FooterTab3: false});
    }
    //FooterTab4
    const ToggleFooterTab4 = () => {
      this.setState((prevState) => {
        return {
          FooterTab4: !prevState.FooterTab4
        }
      });
    }
    const CloseFooterTab4 = () => {
      this.setState({FooterTab4: false});
    }

    //MobileOverlay
    let MOverlay;
    if (this.state.NavDrawerIsOpen === true || this.state.UserDrawerIsOpen === true) {
      MOverlay = <MobileOverlay CloseNavDrawer={CloseNavDrawer} CloseUserDrawer={CloseUserDrawer}/>
    }

    return (<Router>
      <Scroll>
        <div className="App">
          <Nav/>
          <MobileNav ToggleNavDrawer={ToggleNavDrawer} ToggleUserDrawer={ToggleUserDrawer} NavDrawerStatus={this.state.NavDrawerIsOpen} UserDrawerStatus={this.state.UserDrawerIsOpen}/>

          <NavDrawer NavDrawerIsOpen={this.state.NavDrawerIsOpen} CloseNavDrawer={CloseNavDrawer} CloseFooterTab1={CloseFooterTab1} CloseFooterTab2={CloseFooterTab2} CloseFooterTab3={CloseFooterTab3} CloseFooterTab4={CloseFooterTab4}/>
          <UserDrawer UserDrawerIsOpen={this.state.UserDrawerIsOpen} CloseUserDrawer={CloseUserDrawer}/>

          <div className="App-Wrapper">
            <Switch>
              <Route path="/" exact="exact" component={Landing}/>
              <Route path="/product-page" component={ProductPage}/>
              <Route path="/research" component={Research}/>
              <Route path="/casestudies" component={CaseStudies}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={ContactUs}/>
              <Route path="/store" component={Store}/>
              <Route path="/find-a-dealer" component={Dealer}/>
              <Route path="/registration" component={Registration}/>
              <Route path="/product/silq" component={SILQ}/>
              <Route path="/product/series1" component={Series1}/>
              <Route path="/product/gesture" component={Gesture}/>
              <Route path="/product/leap" component={Leap}/>

            </Switch>
          </div>
          <FullFooter/>
          <MobileFooter ToggleFooterTab1={ToggleFooterTab1} ToggleFooterTab2={ToggleFooterTab2} ToggleFooterTab3={ToggleFooterTab3} ToggleFooterTab4={ToggleFooterTab4} FooterTab1Status={this.state.FooterTab1} FooterTab2Status={this.state.FooterTab2} FooterTab3Status={this.state.FooterTab3} FooterTab4Status={this.state.FooterTab4} NavDrawerStatus={this.state.NavDrawerIsOpen} UserDrawerStatus={this.state.UserDrawerIsOpen} CloseNavDrawer={CloseNavDrawer} CloseUserDrawer={CloseUserDrawer}/> {MOverlay}

        </div>
      </Scroll>
    </Router>)
  }
}
