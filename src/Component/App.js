import React from "react";
import AppTodo from "./AppTodo";
import TodoList from "./TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css'


function App(){
  return(
      <div id="app1" className="container-sm">
        <div className="card" id="block1">
          <AppTodo />
          <TodoList />
        </div>
      </div>
  )
}

export default App;
