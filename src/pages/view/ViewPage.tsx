import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collectable from "../../models/Collectable";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './ViewPage.css';




function ViewPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [condition, setCondition] = useState('');

  useEffect(() => {


    const asyncGetTradeCardById = async () => {
      const url = process.env.REACT_APP_BASE_URL + `/collectables/${id}`;
      const options = {
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

  return (
    <div>

      <div className="container mb-4"><h3>Collectable</h3></div>

      <Card border="primary container" style={{ width: '18rem' }}>
        <Card.Body>
          <div className="row">
            <label className="form-label">Name: {name}</label>
          </div>
          <div className="row">
            <label className="form-label">Description: {description}</label>
          </div>
          <div className="row">
            <label className="form-label">Age: {age}</label>
          </div>
          <div className="row">
            <label className="form-label">Condition: {condition}</label>
          </div>
          <button className="btn btn-primary" type="button" onClick={() => navigate('/home')}>Home </button>
        </Card.Body>
      </Card>

    </div>
  )
}

export default ViewPage;