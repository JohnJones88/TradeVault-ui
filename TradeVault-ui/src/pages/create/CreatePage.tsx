import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function CreatePage(){
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('')
  const [condition, setCondition] = useState('')

  
return(
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
<div>
  <label>Condition</label>
  <input type="text" placeholder="Enter Collectable condition" value={condition} onChange={(e) => { setCondition(e.target.value) }}></input>
</div>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mint</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Excellent</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Very Good</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Poor</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

<div>
  <button type="submit" className="btn btn-primary" onClick={addOrUpdateCollectable}>Submit</button>
</div>

</div>
);
function addOrUpdateCollectable() {

  const asyncPostCollectable = async () => {
    const url = `http://localhost:5000/create`;

    const options = {
      method: 'POST',
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

  const asyncPutCollectable = async () => {
    const url = `http://localhost:5000/update/${id}`;

    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, description: description, age: age, condition: condition })
    }

    try {
      const response = await fetch(url, options);
     

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