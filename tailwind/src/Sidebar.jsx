import React, { useState } from 'react'
import { Plus } from 'lucide-react';
import { Compass } from 'lucide-react';
import { ScreenShareOff } from 'lucide-react';
import { Airplay } from 'lucide-react';

const Sidebar = () => {
    
    return (
        <>
            <div className="sidebar flex flex-col bg-gray-900 text-gray-100 h-screen w-16 shadow-lg text-center">

                <SidebarIcon icon={<Plus />} iconName={'Add a server'}/>
                <SidebarIcon icon={<Compass />} iconName={'Explore Discoverable Servers'}/>
                <SidebarIcon icon={<ScreenShareOff />} iconName={'ScreenShare'}/>
                <SidebarIcon icon={<Airplay />} iconName={'Airplay'}/>
            </div>
        </>
    )
}

const SidebarIcon = ({ icon, iconName }) => {
    // const [iconHovered, setIconHovered] = useState(true)
    return (
        <div className='sidebar-icon group'>
            {icon}
            <span className='sidebar-icon-tooltip group-hover:scale-100'>
                {iconName}
            </span>
        </div>
    )
}

export default Sidebar