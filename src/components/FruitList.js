import React, { Component } from 'react';

class FruitList extends Component {
   constructor(props) {
      super(props);
      this.onMoveUp = this.onMoveUp.bind(this);
      this.onMoveDown = this.onMoveDown.bind(this);


      
   }

   onMoveUp() {
      if (this.state.fruitList.id < 4)
         this.setState({
            count: alert(this.state.fruitList.id + 1)
         });
   }

   onMoveDown() {
      if (this.state.fruitList.id > 0)
         this.setState({
            count: alert(this.state.fruitList.id - 1)
         });
   }

   render() {
      return (
         <ul>
           {this.props.items.map((item, key) =>
               <li key={key} style={{ backgroundColor: item.bgColor }}>
                  <div className="fruitsId">{ item.id }</div>
                  <div className="fruitsName">{ item.name }</div>
                  <div className="fruitsArrows">
                     <span onClick={this.onMoveUp}>&#x25B2;</span>
                     <span onClick={this.onMoveDown}>&#x25BC;</span>                    
                  </div>
               </li>            
            )}
         </ul>
      );
   }
}

export default FruitList;
