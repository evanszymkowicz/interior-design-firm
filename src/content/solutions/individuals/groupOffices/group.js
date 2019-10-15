import React from 'react';
import GroupHero from './Hero/GroupHero';
import GroupInfoBar from './InfoBar/GroupInfoBar';
import GroupTabs from './GroupTabs/GroupTabs';
import GroupInsights from './GroupInsights/GroupInsight';
import GroupSeating from './GroupSeating/GroupSeating';
import PurchaseBar from '../../../../Recycled/PurchaseBar/PurchaseBar';
import './group.scss';

export default function Group() {
  return (
    <div className='Group'>
      <div className='Group-Wrapper'>
        <div className='Group-TitleBlock'>
          <p className='Group-Title'>Group Solutions</p>
          <div className='BuyButton'>
            <p className='BuyButtonText'>Buy Now</p>
          </div>
        </div>

        <GroupHero/>
        <GroupInfoBar/>
        <GroupTabs/>
        <GroupInsights/>
        <GroupSeating/>
        <PurchaseBar/>

      </div>
  </div>
  )
}
