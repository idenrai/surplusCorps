import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { BaseComponent } from './components/base';
import Sample from './components/page/samples/Sample';
import SampleOne from './components/page/samples/SampleOne';
import SampleTwo from './components/page/samples/SampleTwo';
import SampleThree from './components/page/samples/SampleThree';
import { NotExistRoute } from './components/page/common';

class RouterControler extends BaseComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route>
          <Route path="/" component={Sample} />
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
