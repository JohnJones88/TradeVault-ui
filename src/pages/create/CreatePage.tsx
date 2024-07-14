import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';





function CreatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('')
  const [condition, setCondition] = useState('')


  return (
    <div className="container pt-4">
      <div className="mb-5">
        {id ? <h1>Update Collectable</h1> : <h1>Create Collectable</h1>}
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <label className="form-label">Name</label>
          <input className="form-control" type="text" placeholder="Enter Collectable name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows={4} placeholder="Enter Collectable description" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea >
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <label className="form-label">Age</label>
          <input className="form-control" type="number" placeholder="Enter Collectable age" value={age} onChange={(e) => { setAge(e.target.value) }}></input>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4">
          <Form.Select className="form-control" aria-label="Default select example" value={condition} onChange={(e) => { setCondition(e.target.value) }}>
            <option>Choose the Condition</option>
            <option value="Mint">Mint</option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Poor">Poor</option>
          </Form.Select>
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn-primary" onClick={addCollectable}>Submit</button>
      </div>
    </div>
  );
  function addCollectable() {

    const asyncPostCollectable = async () => {
      const url = process.env.REACT_APP_BASE_URL + '/collectables';

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` },
        body: JSON.stringify({ name: name, description: description, age: age, condition: condition })
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);

        localStorage.setItem('profile-token', data.token)

        navigate('/view')
      } catch (error) {
        console.error(error);
      }
    }

    const asyncPutCollectable = async () => {
      const url = process.env.REACT_APP_BASE_URL + `/collectables/${id}`;

      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` },
        body: JSON.stringify({ name: name, description: description, age: age, condition: condition })
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);

        localStorage.setItem('profile-token', data.token)

        navigate('/view/:id')
      } catch (error) {
        console.error(error);
      }

    }

    if (id) {
      asyncPutCollectable();
    }
    else {
      asyncPostCollectable();
    }
  }
}



export default CreatePage;
