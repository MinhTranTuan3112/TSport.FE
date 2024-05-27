import { BsFillBellFill, BsFillEnvelopeFill, BsJustify, BsPersonCircle, BsSearch } from 'react-icons/bs';
import styles from './Header.module.css';
type Props = {
  openSidebar: () => void;
}

const Header = ({ openSidebar }: Props) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.menu_icon} max-sm:inline cursor-pointer`} onClick={openSidebar}>
        <BsJustify className={`${styles.icon} `} onClick={openSidebar}/>
      </div>
      <div className={styles.header_left}>
        <BsSearch className={styles.icon} />
      </div>
      <div className={`${styles.header_right} flex`}>
        <BsFillBellFill className={styles.icon} />
        <BsFillEnvelopeFill className={styles.icon} />
        <BsPersonCircle className={styles.icon} />
      </div>
    </header>
  );
};

export default Header;