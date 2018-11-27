import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
import * as constant from '../../constant';

const DesktopMenu = ({ dropdownOpen, toggleDropDown, triggerMenu }) => {
  return (
    <Nav vertical 
      className={ !triggerMenu ? 'left-sidebar sidebar-desktop sidebar-show' : 'left-sidebar sidebar-desktop sidebar-none'}>     
      <NavItem>            
        <Link to={constant.routeCourses}>
        <i className="fas fa-address-book fa-1x"></i>            
          <span className='menu-text'>Templates</span>              
        </Link>
      </NavItem>
      <NavItem onClick={toggleDropDown}  className='down-menu'>            
          <i className="fas fa-landmark fa-1x"></i>
          <span className='down-menu_title'>VM images</span>                   
      </NavItem>   
        {
          dropdownOpen && 
          <NavItem className='sub-menu'>                            
            <NavLink href={constant.routeNatureImages} target="_blank">
              <i className="fab fa-pagelines fa-1x"></i> 
              <span className='menu-text'>Nature Images</span>                     
            </NavLink>
          </NavItem>
        }
        {
          dropdownOpen && 
          <NavItem className='sub-menu'>                
            <NavLink href={constant.routeGettyImages} target="_blank">
              <i className="fas fa-images fa-1x"></i>
              <span className='menu-text'> Getty Images</span>                 
            </NavLink>
          </NavItem>
        }  
      <NavItem>            
        <Link to={constant.routeUsers}>
          <i className="fas fa-users fa-1x"></i>
          <span className='menu-text'>Users</span>              
        </Link>
      </NavItem>
      <NavItem>            
        <Link to={constant.routeSettings}>
          <i className="fas fa-cogs fa-1x"></i>
          <span className='menu-text'>Settings</span>              
        </Link>
      </NavItem>  
    </Nav>   
  )
}
DesktopMenu.propTypes = {
  dropdownOpen: PropTypes.bool.isRequired,
  triggerMenu: PropTypes.bool.isRequired,
  toggleDropDown: PropTypes.func.isRequired
}
export default DesktopMenu;