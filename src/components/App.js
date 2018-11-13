import React, { Component } from 'react';
import FruitList from './FruitList';
import '../App.css';


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         fruitList : [
           {'id': 1, 'name': 'orange', 'bgColor': '#f9cb9c'},
           {'id': 2, 'name': 'lemon','bgColor' : '#fee599'},
           {'id': 3, 'name': 'strawberry', 'bgColor': '#e06666'},
           {'id': 4, 'name': 'apple', 'bgColor' : '#b6d7a7'}
         ]
      }
   }
   render() {
      return (
         <FruitList items={this.state.fruitList} />
      );
   }
}

export default App;

