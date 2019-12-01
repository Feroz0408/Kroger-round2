import React, { Component } from 'react';
import './Category.css';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      categoryDetails: []
    };
  }

  async componentDidMount() {
    try {
      await fetch('http://stream-restaurant-menu-svc.herokuapp.com/category')
        .then(res => res.json())
        .then(data => {
          this.setState({ categoryList: data });
        });
      console.log(this.state.categoryList);
    } catch (err) {
      console.error(err.message);
    }
  }

  async fetchCategoryDetails(short_name) {
    console.log(short_name);
    try {
      await fetch(
        `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ categoryDetails: data });
        });
      console.log(this.state.categoryDetails);
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    return (
      <div>
        <h3>Menu Categories</h3>
        <div className='container'>
          <div className='category-list'>
            {this.state.categoryList.map((category, i) => {
              return (
                <li key={i}>
                  <a
                    onClick={() =>
                      this.fetchCategoryDetails(category.short_name)
                    }
                  >
                    {' '}
                    {category.name} - ({category.short_name})
                  </a>
                </li>
              );
            })}
          </div>
          <div>
            <table
              id='details'
              className={
                !this.state.categoryDetails.length > 0 ? 'hide' : 'show'
              }
            >
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
              {this.state.categoryDetails.length > 0 &&
                this.state.categoryDetails.map(details => {
                  return (
                    <tr key={details.id}>
                      <td>{details.name}</td>
                      <td>{details.description}</td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
