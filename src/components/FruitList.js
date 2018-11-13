import React, { Component } from 'react';

class FruitList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         items : [
           {'id': 1, 'name': 'orange', 'bgColor': '#f9cb9c'},
           {'id': 2, 'name': 'lemon','bgColor' : '#fee599'},
           {'id': 3, 'name': 'strawberry', 'bgColor': '#e06666'},
           {'id': 4, 'name': 'apple', 'bgColor' : '#b6d7a7'}
         ]
      }
   }
   onMoveUp = (key) => {
      if(key === 0) return;
      const { items } = this.props;
      const index = key - 1;
      const itemAbove = items[index];
      items[key - 1] = items[key];
      items[key] = itemAbove;
      this.setState({ items });
   }

   onMoveDown = (key) => {
      const { items } = this.props;
      if(key === items.length - 1) return;
      const index = key + 1;
      const itemBelow = items[index];
      items[key + 1] = items[key];
      items[key] = itemBelow;
      this.setState({ items });
   }

   render() {
      const { items } = this.state;
      return (
         <ul>
           {items.map((item, key) =>
               <li key={key} style={{ backgroundColor: item.bgColor }}>
                  <div className="fruitsId">{ key + 1 }</div>
                  <div className="fruitsName">{ item.name }</div>
                  <div className="fruitsArrows">
                     <span onClick={() => this.onMoveUp(key)}>&#x25B2;</span>
                     <span onClick={() => this.onMoveDown(key)}>&#x25BC;</span>
                  </div>
               </li>
            )}
         </ul>
      );
   }
}

export default FruitList;
