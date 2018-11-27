import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'reactstrap';
import * as constant from '../../constant';

const MobileMenu = ({ dropdownOpen, toggleDropDown, triggerMenu }) => {
  return (
    <Nav vertical 
      className={ triggerMenu ? 'left-sidebar sidebar-mobile sidebar-show' : 'left-sidebar sidebar-mobile sidebar-none'}>    
    <NavItem>            
      <Link to={constant.routeCourses}>
      <i className="fas fa-address-book fa-1x"></i>                       
      </Link>
    </NavItem>
    <NavItem onClick={toggleDropDown}  className='down-menu'>            
        <i className="fas fa-landmark fa-1x"></i>                    
    </NavItem>   
      {
        dropdownOpen && 
        <NavItem className='sub-menu'>                            
          <Link to={constant.routeNatureImages} target="_blank">
            <i className="fab fa-pagelines fa-1x"></i>                
          </Link>
        </NavItem>
      }
      {
        dropdownOpen && 
        <NavItem className='sub-menu'>                
          <Link to={constant.routeGettyImages} target="_blank">
            <i className="fas fa-images fa-1x"></i>                
          </Link>
        </NavItem>
      }  
    <NavItem>            
      <Link to={constant.routeUsers}>
        <i className="fas fa-users fa-1x"></i>                  
      </Link>
    </NavItem>
    <NavItem>            
      <Link to={constant.routeSettings}>
        <i className="fas fa-cogs fa-1x"></i>                
      </Link>
    </NavItem>  
  </Nav>   
  )
}

MobileMenu.propTypes = {
  dropdownOpen: PropTypes.bool.isRequired,
  triggerMenu: PropTypes.bool.isRequired,
  toggleDropDown: PropTypes.func.isRequired
}

export default MobileMenu;