import React from 'react'
import './topbar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';



export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topbar-left'>
                <span className='logo'>Shay Dashboard</span>
            </div>
            <div className='topbar-right'>
                <div className='IconContainer'>
                <div className='setting'>
                <SettingsIcon/>
                </div>
                <div className='setting'>
                <NotificationsIcon/>
                </div>
                <div className='setting'>
                <Avatar alt="shayma" src="" />
                </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}
