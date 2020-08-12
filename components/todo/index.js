import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.todos &&
          this.props.todos.map((t) => (
            <li key={t.id} style={t.styled}>
              <input
                type="checkbox"
                id={t.id}
                name="register"
                value={t.value}
                onChange={(e) => this.props.change(e)}
                checked={t.complete}
              />
              {t.value}
            </li>
          ))}

        <button type="button" onClick={() => this.props.controller("all")}>
          All
        </button>
        <button type="button" onClick={() => this.props.controller("active")}>
          Active
        </button>
        <button type="button" onClick={() => this.props.controller("complete")}>
          Complete
        </button>
      </>
    );
  }
}

export default Todo;
