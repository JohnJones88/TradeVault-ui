import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collectable from "../../models/Collectable";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './ViewPage.css';




function ViewPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState("");
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
        if(response.status === 401){
          navigate('/')
        }
        
        const data = await response.json();
        
        console.log(data);

        setImageUrl(data.imageUrl)
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
<Row>
      <body className="container-body">
        <div className="wrapper">
        <Col className='col-5'>
          <img className="tv-card-image" src={imageUrl}></img>
        </Col>
        <Col className='col-7 ps-1'>
            <h4>name: {name}</h4>
            <p>description: {description}</p>
            <h5>condition: {condition}</h5>
         </Col>
          
        </div>
      </body>
      </Row>
    </div>
  )
}

export default ViewPage;