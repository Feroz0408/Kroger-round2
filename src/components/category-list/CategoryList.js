import React, { Component, Fragment } from 'react';
import './CategoryList.css';
import CategoryDetails from '../category-details/CategoryDetails';
import { getAllCategories, getCategorDetails } from '../../api/Api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      categoryDetails: [],
      shortName: ''
    };
  }

  async componentDidMount() {
    try {
      await getAllCategories()
        .then(res => res.json())
        .then(data => {
          this.setState({ categoryList: data });
        });
    } catch (err) {
      console.error(err.message);
    }
  }

  async fetchCategoryDetails(short_name) {
    try {
      await getCategorDetails(short_name)
        .then(res => res.json())
        .then(data => {
          this.setState({ categoryDetails: data, shortName: short_name });
        });
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Menu Categories</h2>
        <div className="container">
          <div className="category-list">
            {this.state.categoryList.map(category => {
              return (
                <div
                  className="list-item"
                  key={category.id}
                  onClick={() => this.fetchCategoryDetails(category.short_name)}
                >
                  {category.name} - ({category.short_name})
                </div>
              );
            })}
          </div>
          <CategoryDetails
            categoryDetails={this.state.categoryDetails}
            shortName={this.state.shortName}
          />
        </div>
      </Fragment>
    );
  }
}

export default CategoryList;
