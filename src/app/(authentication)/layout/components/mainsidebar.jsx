import { useState } from 'react';

export default function MainSidebar() {
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleSubMenu = (menuId) => {
        setOpenSubMenus((prevState) => ({
            ...prevState,
            [menuId]: !prevState[menuId],
        }));
    };

    return (
        <div className="main-sidebar" id="sidebar-scroll" data-simplebar="init">
            {/* ... (kode lainnya tetap sama) */}
            <nav className="main-menu-container nav nav-pills flex-column sub-open open active">
                {/* ... (kode lainnya tetap sama) */}
                <div className="slide-left active hidden" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg></div>
                <ul className="main-menu" style={{ display: "block", marginLeft: 0, marginRight: 0 }}>
                    {/* ... (kode lainnya tetap sama) */}
                    <li className="slide has-sub" onClick={() => toggleSubMenu('dashboard')}>
                        <a href="#" className={`side-menu__item ${openSubMenus.dashboard ? 'active' : ''}`}>
                            <i className="ri-home-8-line side-menu__icon" />
                            <span className="side-menu__label">Dashboards</span>
                            <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul
                            className={`slide-menu child1 ${openSubMenus.dashboard ? 'active' : ''}`}
                            style={{ display: openSubMenus.dashboard ? 'block' : 'none' }}
                        >
                            <li className="slide side-menu__label1">
                                <a href="javascript:void(0)">Dashboards</a>
                            </li>
                            <li className="slide">
                                <a href="index.html" className="side-menu__item">
                                    Sales
                                </a>
                            </li>
                            <li className="slide">
                                <a href="index2.html" className="side-menu__item">
                                    Ecommerce
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* ... (widget item) ... */}
                    <li className="slide has-sub" onClick={() => toggleSubMenu('components')}>
                        <a href="#" className={`side-menu__item ${openSubMenus.components ? 'active' : ''}`}>
                            <i className="ri-inbox-line side-menu__icon" />
                            <span className="side-menu__label">Components</span>
                            <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul
                            className={`slide-menu child1 ${openSubMenus.components ? 'active' : ''}`}
                            style={{ display: openSubMenus.components ? 'block' : 'none' }}
                        >
                            <li className="slide side-menu__label1">
                                <a href="javascript:void(0)">Components</a>
                            </li>
                            <li className="slide">
                                <a href="accordion.html" className="side-menu__item">
                                    Accordion
                                </a>
                            </li>
                            <li className="slide">
                                <a href="alerts.html" className="side-menu__item">
                                    Alerts
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="slide has-sub" onClick={() => toggleSubMenu('elements')}>
                        <a href="#" className={`side-menu__item ${openSubMenus.elements ? 'active' : ''}`}>
                            <i className="ri-cpu-line side-menu__icon" />
                            <span className="side-menu__label">Elements</span>
                            <i className="ri ri-arrow-right-s-line side-menu__angle" />
                        </a>
                        <ul
                            className={`slide-menu child1 ${openSubMenus.elements ? 'active' : ''}`}
                            style={{ display: openSubMenus.elements ? 'block' : 'none' }}
                        >
                            <li className="slide side-menu__label1">
                                <a href="javascript:void(0)">Elements</a>
                            </li>
                            <li className="slide">
                                <a href="navbar.html" className="side-menu__item">
                                    Navbar
                                </a>
                            </li>
                            <li className="slide">
                                <a href="mega-menu.html" className="side-menu__item">
                                    Mega Menu
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* ... (kode lainnya tetap sama) */}
                </ul>
                <div className="slide-right hidden" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                {/* ... (kode lainnya tetap sama) */}
            </nav>
            {/* ... (kode lainnya tetap sama) */}
        </div>
    );
}