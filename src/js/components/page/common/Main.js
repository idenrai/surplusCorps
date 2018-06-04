import React from 'react';
import { BaseComponent, Frame } from '../../base';

class Main extends BaseComponent {

  componentDidMount() {
  }

  render() {
    return (
      <Frame showNav={true}>
        <div>Main View</div>
      </Frame>
    );
  }
}

export default Main;
