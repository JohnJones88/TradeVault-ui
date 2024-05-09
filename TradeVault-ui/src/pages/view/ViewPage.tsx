import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collectable from "../../models/Collectable";

function ViewPage() {
  const [viewCollectables, setViewCollectables] = useState<Collectable[]>([]);
  useEffect(() => {
    getViewCollectables();
  }, []);

  return (
    <div className="container">
      <h1>View Collectable</h1>
    </div>
  )

  async function getViewCollectables(): Promise<void> {
    try {
      const options = {
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