import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { BaseComponent } from './components/base';
import { SampleOne, SampleTwo, SampleThree } from './components/page/samples';
import { NotExistRoute, MainPage } from './components/page/common';

class RouterControler extends BaseComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route>
          <Route path="/" component={MainPage} />
          <Route path="sampleone" component={SampleOne} />
          <Route path="sampletwo" component={SampleTwo} />
          <Route path="samplethree" component={SampleThree} />
        </Route>
        <Route path="*" component={NotExistRoute} />
      </Router>
    );
  }
}
export default RouterControler;
