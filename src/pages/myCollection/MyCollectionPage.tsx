import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collectable from "../../models/Collectable";
import TradeVaultCard from "../../components/card/TradeVaultCard";



function MyCollectionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [myCollections, setMyCollections] = useState<Collectable[]>([])

  useEffect(() => {

    const asyncgetMyCollections = async () => {
      const url = process.env.REACT_APP_BASE_URL + `/users/${id}/collectables`;
      const options = {
        headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` }
      }

      try {
        const response = await fetch(url, options);
        if (response.status === 401) {
          navigate('/')
        }
        const data = await response.json();

        setMyCollections(data)
      } catch (error) {
        console.error(error)
      }
    }
    asyncgetMyCollections();
  }, []);
  return (
    <div className="container">
      <div className="row g-4">
        {myCollections.map((collectable) => (
          <div onClick={() => navigateTo(collectable.id)} key={collectable.id} className="col-xl-4 col-md-6 col-sm-12">
            <TradeVaultCard id={collectable.id} name={collectable.name} description={collectable.description} image={collectable.imageUrl} age={collectable.age} condition={collectable.condition} />
          </div>
        ))}
      </div>

    </div>
  );

  function navigateTo(id: number) {
    const asyncNavigateTo = async (id: number) => {
      try {
        navigate(`/view/${id}`)
      } catch (error) {
        console.error(error);
      }
    }
    asyncNavigateTo(id);
  }
}

export default MyCollectionPage;