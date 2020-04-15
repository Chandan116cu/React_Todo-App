import React from 'react';
const Todos=({todos,deltodo})=>{
    const newtodo=todos.length?(
        todos.map(x=>{
            return(
                <div className="collection-item" key={x.id}>
                    <span onClick={()=>{deltodo(x.id)}}>{x.content}</span>
                </div>
            )
          }) 
    ):(<p className="center">You have no Todo's left </p>);
    return(
        <div className="todos collection">
          {newtodo}
        </div>
    )
}
export default Todos;