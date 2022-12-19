const TaskCommandButton = (props) => {
  const { btnName } = props;
  return (
    <button class="btn btn-primary" style={{ margin: 2 }}>
      {btnName}
    </button>
  );
};

export default TaskCommandButton;