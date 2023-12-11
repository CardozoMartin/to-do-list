import { useState } from "react";
import Table from "./Table";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);


  const handleChange = (e) => {
    const value = e.target.value;

    setTitle(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp)
  };

  const handleUpDate= (id, value)=>{
    const temp = [...todos];
    const item = temp.find(item => item.id === id)
    item.title = value;
    setTodos(temp)
  }
  return (
    <section className="text-center mt-5">
      <h1>Escriba su tarea !</h1>
      <form
        action=""
        className="d-flex d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <fieldset className="">
          <input
            type="text"
            className="form-control fw-bolder border-3 mb-3"
            value={title}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="btn btn-success "
            value="Agregar tarea"
            onClick={handleSubmit}
          />
        </fieldset>
      </form>
      
      <Table key={todos.id} todos={todos} setTodos={setTodos} onUpDate={handleUpDate} ></Table>
    </section>
  );
};

export default TodoApp;
