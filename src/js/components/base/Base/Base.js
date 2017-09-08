import React, { Component } from 'react';

class Base extends Component {

  constructor(props, context) {
    super(props, context);
    if (process.env.NODE_ENV !== 'production') {
      console.info(this);
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps() {}

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <h1>Not Rendered</h1>
    );
  }
}

export default Base;
