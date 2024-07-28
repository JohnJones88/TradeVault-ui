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

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className="container-body">
        <div className="wrapper">
          <article className="collectable-img-info">
            <h2>name: {name}</h2>
            <p>description: {description}</p>
            <h4>condition: {condition}</h4>
          </article>
          <img className="collectable-img" src="http://localhost:3000/s-l1200.webp" alt="Collectable Image" />
        </div>
      </body>

    </div>
  )
}

export default ViewPage;