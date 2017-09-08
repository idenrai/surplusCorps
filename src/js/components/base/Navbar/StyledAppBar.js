import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import assign from 'object-assign';
import { BaseComponent } from '../../base';

class StyledAppBar extends BaseComponent {
  getStyles = (props, context) => {
    const {
      root,
      title,
    } = context.muiTheme.appBar;
    const style = {
      root,
      title
    };
    if (!this.props.showNav) style.root.display = 'none';
    return style;
  }
  render() {
    const {
      style,
      titleStyle,
      ...other, // eslint-disable-line comma-dangle
    } = this.props;
    const styles = this.getStyles(this.props, this.context);

    return (
      <AppBar
        style={assign({}, styles.root, style)}
        titleStyle={assign({}, styles.title, titleStyle)}
        {...other}
      />
    );
  }
}
StyledAppBar.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
StyledAppBar.propTypes = {
  showNav: React.PropTypes.bool.isRequired,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
};
export default StyledAppBar;
