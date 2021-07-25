import "./styles.css";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import Completed from "./Completed";
import Active from "./Active";
import Home from "./Home";

export default function App() {
  const [detail, setDetail] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 1, done: true, content: "coding" },
    { id: 2, done: false, content: "sleeping" },
    { id: 3, done: true, content: "sadf" }
  ]);

  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    const actives = todoList.filter((item) => item.done === false);
    setActive(actives);
    const dones = todoList.filter((item) => item.done === true);
    setCompleted(dones);
  }, [todoList]);

  const handleChange = (value) => {
    setDetail(value);
  };
  const handleAdd = () => {
    if (!detail) {
      alert("detail can not be empty!");
      return;
    }
    const todo = { id: Date.now(), done: false, content: detail };
    const todoListCopy = todoList.slice();
    todoListCopy.push(todo);
    setTodoList(todoListCopy);
    setDetail("");
  };
  const handleCheck = (index) => {
    const item = todoList.find((item) => item.id === index);
    const i = todoList.indexOf(item);
    const todoListCopy = todoList.slice();
    todoListCopy[i].done = !todoListCopy[i].done;
    setTodoList(todoListCopy);
  };

  const handleDelete = (id) => {
    const newTodolist = todoList.filter((item) => item.id !== id);
    setTodoList(newTodolist);
  };
  const handleDeleteAll = () => {
    const actives = todoList.filter((item) => item.done === false);
    setTodoList(actives);
  };
  return (
    <Router>
      <div className="App">
        <h1>#todo</h1>
        <nav>
          <NavLink exact to="/" activeClassName="selected">
            All
          </NavLink>
          <NavLink to="/active" activeClassName="selected">
            Active
          </NavLink>
          <NavLink to="/completed" activeClassName="selected">
            Completed
          </NavLink>
        </nav>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home
              data={todoList}
              text={detail}
              onClick={handleAdd}
              onCheck={handleCheck}
              onChange={handleChange}
            />
          </Route>
          <Route path="/active">
            <Active data={active} onCheck={handleCheck} />
          </Route>
          <Route path="/completed">
            <Completed
              data={completed}
              onClick={handleDelete}
              onDeleteAll={handleDeleteAll}
              onCheck={handleCheck}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
