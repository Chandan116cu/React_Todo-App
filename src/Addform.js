import React, { Component } from 'react';
class Addform extends Component {
    state={
        content:''
    }
    addnewtodo=(e)=>{
      this.setState(
          {
              content:e.target.value
          }
      )
    }
    addnewtodomain=(e)=>{
        e.preventDefault();
       this.props.additem(this.state);
       this.setState(
        {
            content:''
        }
    )
      }
  render() {
    return (
     <div>
         <form onSubmit={this.addnewtodomain}>
             <label>Enter new Todo:</label>
             <input onChange={this.addnewtodo} value={this.state.content}></input>
         </form>
     </div>
    );
  }
}
export default Addform;
