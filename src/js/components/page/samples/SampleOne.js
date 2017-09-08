import React from 'react';
import { BaseComponent, Frame } from '../../base';

class SampleOne extends BaseComponent {

  componentDidMount() {
  }

  render() {
    return (
      <Frame showNav={true}>
        <div>SampleOne View</div>
      </Frame>
    );
  }
}

export default SampleOne;
