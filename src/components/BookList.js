import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

class BookList extends Component {

  render() {
    return (
      <div className="list-group">
        {this.props.list.map((val, i) =>
          <a
          href={`#/${this.props.listId}/${val.id}`}
          key={i}
          className={'list-group-item ' + ((i === this.props.active) ? "active" : "")}
          onClick={() => {this.props.handleSelect(i)}}
          >
            <h5 className="list-group-item-heading">{val.name}</h5>
            <p className="list-group-item-text">{val.author}</p>
          </a>
        )}
      </div>
    );
  }
};

export default BookList;
