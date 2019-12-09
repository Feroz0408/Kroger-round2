import React from 'react';
import './CategoryDetails.css';

const CategoryDetails = props => {
  return (
    <div className={!props.categoryDetails.length > 0 ? 'hide' : 'show'}>
      <h3> Items in Category: ({props.shortName})</h3>
      <table id="details">
        <tbody>
          <tr>
            <th className="table-head">Name</th>
            <th>Description</th>
          </tr>
          {props.categoryDetails.length > 0 &&
            props.categoryDetails.map(details => {
              return (
                <tr key={details.id}>
                  <td>{details.name}</td>
                  <td>{!!details.description ? details.description : 'N/A'}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryDetails;
