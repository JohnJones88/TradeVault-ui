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
        if (response.status === 401) {
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

      <meta name="view-page" content="width=device-width, initial-scale=1.0" />
      <Row>
        <body className="container-body">
          <div className="wrapper">
            <Col className='col-5'>
              <img className="collectable-img" src={imageUrl}></img>
            </Col>
            <Col>
              <div className="collectable-img-info h2">
                <h2>name: {name}</h2>
              </div>
              <div className="collectable-img-info p">
                <p>description: {description}</p>
              </div>

              <div className="collectable-img-info h4">
                <h4>condition: {condition}</h4>
              </div>
            </Col>

          </div>
        </body>
      </Row>
    </div>
  )
}

export default ViewPage;