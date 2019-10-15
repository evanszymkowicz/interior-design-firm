import React from 'react';
import SolutionsIntro from './MainSolutionsComponents/intro/intro';
import SolutionsContainer from './MainSolutionsComponents/container/solutionsContainer';
import './solutions.scss';

export default function SolutionsPage() {
  return (
    <div className='SolutionsPage'>
      <div className='SolutionsPage-Wrapper'>
        <div className='SolutionsPage-TitleBlock'>
          <p className='SolutionsPage-Title'>Solutions</p>
        </div>
        <SolutionsPageIntro />
        <SolutionsPageContainer />
      </div>
  </div>
  )
}
