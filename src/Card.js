import { Link } from "react-router-dom";
import { useState } from "react";
function Card({ img, name, gender, status, id, card }) {
const [detailCards, setDetailCards] = useState(card);

    return(
        <container className="character_box">

        {detailCards ? (     
        <div className="character_all">
        <img src={img} alt="Character Image" />
        <h2>{name}</h2>
        <p>I am {gender}</p>
        <p>My status is {status}</p>
        <p>{id}</p>
        <button onClick={() => setDetailCards(false)}>Show less</button>
        </div>
        ) : ( 
        
            <div className="character_all">
        <img src={img} alt="Character Image" />
        <h2>{name}</h2>
        <button>
            <Link onClick={() => setDetailCards(true)} to={`/infos/${id}`}>show more</Link>
        </button>
        </div>
    )}
    </container>
    );
        };

export default Card;