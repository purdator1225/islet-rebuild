import './navbar.styles.scss'

import { Fragment } from 'react';

import {ReactComponent as IsletLogo} from '../../assets/Isletlogo.svg'


import { Outlet,Link } from 'react-router-dom';

const Navbar = () =>{
    return (
    
    <Fragment>
        <div className='navbar-container'>
            <Link to='/'>

            <IsletLogo/>
            </Link>
        </div>


        <Outlet/>
    </Fragment>)
}


export default Navbar;