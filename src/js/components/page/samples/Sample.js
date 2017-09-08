import React from 'react';
import { BaseComponent, Frame } from '../../base';

class Sample extends BaseComponent {

  componentDidMount() {
  }

  render() {
    return (
      <Frame showNav={true}>
        <div>Sample View</div>
      </Frame>
    );
  }
}

export default Sample;
