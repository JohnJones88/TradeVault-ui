/*import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collectable from "../../models/Collectable";
import TradeVaultCard from "../../components/card/TradeVaultCard";

function SearchPage() {
  const navigate = useNavigate();
  const [searches, setSearches] = useState<Collectable[]>([]);

  return (
    <div>

    </div>
  );
  function searchCollectables() {

    const asyncPostCollectableSearch = async () => {
      const url = process.env.REACT_APP_BASE_URL + '/search';

      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` },
        body: JSON.stringify({ name: name })
      }

      try {
        const response = await fetch(url, options);
        if (response.status === 401) {
          navigate('/')
        }
        const data = await response.json();

        setSearches(data);
      } catch (error) {
        console.error(error);
      }
    }


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
}

export default SearchPage;*/