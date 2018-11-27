import React, { Component } from 'react';
import DesktopMenu from '../../components/DesktopMenu';
import MobileMenu from '../../components/MobileMenu';
import Routes from '../../routes';
import './styles.css';

class Layout extends Component {
  state = {
    dropdownOpen: false,
    triggerMenu: false
  }
  toggleDropDown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  triggerMenuSize = () =>{
    this.setState(prevState => ({
      triggerMenu: !prevState.triggerMenu
    }));
  }
  render(){
    const { triggerMenu } = this.state;
    return (
      <div className='layout'>
        <aside className='sidebar'>   
          <DesktopMenu
            triggerMenu = {triggerMenu}
            dropdownOpen={this.state.dropdownOpen}
            toggleDropDown={this.toggleDropDown}/>
          <MobileMenu
            triggerMenu = {triggerMenu}
            dropdownOpen={this.state.dropdownOpen}
            toggleDropDown={this.toggleDropDown}/>
        </aside>
        <div className="block-container">
            <div className='btn-trigger-menu'
              onClick={this.triggerMenuSize}>
              { triggerMenu 
                ? <i className="fas fa-arrow-circle-right"></i>
                : <i className="fas fa-arrow-circle-left fa-1x"></i>
              }
            </div>
            <div className="content">
              <Routes />
            </div>
        </div> 
      </div>
    )
  }
  
}

export default Layout