import React from 'react';
import { BaseComponent, Frame } from '../../base';

class SampleTwo extends BaseComponent {
  componentDidMount = () => {
  }
  render() {
    return (
      <Frame showNav={true}>
        <div>
          <div>SampleTwo View</div>
        </div>
      </Frame>
    );
  }
}
export default SampleTwo;
