import React from 'react'

class ToDoItem extends React.Component {
    constructor(){
        super()
        //this.handleClick = this.handleClick.bind(this)
    }
   
    render(){
      //  console.log('vamsi')
      //  console.log(this.props)
        return (
          <div>
          <input type='checkbox' checked={this.props.item.isComplete} onChange={(event) => this.props.handleClick(this.props.item.id)}
          checked={this.props.item.isComplete} />
          <p>{this.props.item.name}</p>  
          </div>
        )
    }
}

export default ToDoItem