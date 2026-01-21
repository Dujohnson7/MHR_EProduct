import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ onClose }) => {
    return (
        <aside className="left-sidebar">
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <Link to="/" className="text-nowrap logo-img">
                        <h1>EProduct</h1>
                    </Link>
                    <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse" onClick={onClose}>
                        <i className="ti ti-x fs-8"></i>
                    </div>
                </div>
                <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">
                            <iconify-icon icon="solar:menu-dots-linear" className="nav-small-cap-icon fs-4"></iconify-icon>
                            <span className="hide-menu">Home</span>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/" aria-expanded="false">
                                <iconify-icon icon="solar:atom-line-duotone"></iconify-icon>
                                <span className="hide-menu">Dashboard</span>
                            </Link>
                        </li>
 
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="/profile" aria-expanded="false">
                                <iconify-icon icon="solar:user-line-duotone"></iconify-icon>
                                <span className="hide-menu">Profile</span>
                            </a>
                        </li>                     
 
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="/product" aria-expanded="false">
                                <iconify-icon icon="solar:file-text-line-duotone"></iconify-icon>
                                <span className="hide-menu">Product</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="/import" aria-expanded="false">
                                <iconify-icon icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
                                <span className="hide-menu">Imports</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="/export" aria-expanded="false">
                                <iconify-icon icon="solar:danger-circle-line-duotone"></iconify-icon>
                                <span className="hide-menu">Export</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="/stock" aria-expanded="false">
                                <iconify-icon icon="solar:bookmark-square-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Stock</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/reports" aria-expanded="false">
                                <iconify-icon icon="solar:file-text-line-duotone"></iconify-icon>
                                <span className="hide-menu">Reports</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
