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
    <div>

      <div>
        {id ? <h1>Update Collectable</h1> : <h1>Create Collectable</h1>}
      </div>

      <div>
        <label>Name</label>
        <input type="text" placeholder="Enter Collectable name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
      </div>

      <div>
        <label>Description</label>
        <input type="text" placeholder="Enter Collectable description" value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
      </div>
      <div>
        <label>Age</label>
        <input type="text" placeholder="Enter Collectable age" value={age} onChange={(e) => { setAge(e.target.value) }}></input>
      </div>

      <Form.Select aria-label="Default select example" value={condition} onChange={(e) => {setCondition(e.target.value)}}>
        <option>Choose the Condition</option>
        <option value="Mint">Mint</option>
        <option value="Excellent">Excellent</option>
        <option value="Very Good">Very Good</option>
        <option value="Poor">Poor</option>
      </Form.Select>

      <div>
        <button type="submit" className="btn btn-primary" onClick={addCollectable}>Submit</button>
      </div>

    </div>
  );
  function addCollectable() {

    const asyncPostCollectable = async () => {
      const url = 'http://localhost:5000/collectables';

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, description: description, age: age, condition: "Mint" })
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);
        navigate('/view')
      } catch (error) {
        console.error(error);
      }
    }

    const asyncPutCollectable = async () => {
      const url = `http://localhost:5000/collectables/${id}`;

      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, description: description, age: age, condition: condition })
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);


        navigate('/view')
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