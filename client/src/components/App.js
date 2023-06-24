import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../actions'
import Header from './Header';

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, [])

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={() => <div>Landing</div>} />
          <Route exact path="/surveys" component={() => <div>Dashboard</div>} />
          <Route path="/surveys/new" component={() => <div>Dashboard</div>} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);
