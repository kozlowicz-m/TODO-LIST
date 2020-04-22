import * as React from "react";
import ToDoList from "./components/ToDoList";
import { IToDoList } from "./interfaces/IToDoList";

class App extends React.Component<IToDoList> {
  render() {
    return (
      <React.Fragment>
        <ToDoList />
      </React.Fragment>
    );
  }
}

export default App;
