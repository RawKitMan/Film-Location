import React, { Component } from 'react';


class FilmMarker extends Component {
    render() {
        return (
            <div style={{
                color: 'white',
                background: 'grey',
                padding: '15px 10px',
                display: 'inline-flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                transform: 'translate(-50%, -50%)'
            }}>
                {this.props.text}
            </div>
        )
    }
};

export default FilmMarker;