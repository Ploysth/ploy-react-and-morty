import Card from "../Card";
import { useParams } from "react-router-dom";


function InfosPage({ character }) {
    const { id } = useParams()
    const existingCharacter = (character.find(rickAndMorty => rickAndMorty.id == id))
    return(
        <>
        <ul>
            <Card 
            key={existingCharacter.id}
            img={existingCharacter.image}
            name={existingCharacter.name}
            gender={existingCharacter.gender}
            status={existingCharacter.status}

            card={true}
            />
        </ul>
        <h1>you are currently on the Infopage</h1>
        </>
    );
};

export default InfosPage;