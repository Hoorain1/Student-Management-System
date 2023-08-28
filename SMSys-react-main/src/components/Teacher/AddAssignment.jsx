import { useState } from 'react'
import React from 'react';

const AddAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddAssignment = () => {
    if (newAssignment.trim() !== '') {
      if (editIndex === -1) {
        setAssignments([...assignments, newAssignment]);
      } else {
        const updatedAssignments = [...assignments];
        updatedAssignments[editIndex] = newAssignment;
        setAssignments(updatedAssignments);
        setEditIndex(-1);
      }
      setNewAssignment('');
    }
  };

  const handleEditAssignment = (index) => {
    setNewAssignment(assignments[index]);
    setEditIndex(index);
  };

  const handleDeleteAssignment = (index) => {
    const updatedAssignments = assignments.filter((_, i) => i !== index);
    setAssignments(updatedAssignments);
  };

  return (
    <div>
      <h1>Assignment List</h1>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            {assignment}
            <button onClick={() => handleEditAssignment(index)}>Edit</button>
            <button onClick={() => handleDeleteAssignment(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newAssignment}
          onChange={(e) => setNewAssignment(e.target.value)}
        />
        <button onClick={handleAddAssignment}>{editIndex === -1 ? 'Add' : 'Update'}</button>
        {editIndex !== -1 && (
          <button onClick={() => setEditIndex(-1)}>Cancel</button>
        )}
      </div>
    </div>
  );
};

export default AddAssignment;