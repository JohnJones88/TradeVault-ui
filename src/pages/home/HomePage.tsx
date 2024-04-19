import { useState, useEffect } from "react";
import Collectable from "../../models/Collectable";

function HomePage() {
    const [collectables, setCollectables] = useState<Collectable[]>([]);

    useEffect(() => {
        getCollectables();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {collectables.map((collectable) => (
                <div key={collectable.id} className="row">
                    <div className="col-4">
                        <img src={collectable.image} alt={collectable.name} />
                    </div>
                    <div className="col-8">
                        <h2>{collectable.name}</h2>
                        <p>{collectable.description}</p>
                        <p>{collectable.age}</p>
                    </div>
                </div>
            ))}
        </div>
    )

    async function getCollectables(): Promise<void> {
        //const resp = await fetch('http://localhost:5000/collectables?random=6'); // Grabs 6 random collectables
        const resp = await fetch("./homePageData.json");
        const data = await resp.json();

        setCollectables(data);
    }
}

export default HomePage;