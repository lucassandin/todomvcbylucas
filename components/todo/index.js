import React, { useState, useEffect, useRef } from "react";
import { updatetodoList } from "../../config/actions";
import "./style.css";

const Todo = ({ machine, send, todos, handleOnChange }) => {
  return (
    <div className="">
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              id={t.id}
              name="register"
              value={t.value}
              onChange={(e) => {
                console.log("change CLICKED");
                send({
                  type: "INITIAL",
                  task: machine.context.data.task,
                  id: t.id,
                  checked: e.target.checked,
                });
                handleOnChange();
              }}
              checked={t.complete}
            />
            <label>{t.value}</label>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="x w-6 h-6 trash"
              onClick={() =>
                send({
                  type: "DELETE",
                  id: t.id,
                })
              }
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
