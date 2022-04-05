function Card({ img, name }) {

    return(
        <container className="character_box">
        <div className="character_all">
        <img src={img} alt="Character Image" />
        <h2>{name}</h2>
        </div>
        </container>
    );
}

export default Card;