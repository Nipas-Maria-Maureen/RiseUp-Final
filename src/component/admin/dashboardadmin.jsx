import { useEffect } from 'react';
import './admindash.css';
import crosslogo from '../../assets/images/icons/cross.png';
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { BiUpload } from "react-icons/bi"; // Upload icon
import { BsFolder2Open } from "react-icons/bs"; // ✅ New icon for Manage Content
import { Outlet, useNavigate } from 'react-router-dom';

function DashboardAdmin() {
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('userRole');
        if (!role) {
            navigate('/');
        } else if (role !== 'admin') {
            navigate('/dashboard');
        };
    }, [navigate]);

    return (
        <>
            <div className="adn-container">
                <header>
                    <div className='sub-header-container'>
                        <h1 className='adn-text'>
                            RISE<img src={crosslogo} className="logo-img" alt="logo" />UP - ADMIN
                        </h1>
                    </div>
                </header>

                <aside>
                    <div className='adn-selector-container'>

                        <div className='adn-gp-btn-select'>
                            <div className='btn-select' onClick={() => navigate('/admin-dashboard')}>
                                <MdDashboard className='adn-icon-btn' /> Dashboard
                            </div>
                        </div>

                        <div className='adn-gp-btn-select'>
                            <div className='btn-select' onClick={() => navigate('/admin-dashboard/user-manager')}>
                                <FaUsers className='adn-icon-btn' /> User Management
                            </div>
                        </div>

                        <div className='adn-gp-btn-select'>
                            <div className='btn-select' onClick={() => navigate('/admin-dashboard/reflection-manager')}>
                                <IoNewspaperSharp className='adn-icon-btn' /> Reflection Management
                            </div>
                        </div>

                        <div className='adn-gp-btn-select'>
                            <div className='btn-select' onClick={() => navigate('/admin-dashboard/manage-upload')}>
                                <BiUpload className='adn-icon-btn' /> Manage Upload
                            </div>
                        </div>

                        {/* ✅ New Manage Content Button */}
                        <div className='adn-gp-btn-select'>
                            <div className='btn-select' onClick={() => navigate('/admin-dashboard/manage-content')}>
                                <BsFolder2Open className='adn-icon-btn' /> Manage Content
                            </div>
                        </div>

                        <div className='adn-gp-btn-select' onClick={() => navigate('/admin-dashboard/settings')}>
                            <div className='btn-select'>
                                <IoIosSettings className='adn-icon-btn' /> Settings
                            </div>
                        </div>

                    </div>
                </aside>

                <article>
                    <Outlet />
                </article>
            </div>
        </>
    );
}

export default DashboardAdmin;
