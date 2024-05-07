import { createContext, useReducer, useState } from "react";

const TodoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_goal":
      return [
        ...state,
        { id: Date.now(), goal: action.payload, isDone: false },
      ];

    case "Check_goal":
      return state.map((go) =>
        go.id === action.payload ? { ...go, isDone: !go.isDone } : go
      );

    case "Delete_goal":
      return state.filter((go) => go.id !== action.payload);

    default:
      return state;
  }
};

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text) return alert("Input box is Empty!");
    if (text.length < 3 || text.length > 15)
      return alert("Goal should be more than 3 and less than 15 characters");
    dispatch({ type: "Add_goal", payload: text });
    console.log(state);
    setText("");
  }

  function handleCheck(id) {
    dispatch({ type: "Check_goal", payload: id });
  }

  function handleDelete(id, isDone) {
    if (!isDone)
      return alert("Make sure that todo item is checked before deleting!");

    dispatch({ type: "Delete_goal", payload: id });
  }
  return (
    <TodoContext.Provider
      value={{ state, text, setText, handleAdd, handleCheck, handleDelete }}
    >
      {children}{" "}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
