import React from 'react'
import "./sidebar.css";
import Face6Icon from '@mui/icons-material/Face6';
import LoginIcon from '@mui/icons-material/Login';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarlist'>
                    <li className='sidebarlistitem active'>
                        <Face6Icon className='sidebarIcon'/>
                        main
                    </li>
                    <li className='sidebarlistitem'>
                    <LoginIcon className='sidebarIcon'/>
                        item1
                    </li><li className='sidebarlistitem'>
                    <Face6Icon className='sidebarIcon'/>
                        item1
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarlist'>
                    <li className='sidebarlistitem'>
                        <LoginIcon className='sidebarIcon'/>
                        item1
                    </li>
                    <li className='sidebarlistitem'>
                    <LoginIcon className='sidebarIcon'/>
                        item1
                    </li><li className='sidebarlistitem'>
                    <LoginIcon className='sidebarIcon'/>
                        item1
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
