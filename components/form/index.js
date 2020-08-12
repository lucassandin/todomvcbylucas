import React, { Component } from "react";
import Todo from "../todo";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { todo: "" },
      selecteds: this.todos,
      active: this.todos,
      all: this.todos,
      complete: [],
      control: "all",
    };
  }

  todos = [
    { id: 1, value: "task 1", complete: false },
    { id: 2, value: "task 2", complete: false },
    { id: 3, value: "task 3", complete: false },
    { id: 4, value: "task 4", complete: false },
  ];

  style = {
    color: "#0202028a",
    textDecoration: "line-through",
  };

  componentDidMount() {
    document.querySelector("#todo").focus();
  }

  onChange = (event) => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const selecteds = [
      ...this.state.selecteds,
      {
        id: Math.floor(Math.random() * 1000 + 1),
        value: this.state.data.todo,
        complete: false,
      },
    ];

    this.setState({
      selecteds,
      all: selecteds,
      active: selecteds.filter((f) => !f.complete),
      complete: selecteds.filter((f) => f.complete),
    });
  };

  onSelect = (event) => {
    let selecteds = this.state.all.map((k) => {
      let aux = k;
      if (parseInt(event.target.id) === k.id) {
        if (event.target.checked) {
          aux = { ...k, styled: this.style, complete: true };
        }

        if (!event.target.checked) aux = { ...k, styled: {}, complete: false };
      }
      return aux;
    });

    let active = selecteds.filter((f) => !f.complete);
    let complete = selecteds.filter((f) => f.complete);
    let all = selecteds;
    this.setState({ active, complete, all }, () =>
      this.onController(this.state.control)
    );
  };

  onController = (control) => {
    switch (control) {
      case "active":
        this.setState({
          control: "active",
          selecteds: this.state.active,
        });
        break;
      case "complete":
        this.setState({
          control: "complete",
          selecteds: this.state.complete,
        });
        break;
      default:
        this.setState({
          control: "all",
          selecteds: this.state.all,
        });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            id="todo"
            name="todo"
            placeholder="Task here"
            onChange={this.onChange}
            value={this.state.data.todo}
          ></input>
        </form>
        <Todo
          todos={this.state.selecteds}
          change={(event) => this.onSelect(event)}
          controller={(control) => this.onController(control)}
        />
      </div>
    );
  }
}

export default Form;
