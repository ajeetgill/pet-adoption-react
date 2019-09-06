import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import { navigate } from '@reach/router';
import Modal from './Modal';

class Details extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loading: true
    //     };
    // }

    // Experimental feature below
    state = { loading: true, showModal: false };

    componentDidMount() {
        // to test Error Boundary
        // throw new Error('lol');

        pet.animal(this.props.id).then(({ animal }) => {
            this.setState({
                url: animal.url,
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
                loading: false
            });
        });
    }
    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
        // console.log(`showModal: ${this.state.showModal}`);
    };
    adopt = () => navigate(this.state.url);
    home = () => {
        // this.toggleModal;
        // console.log(`showModal: ${this.state.showModal}`);
        navigate('/');
    };
    render() {
        if (this.state.loading) return <h1>Loading...</h1>;

        const {
            animal,
            breed,
            location,
            description,
            name,
            media,
            showModal
        } = this.state;

        return (
            <div className='details'>
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button
                                onClick={this.toggleModal}
                                style={{ backgroundColor: theme }}
                            >
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {name}?</h1>
                                <div className='buttons'>
                                    <button onClick={this.adopt}>yes</button>
                                    <button onClick={this.home}>
                                        No, I&apos;m a monster
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}
