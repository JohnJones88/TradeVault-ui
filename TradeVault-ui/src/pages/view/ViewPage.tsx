import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collectable from "../../models/Collectable";
import { Card } from "react-bootstrap";
import './ViewPage.css';




function ViewPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('')
  const [condition, setCondition] = useState('')

  const [viewCollectables, setViewCollectables] = useState<Collectable[]>([]);
  useEffect(() => {


    const asyncGetTradeCardById = async () => {
      const url = `http://localhost:5000/collectables/${id}`;
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` },
      }


      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setName(data.name)
        setDescription(data.description)
        setAge(data.age)
        setCondition(data.condition)
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      asyncGetTradeCardById();
    }
  }, []);

  return (<div>
      <div className="view-page container container d-flex align-items-center justify-content-center">
      <Card style={{ height: "10rem", maxWidth: '100%', width: "18rem" }}>
      <Card.Body>

    <div>Name: {name}</div>
    <div>Description: {description}</div>
    <div>Age: {age}</div>
    <div>Condition: {condition}</div>
    
    </Card.Body>
    </Card>
    </div>
    
  </div>

  )

  async function getViewCollectables(): Promise<void> {
    try {
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` },
      }
      const resp = await fetch(`http://localhost:5000/collectables/${id}`, options)
      const data = await resp.json();

      setViewCollectables(data);
    } catch (error) {
      console.error(error);
    };
    const asyncPutCollectable = async () => {
      const url = `http://localhost:5000/collectables/${id}`;

      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, description: description, age: age, condition: condition })
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data)
        asyncPutCollectable();


        navigate('/view')
      } catch (error) {
        console.error(error);
      }


    }
  } getViewCollectables()

}

export default ViewPage;