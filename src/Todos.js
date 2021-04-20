import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {

    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }

    return (
        <div className="container" style={myStyle}>
         <h3 className="text-center my-3">Todos List</h3>
         {props.todos.length === 0 ? "No tasks in the list, Wanna add one?"  :
          props.todos.map((todo) => {
                return (
                    
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    
                    
                )
         }) }
        
        </div>
    )
}

export default Todos
