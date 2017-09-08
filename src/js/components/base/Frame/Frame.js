import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import NoticeMixin, { NotificationSystem } from 'react-notice';
import ReactMixin from 'react-mixin';
import { Navbar } from '../Navbar';
import { BaseComponent } from '../Base';

class Frame extends BaseComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showNav: true,
    };
  }

  componentDidMount() {
    this.setNotice(this.notice);
  }

  render() {
    return (
      <Navbar
        showNav={this.props.showNav}
      >
        <div style={{ margin: '0 1rem', paddingTop: '50px' }}>
          <Row>
            <Col md={12} sm={12} xs={12} >
              {this.props.children}
            </Col>
          </Row>
        </div>
        <NotificationSystem ref={(c) => { this.notice = c; }} />
      </Navbar>
    );
  }
}

ReactMixin(Frame.prototype, NoticeMixin);
Frame.propTypes = {
  showNav: React.PropTypes.bool.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element,
  ]).isRequired
};
export default Frame;
