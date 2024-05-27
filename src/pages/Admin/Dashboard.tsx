import React, { useState } from 'react'
import Header from '../../components/Admin/Header/Header';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import PageContent from '../../components/Admin/PageContent/PageContent';

type Props = {}

const Dashboard = (props: Props) => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const openSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };
    return (
        <div className="grid-container">
            <Header openSidebar={openSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} setOpenSidebarToggle={setOpenSidebarToggle} />
            <PageContent />
        </div>
    );
};

export default Dashboard;