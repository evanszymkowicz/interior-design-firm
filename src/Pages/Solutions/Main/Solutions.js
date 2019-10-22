import React from 'react';
import SolutionsIntro from './MainSolutionsComponents/Intro/Intro';
import SolutionsContainer from './MainSolutionsComponents/Container/SolutionsContainer';
import './solutions.scss';

export default function SolutionsPage() {
  return (
    <div className="SolutionsPage">
      <div className="SolutionsPage-Wrapper">
        <div className="SolutionsPage-TitleBlock">
          <p className="SolutionsPage-Title">Solutions</p>
        </div>
        <SolutionsIntro />
        <SolutionsContainer />
      </div>
    </div>
  );
}
