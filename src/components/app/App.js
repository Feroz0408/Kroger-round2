import React, { Component, Fragment } from 'react';
import CategoryList from '../category-list/CategoryList';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <CategoryList />
      </Fragment>
    );
  }
}

export default App;
