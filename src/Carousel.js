/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    };
    // Not necessary but just a react-handler which take some logic out of render method
    static getDerivedStateFromProps({ media }) {
        let photos = ['http://placecorgi.com/600/600'];

        if (media.length) {
            photos = photos.map(({ large }) => large);
        }
        return { photos };
    }
    render() {
        const { photos, active } = this.state;

        return (
            <div className='carousel'>
                <img src={photos[active]} alt='animal' />
                <div className='carousel-smallerr'>
                    {photos.map((photo, index) => (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                        <img
                            key={photo}
                            onClick={this.handleIndexClick}
                            date-index={i}
                            src={photo}
                            className={index === active ? 'active' : ''}
                            alt='animal thumbnail'
                        ></img>
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
