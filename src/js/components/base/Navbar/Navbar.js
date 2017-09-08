import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import assign from 'object-assign';
import StyledAppBar from './StyledAppBar';
import { Message, Menu } from '../../../../config';
import { BaseComponent, DropdownMenu } from '../../base';

class Navbar extends BaseComponent {
  getStyles = (props, context) => {
    const {
      link,
      textColor
    } = context.muiTheme.appBar;
    const style = {
      link
    };
    style.link.color = textColor;
    return style;
  }
  render() {
    const {
      children,
      ...other, // eslint-disable-line comma-dangle
    } = this.props;
    const styles = this.getStyles(this.props, this.context);
    return (
      <div>
        <StyledAppBar
          title={
            <Link style={assign({}, styles.link)} to="/">
              {Message.labels.navbar.title}
            </Link>
          }
          iconElementLeft={<DropdownMenu data={Menu} />}
          {...other}
        />
        {children}
      </div>
    );
  }
}

Navbar.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
Navbar.propTypes = {
  showNav: React.PropTypes.bool.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]).isRequired
};
export default Navbar;
