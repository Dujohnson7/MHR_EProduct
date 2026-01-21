import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const FullLayout = () => {
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div
            className={`page-wrapper ${isMobileSidebarOpen ? 'show-sidebar' : ''}`}
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
        >
            <Sidebar
                isMobileSidebarOpen={isMobileSidebarOpen}
                onClose={() => setMobileSidebarOpen(false)}
            />
            <div className="body-wrapper">
                <Header onToggleMobileSidebar={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
                <div className="body-wrapper-inner">
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullLayout;
