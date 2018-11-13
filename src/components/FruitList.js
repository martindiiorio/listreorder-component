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
      console.log(key, 'onMoveUp ---------->')
   }

   onMoveDown = (key) => {
      const { items } = this.props;
      if(key === items.length) return;
      console.log(key, 'onMoveDown ---------->')
   }

   render() {
      const { items } = this.state;
      return (
         <ul>
           {items.map((item, key) =>
               <li key={key} style={{ backgroundColor: item.bgColor }}>
                  <div className="fruitsId">{ item.id }</div>
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
