import React from 'react';
import GroupHero from './hero/groupHero';
import GroupInfoBar from './infoBar/groupInfo';
import GroupTabs from './groupTabs/groupTabs';
import GroupInsights from './groupInsights/groupInsights';
import GroupSeating from './groupSeating/groupSeating';
import PurchaseBar from './features/onlineShopping/onlineShopping';
import './_group.scss';

export default function Group() {
  return (
    <div className="Group">
      <div className="Group-Wrapper">
        <div className="Group-TitleBlock">
          <p className="Group-Title">Group Solutions</p>
          <div className="BuyButton">
            <p className="BuyButtonText">Buy Now</p>
          </div>
        </div>
        <GroupHero />
        <GroupInfoBar />
        <GroupTabs />
        <GroupInsights />
        <GroupSeating />
        <PurchaseBar />
      </div>
    </div>
  );
}
