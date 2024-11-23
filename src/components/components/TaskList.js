import React, { useState } from 'react';

function TaskList({ tasks, updateTask, deleteTask }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTask({ ...tasks[index] });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTask(editIndex, editTask);
    setEditIndex(null);
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            {editIndex === index ? (
              <>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={editTask.title}
                    onChange={handleEditChange}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="description"
                    value={editTask.description}
                    onChange={handleEditChange}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="dueDate"
                    value={editTask.dueDate}
                    onChange={handleEditChange}
                    className="form-control"
                  />
                </td>
                <td>
                  <select
                    name="status"
                    value={editTask.status}
                    onChange={handleEditChange}
                    className="form-control"
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </td>
                <td>
                  <button onClick={handleEditSubmit} className="btn btn-sm btn-success">
                    Save
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => handleEdit(index)} className="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button onClick={() => deleteTask(index)} className="btn btn-sm btn-danger ml-2">
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
