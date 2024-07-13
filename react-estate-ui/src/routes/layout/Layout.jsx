import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import HomePage from '../homePage/HomePage';
import './layout.scss';

function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout