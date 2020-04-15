import React, { Component } from 'react';
import Todos from './todos';
import Addform from './Addform';
class App extends Component {
  state={
    todos:[
      {id:1,content:'Buy Milk'},
      {id:2,content:'Buy NewsPaper'},
      {id:3,content:'Buy Bread'},
    ] 
  }
  deltodo=(id)=>{
     const afterdel=this.state.todos.filter(x=>{
       return x.id!==id;
     })
     this.setState({
       todos:afterdel,
     })
  }
  additem=(x)=>{
    x.id=Math.random();
    const addlist=[...this.state.todos,x]
    this.setState({
      todos:addlist
    })
  }
  render() {
    return (
      <div className="Todo's container">
      <h1 className="center blue-text">Todo's</h1>
       <Todos deltodo={this.deltodo} todos={this.state.todos}/>
       <Addform additem={this.additem}/>
      </div>
    );
  }
}
export default App;
