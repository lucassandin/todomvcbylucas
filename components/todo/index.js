import React from "react";
import { updatetodo } from "../../config/machine";
import "./style.css";

const Todo = ({ machine, send }) => {
  return (
    <div className="">
      <ul>
        {updatetodo(machine) &&
          updatetodo(machine).map((t) => (
            <li key={t.id}>
              <div>
                <input
                  type="checkbox"
                  id={t.id}
                  name="register"
                  value={t.value}
                  onChange={(e) => {
                    send({
                      type: "INITIAL",
                      todos: {
                        formulary: { task: machine.context.todos.task },
                        todo: {
                          id: t.id,
                          value: t.value,
                          complete: true,
                        },
                        event: e,
                      },
                    });
                  }}
                  checked={t.complete}
                />
                <label>{t.value}</label>
                <div>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="x w-6 h-6 trash"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
