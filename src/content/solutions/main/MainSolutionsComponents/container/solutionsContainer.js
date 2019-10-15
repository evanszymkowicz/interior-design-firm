import React from 'react';
import SolutionsMenu from '../menu/SolutionsMenu';
import Cards from '../cards/cards';


export default function SolutionsContainer() {
  return (<div className='SolutionsContainer'>
    <div className='SolutionsContainer-Wrapper'>

      <SolutionsMenu />
      <Cards/>

    </div>
  </div>)
}
