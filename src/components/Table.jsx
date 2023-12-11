import React, { useState } from "react";

const Table = (props) => {
  const { todos, onUpDate } = props;
 
  return( <>
   <table className="table container">
        <thead>
          <tr>
            <th scope="col">Tarea</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td className="fw-bolder">{item.title}</td>
              <td>
                
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
  </>);
};

export default Table;