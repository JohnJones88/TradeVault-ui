import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collectable from "../../models/Collectable";
import TradeVaultCard from "../../components/card/TradeVaultCard";
import './SearchPage.css'
/*<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchPage() {
  const navigate = useNavigate();
  const [searches, setSearches] = useState<Collectable[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    searchCollectables();
  }, []);

  return (
    <div>
      <form>
        <div className="search">
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch} onClick={searchCollectables} />
          </span>
          <input className="search-input" type="search" placeholder="Search" onChange={(e) => { setName(e.target.value) }} />
        </div>
      </form>
      <div className="container">
        <div className="row g-4">
          {searches.map((collectable) => (
            <div onClick={() => navigate(`/view/${collectable.id}`)} key={collectable.id} className="col-xl-4 col-md-6 col-sm-12">
              <TradeVaultCard id={collectable.id} name={collectable.name} description={collectable.description} image={collectable.imageUrl} age={collectable.age} condition={collectable.condition} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  function searchCollectables() {

    const asyncPostCollectableSearch = async () => {
      const url = process.env.REACT_APP_BASE_URL + '/search';

      const options = {
        method: 'POST',
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
      asyncPostCollectableSearch();
    }
  }
}

export default SearchPage;