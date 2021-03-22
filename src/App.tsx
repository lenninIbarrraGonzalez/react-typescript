import React, { useState } from "react";

//Creamos un type para hacer mas corto el llamado e:FormElement
type FormElement = React.FormEvent<HTMLFormElement>;

//Creamos una interface para las tareas [{},{},{}]
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    console.log(tasks);
    setNewTask("");
  };

  //agregando una nueva tarea
  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  className="form-control"
                  autoFocus
                />
                <button className="btn btn-success btn-block mt-2">
                  Guardar
                </button>
              </form>
            </div>
          </div>

          {tasks.map((item: ITask, index: number) => (
            <div className="card card-body mt-2" key={index}>
              <h2 style={{ textDecoration: item.done ? "line-through" : "" }}>
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
