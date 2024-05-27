import React, { useState } from 'react';
import appLogo from '../../assets/icons/app_logo.svg';
import { Link } from 'react-router-dom';
type Props = {}

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-100 p-6 ">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl tracking-tight">
                    <Link to={''} className='flex gap-1'>
                        <img src={appLogo} alt="" className='h-6 w-6' />
                        <div className='text-xl'>TSport</div>
                    </Link>
                </span>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded 
                text-black border-black hover:text-white hover:bg-red-500
                hover:border-none">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className={`${isOpen ? `block` : `hidden`} w-full b lock flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow uppercase">
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-600 hover:font-bold mr-7" to={''}>
                        Trang chủ
                    </Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-600 hover:font-bold mr-7" to={''}>
                        Áo thể thao
                    </Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-600 hover:font-bold" to={''}>
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;