import React, { Component } from 'react';

import BookInfo from './BookInfo.js';
import BookList from './BookList.js';
import SideBar from './SideBar.js';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from 'react-sidebar';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
    list: [{id: 0, name: '', author: ''}],
    // nameList: [],
    choosen: 0,
  }


  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
    const list_id = this.state.route.split('/')[1];
    fetch(`/api/lists/${list_id}`)
    .then(res => res.json())
    .then((list) => {
      console.log(list);

      this.setState({ list: list });
    });

  }
  // componentDidUpdate() {
  //   const list_id = this.state.route.split('/')[1];
  //   fetch(`/api/lists/${list_id}`)
  //   .then(res => res.json())
  //   .then((list) => {
  //     this.setState({ list: list });
  //   });
  // }

  handleSelect(i) {
    this.setState({ choosen: i });
  }

  render() {
    const divStyle = {
      padding: '20px 0 0 0',
    };
    var sidebarContent = <b>Sidebar content</b>;
    return (
      <div>


      <div className="container">



        <div className="row" >

          <div className="col-xs-5" style={divStyle}>
            <BookList listId={this.state.route.split('/')[1]} list={this.state.list} active={this.state.choosen} handleSelect={this.handleSelect.bind(this)}/>
          </div>
          <div className="col-xs-7" style={divStyle}>
            <BookInfo id={this.state.list[this.state.choosen].id} />
          </div>
        </div>
      </div>
      </div>

    );
  }
};

export default App;
