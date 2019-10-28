import React from 'react';
import { Link } from 'react-router-dom';
import './featured.scss';

export default function Featured() {
  return (
    <div className="Featured">
      <div className="Featured-Content">
        <p className="Featured-Title">
        Featured Vendors
        </p>
        <div className="Featured-CardWrapper">
          <div className="Featured-Card Featured-Card1">
            <Link to="/product/gesture">
              <div className="Featured-CardImage Featured-CardImage1" />
            </Link>
            <div className="Featured-Card-TextBox">
              <Link to="/product/gesture">
                <p className="Featured-CardTitle">A. Rudin</p>
              </Link>
              <p className="Featured-CardText">Inspired by the movement of the human body, Gesture is the first office chair designed to support our interactions with today's technologies. Gesture is created for the way we work today.</p>
            </div>
          </div>
          <div className="Featured-Card Featured-Card2">
            <Link to="/product/series1">
              <div className="Featured-CardImage Featured-CardImage2" />
            </Link>
            <div className="Featured-Card-TextBox">
              <Link to="/product/series1">
                <p className="Featured-CardTitle">Dedon</p>
              </Link>
              <p className="Featured-CardText">You could say the story of DEDON begins in a hospital bed in Munich in 1990. It’s here, recovering from a devastating blow to the face, that Bobby Dekeyser, the promising young goalie of the bayern munich soccer club, abruptly decides to leave professional sport to pursue his life’s true dream.</p>
            </div>
          </div>
          <div className="Featured-Card Featured-Card3">
            <Link to="/product/leap">
              <div className="Featured-CardImage Featured-CardImage3" />
            </Link>
            <div className="Featured-Card-TextBox">
              <Link to="/product/leap">
                <p className="Featured-CardTitle">Michael Cleary</p>
              </Link>
              <p className="Featured-CardText">The Michael-Cleary showrooms opened in the Washington Design Center in 1990 and in the fall of 2005 at the Design Center at The Merchandise Mart. Working closely with the design community, Michael-Cleary offers over 45 lines of residential home furnishings, fabric, lighting, wall covering, floor coverings and accessories.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
