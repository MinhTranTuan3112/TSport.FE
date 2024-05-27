import { LuUserCog } from 'react-icons/lu';
import { Link} from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import styles from './Sidebar.module.css';
import { ImStatsDots } from 'react-icons/im';
type Props = {
    openSidebarToggle: boolean;
    setOpenSidebarToggle: (value: boolean) => void;
};

const Sidebar = ({ openSidebarToggle, setOpenSidebarToggle }: Props) => {
    return (
        <>
            <aside className={`${openSidebarToggle ? `${styles.sidebar_responsive}` : `max-sm:hidden ${styles.sidebar}`}
            bg-slate-200 shadow-lg`}>
                <div className={styles.sidebar_title}>
                    <div className={styles.sidebar_brand}>
                        {/* <BsCart3 className='icon_header'/> SHOP */}
                        Welcome, admin
                    </div>
                    <button className='md:hidden icon close_icon text-black' type='button' onClick={() => setOpenSidebarToggle(!openSidebarToggle)}>X</button>
                </div>

                <ul className={styles.sidebar_list}>
                    <li className={styles.sidebar_list_item}>
                        <Link to={'/admin/dashboard'}>
                            <div className="pt-[3px]">
                                <ImStatsDots className='icon' />
                            </div>
                            <div className="">Thống kê</div>
                        </Link>
                    </li>
                    <li className={styles.sidebar_list_item}>
                        <Link to={'/admin/users '}>
                            <div className="pt-[3px]">
                                <LuUserCog className='icon' />
                            </div>Quản lý tài khoản
                        </Link>
                    </li>
                    <li className={styles.sidebar_list_item}>
                        <Link to={''}>
                            <div className="pt-[3px]">
                                <FaRegUserCircle className='icon' />
                            </div>Thông tin cá nhân
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;