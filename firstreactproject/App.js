import React from 'react'
import ReactDOM from 'react-dom'
import todolist from './toDoList'
import ToDoItem from './ToDoItem'
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todo : todolist
        }
        
    }
    handleClick(id){
        this.setState( ps => {
            const updatedtodo = ps.todo.map(item=>{
                if(item.id===id){
                    item.isComplete = !item.isComplete
                }
                return item 
            })
            
            return {
                todo : updatedtodo
            }
        }
        )
        }
    render(){
       // console.log(todolist)
        const todoarr = this.state.todo.map(item => 
         <ToDoItem key={item.id} item={item} handleClick={this.handleClick.bind(this)}/>
        )
        return (
            <div>
             {todoarr}
             </div>
        )
    }
}

export default App
