import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import logo from '../images/logo.png';
import classnames from 'classnames';
import './style.scss';
import { slide as MobileMenu } from 'react-burger-menu'
import hamburger from '../images/hamburger.svg';

const menuObjects = [
  {
    name: 'Travel Info',
    slug: '/travel'
  },
  // {
  //   name: 'RSVP',
  //   slug: '/rsvp',
  // },
  {
    name: 'Weekend Details',
    slug: '/details',
  },
  // {
  //   name: 'Registry',
  //   slug: '/registry',
  // },
];

class Menu extends Component {
  state = {
    open: false,
  };

  closeMenu = () => {
    this.setState({'open': false});
  };

  render() {
    const links = menuObjects.map(obj => (
      <li className={classnames('menuItem', {'active': obj.slug === this.props.location.pathname})}>
        <Link to={obj.slug} onClick={this.closeMenu}>{obj.name}</Link>
      </li>
    ));

    const numOfMenuItems = menuObjects.length;

    const leftLinks = links.slice(0, numOfMenuItems/2);
    const rightLinks = links.slice(numOfMenuItems/2, numOfMenuItems);

    return (
      <nav>
        <ul className="nav">
          {leftLinks}
        </ul>
        <div className="logo">
          <Link to="/"><img src={logo}/></Link>
        </div>
        <ul className="nav">
          {rightLinks}
        </ul>
        <div className="hamburger-menu">
          <MobileMenu isOpen={this.state.open} customBurgerIcon={ <img src={hamburger} /> } right width={ '50%' } >
            {links}
          </MobileMenu>
        </div>
      </nav>
    );
  }
}

export default withRouter(Menu);
