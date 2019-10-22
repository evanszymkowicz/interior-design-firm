import React from 'react';
import SolutionsMenu from '../Menu/SolutionsMenu';
import Cards from '../Cards/Cards';
import './solutionscontainer.scss';

export default function SolutionsContainer() {
  return (
    <div className="SolutionsContainer">
      <div className="SolutionsContainer-Wrapper">
        <SolutionsMenu />
        <Cards />
      </div>
    </div>
  );
}
