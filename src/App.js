import React, { Component } from 'react';
import Snake from './snake'
import Food from './food'



const getRandomCoords = () => { 
  let min = 1;
  let max = 98;
  let randX = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let randY = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [randX,randY]
}

class App extends Component {
state = { 
  food: getRandomCoords(),
    snakeDots: [ 
    [0,0],[2,0]
  ]

}



  render() { 
  return (
   <div className="game-area">
     <Snake snakeDots= { this.state.snakeDots}/>
     <Food  dot={this.state.food}/>

   </div>
   
   );
  }
}

export default App;
