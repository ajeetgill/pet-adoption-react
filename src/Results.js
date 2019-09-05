import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
    return (
        <div className='search'>
            {pets.length === 0 ? (
                <h1>No pets found.</h1>
            ) : (
                // in this case without curly bracres, it's a implicit return, whereas when I'm using curly braces, i need to explicitly return the component
                pets.map(pet => (
                    <Pet
                        animal={pet.type}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breeds.primary}
                        media={pet.photos}
                        location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    );
};
export default Results;
/**
 * 
    <div className='search'>
        {pets.length === 0 ? (
            <h1>No pets found.</h1>
        ) : (
            // in this case without curly bracres, it's a implicit return, whereas when I'm using curly braces, i need to explicitly return the component
            pets.map(pet => {
                return (
                    <Pet
                        animal={pet.type}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breeds.primary}
                        media={pet.photos}
                        location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                        id={pet.id}
                    />
                );
            })
        )}
    </div>
 */
