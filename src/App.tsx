import React, { useState } from "react";

//Creamos un type para hacer mas corto el llamado e:FormElement
type FormElement = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} />
        <button>Guardar</button>
      </form>
    </>
  );
}

export default App;
