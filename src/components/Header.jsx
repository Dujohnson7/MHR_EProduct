import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onToggleMobileSidebar }) => {
    return (
        <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item d-block d-xl-none">
                        <a className="nav-link sidebartoggler nav-icon-hover-bg rounded-circle waves-effect" id="headerCollapse" href="javascript:void(0)" onClick={onToggleMobileSidebar}>
                            <i className="ti ti-menu-2 fs-6"></i>
                        </a>
                    </li>
                </ul>
                <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/assets/images/profile/user-1.jpg" alt="" width="35" height="35" className="rounded-circle" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                                <div className="message-body">
                                    <a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                                        <i className="ti ti-user fs-6"></i>
                                        <p className="mb-0 fs-3">My Profile</p>
                                    </a>
                                    <Link to="/auth/login" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
