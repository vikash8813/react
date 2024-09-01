import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

function MainLayout(props) {
    return (
        <div>
            <div>
                {/*<span className='mr-3'>*/}

                {/*<Link to='/'  className='mr-3'>Home</Link>*/}
                {/*</span>*/}
                {/*<Link to='/about'>About</Link>*/}

                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/about' className={({isActive}) => (
                    `
                    ${isActive ? 'text-pink-600': ''}
                    `
                )}>
                    about
                </NavLink>
            </div>
            <Outlet/>

            <h3>
                footer
            </h3>
        </div>
    );
}

export default MainLayout;