import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import  logo  from "./Images/siteIcon.png";
import  logo  from "../siteIcon.png";
import styled from 'styled-components';
import {ButtonContainer} from './Button'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        <NavWrapper className="nav navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/' >
            <img src={logo} alt='Store' className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5" ></li>
            <Link to="/" className="nav-link">
            Products
            </Link>
            </ul>
            <Link to="/cart" className="ml-auto">
            <ButtonContainer>
                <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                </span>
                My Cart   
            </ButtonContainer>
            </Link>
        </NavWrapper> );
    }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
`
 
export default Navbar;