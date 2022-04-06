import Card from './../Card';

function HomePage({ character }) {
    return(
        <>
        <ul>
        {character.map(rickAndMorty => (
        <Card
          key={rickAndMorty.id}
          img={rickAndMorty.image}
          name={rickAndMorty.name}
        />
      ))}
        </ul>
        </>

    );
};

export default HomePage