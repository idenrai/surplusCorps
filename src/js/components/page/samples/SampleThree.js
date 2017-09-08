import React from 'react';
import { BaseComponent, Frame } from '../../base';

class SampleThree extends BaseComponent {
  componentDidMount = () => {
  }
  render() {
    return (
      <Frame showNav={true}>
        <div>
          <div>SampleThree View</div>
        </div>
      </Frame>
    );
  }
}
export default SampleThree;
