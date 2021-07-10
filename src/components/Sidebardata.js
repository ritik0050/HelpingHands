import React from 'react';
import { Link } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/Inbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';

export const Sidebardata =[
    {
        title:"Inbox",
        icon: <InboxIcon></InboxIcon>,
        link: "/admin/sidebar/inbox"
    },
    {
        title:"Dashboard",
        icon: <DashboardIcon></DashboardIcon>,
        link: "/dashboard"
    },
    {
        title:"Create Admin",
        icon: <SupervisorAccountIcon></SupervisorAccountIcon>,
        link: "/createadmin"
    },
    {
        title:"List Of Users",
        icon: <GroupAddIcon></GroupAddIcon>,
        link: "/users"
    },
    {
        title:"Lock User",
        icon: <NoEncryptionIcon></NoEncryptionIcon>,
        link: "/lockuser"
    },
]

export default Sidebardata;