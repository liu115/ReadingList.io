import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

class BookInfo extends Component {
  state = {
    name: '',
    author: '',
    data: '',
    img: '',
  }

  componentDidMount() {
    const id = this.props.id;
    fetch(`/api/books/${id}`)
      .then(res => res.json())
      .then(book => {
        this.setState({
          name: book.name,
          data: book.data,
          img: book.img,
          author: book.author
        });
      });
  }

  componentDidUpdate() {
    const id = this.props.id;
    fetch(`/api/books/${id}`)
      .then(res => res.json())
      .then(book => {

        this.setState({
          name: book.name,
          data: book.data,
          img: book.img,
          author: book.author
        });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <img src={this.state.img} style={{margin: '0 auto 20px auto'}}/>
          </div>
          <div className="col-xs-12">
            <h4>{this.state.name}</h4>
            <p>作者: {this.state.author}</p>
            {this.state.data.split('\n').map((x, i) => <p key={i}>{x}</p>)}
          </div>
        </div>
      </div>
    );
  }
};

export default BookInfo;
