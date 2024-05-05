import { useState, useEffect } from "react";
import Collectable from "../../models/Collectable";
import Carousel from "react-bootstrap/Carousel";
import TradeVaultCard from "../../components/card/TradeVaultCard";

let images = [
    "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
    "https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg?fmt=webp&w=500",
    "https://images.freeimages.com/images/large-previews/83f/paris-1213603.jpg?fmt=webp&w=500"]

function HomePage() {
    const [collectables, setCollectables] = useState<Collectable[]>([]);

    useEffect(() => {
        getCollectables();
    }, []);

    return (
        <div className="container">
            <h1>Home Page</h1>

            <div className="row">
                <Carousel className="col-12">
                    {images.map((image) => (
                        <Carousel.Item>
                            <img style={{ height: '40vh' }} src={image} className="img-fluid d-block w-100" />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div className="row p-2" style={{ marginTop: '4%' }}>
                {collectables.map((collectable) => (
                    <div key={collectable.id} className="col">
                        <TradeVaultCard id={collectable.id} name={collectable.name} description={collectable.description} image={collectable.image} age={collectable.age} condition={collectable.condition} />
                    </div>
                ))}
            </div>
        </div>
    );

    async function getCollectables(): Promise<void> {
        try {
            const options = {
                headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` },
            }
            const resp = await fetch('http://localhost:5000/collectables?random=6', options); // Grabs 6 random collectables
            //const resp = await fetch("./homePageData.json");
            const data = await resp.json();

            setCollectables(data);
        } catch (error) {
            console.error(error);
        }
    }
}

export default HomePage;
