import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    Icon: IconType;
    path: string;
}

const SidebarItem = ({ title, Icon, path }: Props) => {
    return (
        <>
            <Link className="p-1 text-white hover:bg-red-500 flex items-center gap-1
            hover:ml-2
            rounded 
            " to={path}>
                <Icon className='w-5 h-5'/>
                <div className="text-[1.3rem]">{title}</div>
            </Link>
        </>
    );
};

export default SidebarItem;
