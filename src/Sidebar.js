import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter"
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListIcon from '@material-ui/icons/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'
function Sidebar() {
    return (
        <div className='sidebar'>
   
            <TwitterIcon className='sidebarTwitter'/>
            <SidebarOptions active Icon={HomeIcon} text="Home"/>
            <SidebarOptions Icon={ExploreIcon} text="Explore"/>
            <SidebarOptions Icon={NotificationsIcon} text="Notifications"/>
            <SidebarOptions Icon={EmailIcon} text="Messages"/>
            <SidebarOptions Icon={BookmarkIcon} text="Bookmarks"/>
            <SidebarOptions Icon={ListIcon} text="Lists"/>
            <SidebarOptions Icon={AccountBoxIcon} text="Profile"/>
            <SidebarOptions Icon={MoreHorizIcon} text="More"/>

      
        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
