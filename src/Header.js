import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="logo" />
        
        <div className="header__search">
          <SearchIcon />
          <input type="text" />

        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home"/>
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOptions Icon={WorkIcon} title="Jobs"/>
        <HeaderOptions Icon={MessageIcon} title="Messaging"/>
        <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOptions avatar="https://image.flaticon.com/icons/png/512/4359/4359908.png" title="me"/>
      </div>
    </div>
  )
}

export default Header
