import React, {Component} from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "Naa55",
      todoItems: [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: "Call Annie", done: false}
      ],
      newItemText: ""
    }
  }

  updateNewTextValue = (e) => {
    this.setState({
      newItemText: e.target.value
    })
  }

  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)){
      this.setState({
        todoItems: [
          ...this.state.todoItems, 
          {action: this.state.newItemText, done: false}
        ],
        newItemText: ""
      })
    }
  }
   changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Naa55" ? "Betty":"Eric"
    })
  }

  render() { 
    return (
      <div className="container-fluid">
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.todoItems.filter(item => !item.done).length} items to do
        </h4>
          <button className="btn btn-primary m-2" onClick={this.changeStateData}>
            Change
          </button>
          <div className="my-1">
            <input className="form-control" value={this.state.newItemText} onChange={this.updateNewTextValue}/>
            <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>Add</button>
          </div>
      </div>
  );
  }
}

