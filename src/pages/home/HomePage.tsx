import { useState, useEffect } from "react";
import Collectable from "../../models/Collectable";
import Carousel from "react-bootstrap/Carousel";
import TradeVaultCard from "../../components/card/TradeVaultCard";
import { useNavigate } from 'react-router-dom';

let images = [
    "https://wallpapers.com/images/featured/solid-color-background-8hx8sccuk0vb8hpx.jpg",
    "https://www.chrislatta.org/images/graphics/backgrounds/solid-backgrounds-orange-FFA500-4096x2160-TV4K.png?v=20171211195613",
    "https://wallpapers.com/images/hd/solid-color-gradient-brown-6csx08ohspevfyhm.jpg"]

function HomePage() {
    const navigate = useNavigate();


    const [collectables, setCollectables] = useState<Collectable[]>([]);

    useEffect(() => {
        getCollectables();
    }, []);

    return (
        <div className="container">
            <div className="row mb-5">
                <Carousel className="col-12 px-0">
                    {images.map((image) => (
                        <Carousel.Item >
                            <img style={{ height: '40vh' }} src={image} className="img-fluid d-block w-100" />
                            <Carousel.Caption>
                                <h1>The Trade Vault</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div className="row g-4">
                {collectables.map((collectable) => (
                    <div onClick={() => navigateTo(collectable.id)} key={collectable.id} className="col-xl-4 col-md-6 col-sm-12">
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
            const resp = await fetch(process.env.REACT_APP_BASE_URL + '/collectables?random=6', options); // Grabs 6 random collectables
            // const resp = await fetch("./homePageData.json");
            if(resp.status === 401){
                navigate('/')
              }
            const data = await resp.json();

            setCollectables(data);
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

export default HomePage;
