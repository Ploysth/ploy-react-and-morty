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
          gender={rickAndMorty.gender}
          status={rickAndMorty.status}
          id={rickAndMorty.id}
          card={false}
        />
      ))}
        </ul>
        </>

    );
};

export default HomePage