import React from 'react'

// icon imports
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import EngineeringIcon from '@mui/icons-material/Engineering';

export const SidebarData = [
    {
        name:'Home',
        icon: <HomeIcon />,
        link: '/Home',
    },
    {
        name:'Users',
        icon: <PersonIcon />,
        link: '/Users',
    },
    {
        name:'Support Summary',
        icon: <ReceiptIcon />,
        link: '/Support_summary',
    },
    {
        name:'Executives',
        icon: <EngineeringIcon />,
        link: '/Exevutives',
    }
]

