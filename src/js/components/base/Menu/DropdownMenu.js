import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import uuid from 'uuid/v4';
import { BaseComponent } from '../../base';

class DropdownMenu extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      address: document.location.pathname,
    };
  }
  getIcon = (iconClass) => {
    let icon = '';
    if (iconClass.length > 0) {
      icon = `fa ${iconClass}`;
    }
    return icon;
  }
  matchAddress = (link) => {
    let highlightClass = '';
    const address = this.state.address;
    if (link === address) {
      highlightClass = ' highlight';
    }
    return highlightClass;
  }
  toggleNav = (event) => {
    event.preventDefault();
    this.setState({
      address: document.location.pathname,
    });
    const navIsVisible = (!document.getElementsByClassName('dropdown-menu')[0].classList.contains('dropdown-is-active')) || false;
    document.getElementsByClassName('dropdown-menu')[0].classList.toggle('dropdown-is-active', navIsVisible);
    document.getElementsByClassName('dropdown-menu-trigger')[0].classList.toggle('dropdown-is-active', navIsVisible);
    if (!navIsVisible) {
      this.dropdownSearch.value = '';
      Array.from(document.getElementsByClassName('dropdown-menu-item')).forEach((item) => {
        item.setAttribute('style', '');
      });
      Array.from(document.getElementsByClassName('dropdown-menu-item-mini')).forEach((mini) => {
        mini.setAttribute('style', '');
      });
      Array.from(document.getElementsByClassName('mini-items')).forEach((mi) => {
        mi.classList.add('switchBtn');
      });
    }
  }
  makeDropdownReact = (data) => {
    if (data.menu.length === 0) return null;
    const base = this;
    const iconList = data.menu.map((list) => {
      const iconClass = this.getIcon(list.icon);
      return (
        <li key={uuid()}>
          <Link className="dropdown-menu-item" to="#0" onClick={base.toggleChild}>
            <i className={iconClass} />
            <h3>{list.name}</h3>
            <p>{list.description}</p>
          </Link>
          {base.link(list.submenu)}
        </li>
      );
    });
    return (
      <li>
        <ul className="dropdown-menu-icons">
          {iconList}
        </ul>
      </li>
    );
  }
  link = (data) => {
    if (!data || data.length === 0) return null;
    this.miniList = data.map((mini) => {
      const highlightClass = this.matchAddress(mini.link);
      const nmClass = `dropdown-menu-item-mini${highlightClass}`;
      const iconClass = this.getIcon(mini.icon);
      return (
        <Link key={uuid()} className={nmClass} to={mini.link}>
          <i className={iconClass} aria-hidden="true" />&nbsp;
          {mini.name}
        </Link>
      );
    });
    return (
      <div className="mini-items switchBtn">{this.miniList}</div>
    );
  }
  search = (data) => (
    <li className="li-search">
      <form className="cd-search">
        <input
          type="search"
          placeholder={data}
          onChange={this.realtimeSearching}
          ref={(c) => { this.dropdownSearch = c; }}
        />
        <i className="fa fa-search" aria-hidden="true" />
      </form>
    </li>
  );
  realtimeSearching = (event) => {
    event.preventDefault();
    const searchText = this.dropdownSearch.value;
    if (!searchText || searchText.length === 0) {
      if (window.matchMedia('(min-width: 768px)').matches) {
        [...document.getElementsByClassName('mini-items')].forEach(
          (elem) => elem.classList.remove('switchBtn'));
      } else {
        [...document.getElementsByClassName('mini-items')].forEach(
          (elem) => elem.classList.add('switchBtn'));
      }
      [...document.getElementsByClassName('dropdown-menu-item')].forEach(
        (elem) => elem.setAttribute('style', ''));
      [...document.getElementsByClassName('dropdown-menu-item-mini')].forEach(
        (elem) => elem.setAttribute('style', ''));
      return null;
    }
    [...document.getElementsByClassName('mini-items')].forEach(
      (elem) => elem.classList.add('switchBtn'));
    [...document.getElementsByClassName('dropdown-menu-item')].forEach(
      (elem) => elem.setAttribute('style', 'display:none'));
    [...document.getElementsByClassName('dropdown-menu-item-mini')].forEach(
      (elem) => elem.setAttribute('style', 'display:none'));
    const regex = new RegExp(searchText, 'gi');
    Array.from(document.getElementsByClassName('dropdown-menu-item')).forEach((parent) => {
      const text = parent.text;
      const result = text.match(regex);
      if (!result || result.length === 0) return null;
      parent.setAttribute('style', '');
      const submenu = parent.nextElementSibling.querySelectorAll('a');
      submenu.forEach((value) => {
        value.setAttribute('style', '');
      });
      return null;
    });
    Array.from(document.getElementsByClassName('dropdown-menu-item-mini')).forEach((child) => {
      const text = child.text;
      const result = text.match(regex);
      if (!result || result.length === 0) return null;
      if (!window.matchMedia('(min-width: 768px)').matches) {
        [...document.getElementsByClassName('mini-items')].forEach(
          (elem) => elem.classList.remove('switchBtn'));
      }
      child.setAttribute('style', '');
      child.parentElement.previousElementSibling.setAttribute('style', '');
      return null;
    });
    return null;
  }
  toggleChild = (event) => {
    event.preventDefault();
    if (window.matchMedia('(min-width: 768px)').matches) return;
    const target = event.currentTarget.nextElementSibling;
    target.setAttribute('style', '');
    target.classList.toggle('switchBtn');
    this.a = 0;
  }
  render() {
    const options = this.props.data;
    const iconClass = 'fa fa-bars';
    const closeIconClass = 'fa fa-times fa-2x';
    return (
      <div className="dropdown-menu-wrapper">
        <button className="dropdown-menu-trigger" onClick={this.toggleNav}>
          <i className={iconClass} />
        </button>
        <nav className="dropdown-menu">
          <h2>{options.title}</h2>
          <button className="cd-close" onClick={this.toggleNav}>
            <i className={closeIconClass} />
          </button>
          <ul className="dropdown-menu-content">
            {this.search(options.search)}
            {this.makeDropdownReact(options)}
          </ul>
        </nav>
      </div>
    );
  }
}
DropdownMenu.propTypes = {
  data: PropTypes.object.isRequired
};
export default DropdownMenu;
