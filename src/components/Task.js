import TaskCommandButton from "./TaskCommandButton";

const Task = (props) => {
  return (
    <div className="col">
      <div className="card" style={{ width: 300, heigth: 15, margin: 4 }}>
        <div className="card-body">
          <h5 className="card-title">Task title</h5>
          <p className="card-text">{props.description}</p>
          <div>
            <h6>Task Owner: {props.assignee.name}</h6>
          </div>
          <div>
            <h6>Task Due date: {props.dueDate}</h6>
          </div>
          <hr />
          <TaskCommandButton btnName="Assing" cmd="" />
          <TaskCommandButton btnName="Unassign" cmd="" />
          <TaskCommandButton btnName="Reassign" cmd="" />
        </div>
      </div>
    </div>
  );
};

export default Task;
