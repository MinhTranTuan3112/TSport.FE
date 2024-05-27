import { useState } from "react";
import Header from "../../components/Admin/Header/Header";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";

const Users = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const openSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };
    return (
        <div className="grid-container">
            <Header openSidebar={openSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} setOpenSidebarToggle={setOpenSidebarToggle} />
            <div className="flex flex-col" style={{
                gridArea: 'main',
                overflowY: 'auto',
                width: '50%'
            }}>
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <caption className="py-2 text-start text-sm text-black ml-1">Danh sách tài khoản</caption>
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-black uppercase">Tên người dùng</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-black uppercase">Email</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-black uppercase">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">John Brown</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">45</td>
                                        
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;