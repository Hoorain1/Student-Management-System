import React, { useState, useCallback } from "react";

const AddStudent =() => {
  const [name, setName] = useState([]);
  const [Id, setId] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

const handleAddStudent =() => {
  if (newId.trim( ) !== ''){
    if (editIndex === -1) {
      setName ([...AddStudent, newStudent]);
    }
    else{
      const updateStudentsInfo = [...updateStudent];
      updateStudentsInfo[editIndex] = AddStudent;
      setId(updateStudentsInfo);
      setEditIndex(-1);
  }
  setnewId ('')
}
};

const handleEditStudent = (index)=> {
  setnewId(AddStudent[index]);
  setEditIndex(index);
};


const handleDeleteStudent = (index) => {
 const updateAddStudent = StudentsList.filter ((_, i) => i !== index);
  AddStudent(updateAddStudent);
};

return (
  <div>
    <h1> Student List</h1>
    <ul>
      {Student.map((Student, index) => (
        <li key={index}>
          {Student}
          <button onClick={() => handleEditStudent(index)}>Edit</button>
          <button onClick={() => handleDeleteStudent(index)}>Delete</button>
        </li>
      ))}
    </ul>
    <div>
      <input
        type="text"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
      />
      <button onClick={handleAddStudent}>{editIndex === -1 ? 'Add' : 'Update'}</button>
      {editIndex !== -1 && (
        <button onClick={() => setEditIndex(-1)}>Cancel</button>
      )}
    </div>
  </div>
);
};

export default AddStudent;