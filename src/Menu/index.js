import React, { Component, Fragment } from 'react';
import { ExternalLink, Link, withRouter } from "react-router-dom";
import classnames from 'classnames';
import { slide as MobileMenu } from 'react-burger-menu'
import logo from '../images/logo.png';
import './style.scss';
import hamburger from '../images/hamburger.svg';

const menuObjects = [
  {
    name: 'Home',
    slug: '/',
    hideOn: '/',
  },
  {
    name: 'Travel Info',
    slug: '/travel',
    hideMobile: true,
  },
  {
    name: 'RSVP',
    slug: '/rsvp',
  },
  {
    name: 'Weekend Events',
    slug: '/details',
  },
  {
    name: 'FAQ',
    slug: '/faq',
  },
];

class Menu extends Component {
  state = {
    open: false,
  };

  closeMenu = () => {
    this.setState({'open': false});
  };

  render() {
    let links = menuObjects.map(obj => (
      <li className={classnames(
        'menuItem', 
        {'active': obj.slug === this.props.location.pathname},
        {'hideMobile': obj.hideMobile === true  },
        {'hideDesktop': obj.hideOn === this.props.location.pathname  }
      )}>
        <Link to={obj.slug} onClick={this.closeMenu}>{obj.name}</Link>
      </li>
    ));

    const registry = (
      <li className={classnames('menuItem', 'hideMobile')}>
        <a href="https://www.zola.com/registry/calliandlucas" rel="noopener noreferrer" target="_blank">Registry</a>
      </li>
    );
    links.push(registry);

    return (
      <nav className={classnames({'home': '/' === this.props.location.pathname})}>
        <ul className='nav'>
          {links}
        </ul>
        <div className={classnames('hamburger-menu', {'hide-mobile': '/' === this.props.location.pathname})}>
          <MobileMenu isOpen={this.state.open} customBurgerIcon={ <img src={hamburger} /> } right width={ '50%' } >
            {links}
          </MobileMenu>
        </div>
      </nav>
    );
  }
}

export default withRouter(Menu);
