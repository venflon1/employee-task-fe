import NavbarApp from "./components/NavbarApp";
import Task from "./components/Task";

function App() {
  return (
    <section>
      <NavbarApp className="navbar" appName="ReactTaskEmployee App" />
      <div className="row">
        <Task
          description="Task A"
          assignee={{ name: "Pippo" }}
          dueDate="11/11/2022"
        />
        <Task
          description="Task B"
          assignee={{ name: "Minnie" }}
          dueDate="11/11/2022"
        />
        <Task
          description="Task C"
          assignee={{ name: "Pluto" }}
          dueDate="11/11/2022"
        />
        <Task
          description="Task D"
          assignee={{ name: "Qua" }}
          dueDate="11/11/2022"
        />
        <Task
          description="Task E"
          assignee={{ name: "Quo" }}
          dueDate="11/11/2022"
        />
        <Task
          description="Task F"
          assignee={{ name: "Qui" }}
          dueDate="11/11/2022"
        />
        <Task
          description="Task G"
          assignee={{ name: "Paperino" }}
          dueDate="11/11/2022"
        />
        <Task
          description="Task H"
          assignee={{ name: "Topolino" }}
          dueDate="11/11/2022"
        />
      </div>
    </section>
  );
}

export default App;
