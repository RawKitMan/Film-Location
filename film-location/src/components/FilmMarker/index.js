import React, { Component } from 'react';
import './style.css';


class FilmMarker extends Component {
    render() {
        return (
            <div className='marker'>
                {this.props.text}
            </div>
        )
    }
};

export default FilmMarker;