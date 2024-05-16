import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Collectable from "../../models/Collectable";
import TradeVaultCard from "../../components/card/TradeVaultCard";

function ViewPage() {
  /*const navigate = useNavigate();
  const { id } = useParams();
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('')
  const [condition, setCondition] = useState('')*/

  const [viewCollectables, setViewCollectables] = useState<Collectable[]>([]);
  /*useEffect(() => {

    const asyncGetTradeCardById = async () => {
      const url = `http://localhost:5000/view${id}`;

      try {
        const response = await fetch(url);
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
  }, []);;*/

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <div className="row g-4">
                {viewCollectables.map((collectable) => (
                    <div key={collectable.id} className="col-xl-4 col-md-6 col-sm-12">
                        <TradeVaultCard id={collectable.id} name={collectable.name} description={collectable.description} image={"http://localhost:3000/s-l1200.webp"} age={collectable.age} condition={collectable.condition} />
                    </div>
                ))}</div>
      </Card.Body>
    </Card>
  )

  async function getViewCollectables(): Promise<void> {
    try {
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` },
      }
      const resp = await fetch('http://localhost:5000/view', options)
      const data = await resp.json();

      setViewCollectables(data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default ViewPage;