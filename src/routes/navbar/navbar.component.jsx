import './navbar.styles.scss'

import { Fragment } from 'react';

import { Outlet,Link } from 'react-router-dom';

const Navbar = () =>{
    return (<Fragment>
        <div>
            <Link to='/'>

            ISLET LOGO
            </Link>
        </div>


        <Outlet/>
    </Fragment>)
}


export default Navbar;