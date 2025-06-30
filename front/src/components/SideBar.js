import React from 'react';
import './SideBar.css';
import yogaIcon from './../assets/icons/yoga.svg';
import swimIcon from './../assets/icons/swim.svg';
import bikeIcon from './../assets/icons/bike.svg';
import dumbbellIcon from './../assets/icons/dumbbell.svg';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="icon-group">
        <img src={yogaIcon} alt="Yoga" />
        <img src={swimIcon} alt="Natation" />
        <img src={bikeIcon} alt="Vélo" />
        <img src={dumbbellIcon} alt="Musculation" />
      </div>
      <div className="copyright">
        <p>Copiryght, SportSee 2024</p>
      </div>
    </div>
  );
}

export default SideBar;
