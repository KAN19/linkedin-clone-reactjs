import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="cover" />
        <Avatar className="sidebar__avatar"/>
        <h2>Nguyen Kiet</h2>
        <h4>nguyenkiet0807@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,000</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">1,000</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar
