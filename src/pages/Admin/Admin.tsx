
import { useState } from 'react';
import Header from '../../components/Admin/Header/Header';
import PageContent from '../../components/Admin/PageContent/PageContent';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
type Props = {}

const AdminPage = (props: Props) => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="grid-container">
        <Header openSidebar={openSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} setOpenSidebarToggle={setOpenSidebarToggle}/>
        <PageContent/>
      </div>
    </>
  );
};

export default AdminPage;

